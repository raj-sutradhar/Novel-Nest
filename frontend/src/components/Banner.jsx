import React from "react";
import banner from "/banner.jpg";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row max-h-screen">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes here to Learn Something{" "}
              <span className="text-pink-500"> New Everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              voluptatem laboriosam numquam temporibus, molestiae laborum
              commodi magni aut. Possimus, quidem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi, voluptas.
            </p>
            <fieldset className="w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="p-3 join-item"
                />
                <button className="btn btn-secondary join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-4 md:mt-32 order-1">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
