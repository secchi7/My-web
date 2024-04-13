import React from "react";
import contable from "../assets/appContable.jpg";

const AppContable = () => {
  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        Aplicación Contable
      </h2>
      <div>
        <p>
          Actualmente estoy desarrollando otra aplicación más compleja para
          registrar los ahorros y gastos mensuales. Como el proyecto anterior,
          utilizo el módulo tkinter y las librerías datetime, sqlite y requests.
          Se puede acceder al código en el siguiente enlace.
        </p>
        <div className="py-3">
          <img className="w-full rounded-xl" src={contable} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppContable;
