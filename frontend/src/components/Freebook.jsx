import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../src/List.json";
import Cards from "./Cards";

function Freebook() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const filterData = list.filter((data) => data.category === "Free");

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 mt-10 md:mt-5 mb-20">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-pink-500">Free</span> Offered Course
        </h1>
        <p className="text-gray-600 mt-2">
          Explore our free courses and enhance your knowledge today.
        </p>
      </div>

      <div className="w-full">
        <Slider {...settings}>
          {filterData.map((items) => (
            <div key={items.id} className="px-2">
              <Cards items={items} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
