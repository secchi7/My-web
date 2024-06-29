import React from "react";
import montian from "../assets/montain.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const Main = () => {
  const { t } = useTranslation();
  const { name, english, line1, line2 } = t("main");

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
            {name}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
           {english}&nbsp;

            <span>
              <Typewriter
                words={[line1, line2]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
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
