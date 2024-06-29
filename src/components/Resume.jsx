import React from "react";
import { useTranslation } from "react-i18next";


const Resume = () => {
  const{t}= useTranslation()
  const {title,description}=t("about")


  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        {title}
      </h1>
      <p className="text-Jusitify py-8">
        {description}
      </p>
    </div>
  );
};

export default Resume;
