import React, { useEffect, useState } from "react";
import List from "../List.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-30 pb-2 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!!!</span>😊
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            minus impedit tenetur eaque earum, nisi ea aperiam praesentium.
            Aliquid voluptates explicabo aliquam amet! Aspernatur saepe
            exercitationem rerum consequatur similique harum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Pariatur officia, dolores
            neque dolor illum soluta minus delectus nemo dicta nisi.
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-4">Back</button>
          </Link>
        </div>

        <div className="mt-5 mb-12 grid grid-cols-1 md:grid-cols-3 gap-2">
          {book.map((items) => (
            <Cards items={items} key={items.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
