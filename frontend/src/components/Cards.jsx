import React from "react";

function Cards({ items }) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm mt-10 hover:scale-105 duration-300 transition-all ease-in-out dark:bg-slate-900 dark:text-white dark:border">
        <figure className="w-full h-64 flex justify-center items-center bg-gray-100 p-2">
          <img
            src={items.image}
            alt="Book Cover"
            className="max-w-full max-h-full object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {items.name}
            <div className="badge badge-secondary">{items.category}</div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions justify-between">
            <div className="px-2 py-1 rounded-full border-[2px]">
              ${items.price}
            </div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
