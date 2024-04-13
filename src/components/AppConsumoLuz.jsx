import React from "react";
import consumoLuz from "../assets/appConsumoLuz.jpg";

const AppConsumoLuz = () => {
  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        Aplicación Consumo de Luz
      </h2>
      <div>
        <p>
          Aplicación para controlar el consumo de luz. Se divide el año en
          períodos bimestrales. El primer período inicia el día 24 de diciembre
          del año anterior y cierra el día 24 de febrero del siguiente año.
        </p>
        <p>
          El programa realiza el cálculo del consumo por períodos, como así el
          consumo actual. Grafica los últimos 4 años de la base de datos.
        </p>
        <p>
          Utilizé el módulo tkinter de Python y las librerías de matplotlib,
          numpy, squilite entre otras. Se puede acceder al repositorio con el
          siguiente enlace.
        </p>
        <div className="py-3">
          <img className="w-full rounded-xl" src={consumoLuz} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppConsumoLuz;
