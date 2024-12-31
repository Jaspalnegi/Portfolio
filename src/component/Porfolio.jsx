import React from "react";
import java from "../../public/Java_logo_icon-700x392.png";
import python from "../../public/Python_logo_icon-700x697.png";
import mongoDb from "../../public/MongoDB_logo_Mongo_DB-700x190.png";
import express from "../../public/express.js_Logo-700x156.png";
import nodejs from "../../public/Node_logo_NodeJS-700x428.png";

function Porfolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
    },
    {
      id: 2,
      logo: python,
      name: "Python",
    },
    {
      id: 3,
      logo: express,
      name: "Express",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Nodejs",
    },
    {
      id: 4,
      logo: mongoDb,
      name: "MongoDB",
    },
  ];
  return (
    <div
      name="Porfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 ">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="py-2 font-bold text-xl mb-2 ">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta, laborum.
                </p>
              </div>
              <div className=" px-3 py-4 space-x-3 justify-around">
                <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
