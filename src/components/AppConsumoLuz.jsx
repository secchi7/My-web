import React from "react";
import consumoLuz from "../assets/appConsumoLuz.jpg";
import { useTranslation } from "react-i18next";

const AppConsumoLuz = () => {
  const { t } = useTranslation();
  const { title, description_1, description_2, description_3 } = t("lightApp");

  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        {title}
      </h2>
      <div>
        <p>{description_1}</p>
        <p>{description_2}</p>
        <p>{description_3}</p>
        <div className="py-3">
          <img className="w-full rounded-xl" src={consumoLuz} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppConsumoLuz;