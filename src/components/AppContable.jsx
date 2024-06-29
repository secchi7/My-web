import React from "react";
import contable from "../assets/appContable.jpg";
import { useTranslation } from "react-i18next";

const AppContable = () => {
  const { t } = useTranslation();
  const { title, description_1 } = t("accountingApp");
  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        {title}
      </h2>
      <div>
        <p>{description_1}</p>
        <div className="py-3">
          <img className="w-full rounded-xl" src={contable} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppContable;
