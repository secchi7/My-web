import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "es", lang: "Español" },
];

const LangueSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="md:block fixed top z-10">
      <div className="flex flex-col"></div>
      {languages.map((lng) => {
          return (
          <div className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <div
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LangueSelector;
