import React from "react";
import pic from '../../public/software-developer-6521720_1280.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome in my feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a</h1>
              {/* <span className="text-red-700 font-bold">Devoloper</span> */}
              <ReactTyped
                className="text-red-700"
                strings={["Devoloper", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              deleniti doloribus nihil? Ipsum sint quis libero facere vitae nisi
              veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Voluptates ad quisquam nemo, dolores praesentium repellat
              facilis voluptate commodi beatae odit!
            </p>
            <br />
            {/* socail media */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className=" space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/"
                    target="_blank">
                    <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://in.linkedin.com/"
                    target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/"
                    target="_blank">
                    <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://web.telegram.org/a/"
                    target="_blank">
                    <FaTelegramPlane className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <DiNodejs className="text-2xl md:text-3xl hover:scale-110 duration-300 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:1/2 md:ml-40 md:mt-20  order-1 ">
          <img src={pic} className="md:w-[600px] md:h-[350px]" alt=""/>
          </div>
        </div>
      </div>
      <hr></hr>
      
    </>
  );
}

export default Home;
