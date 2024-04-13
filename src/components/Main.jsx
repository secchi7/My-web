import React from "react";
import montian from "../assets/montain.jpg"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={montian}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-star items-center">
          <h1 className="sn:text-5xl text-4xl text-center font-bold text-gray-800">
            Andrés Secchi Gehrls
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ingeniero Civil",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Programador",
                3000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[200px] w-full">
            <a
              href="https://www.linkedin.com/in/andrés-secchi-gehrls-542273132/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer pl-5" size={50} />
            </a>
            
            <a href="https://github.com/secchi7" target="_blank">
              <FaGithub className="cursor-pointer pl-5" size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
