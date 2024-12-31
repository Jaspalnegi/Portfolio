import React from "react";
import css from "../../public/CSS3_logo_and_wordmark.svg.png"
import python from "../../public/Python_logo_icon-700x697.png";
import spring from '../../public/spring.webp';
import php from '../../public/php.png';
import javascript from '../../public/javaScript.png';

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: css,
      name: "css",
    },
    {
      id: 2,
      logo: python,
      name: "Python",
    },
    {
      id: 3,
      logo:spring,
      name: "spring",
    },
    {
      id: 4,
      logo: php,
      name: "php",
    },
    {
        id: 4,
        logo: javascript,
        name: "javascript",
      }

  ];
  return (
    <div name=" Experience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 ">
      <div>
        <h1 className="text-3xl font-bold mb-5 ">Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div className="flex felx-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300" key={id} >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
