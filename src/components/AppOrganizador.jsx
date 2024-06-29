import React from "react";
import organizadorTareas from "../assets/organizadorTareas.JPG";
import { useTranslation } from "react-i18next";

const AppOrganizador = () => {
  const { t } = useTranslation();
  const { title, description_1, description_2 } = t("taskOrganizer");
  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        {title}
      </h2>
      <div>
        <p>{description_1}</p>
        <p>{description_2}</p>

        <div className="py-3">
          <img className="w-full rounded-xl" src={organizadorTareas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppOrganizador;
