import React from "react";
import organizadorTareas from "../assets/organizadorTareas.JPG";

const AppOrganizador = () => {
  return (
    <div className="py-3">
      <h2 className="text-2xl text-center font-semibold text-[#001b5e]">
        Organizador de Tareas
      </h2>
      <div>
        También desarrollé una aplicación web sencilla para poder registrar
        distintas tareas pendientes a realizar, destacar las tareas importantes
        e indicar las tareas finalizadas. Durante el desarrollo de la aplicación
        utilicé:
        <div className="pl-4">
          <li>Django como framework.</li>
          <li>
            Javascript para realizar distintas validaciones del lado del cliente
            en la sección “Registrarse”, como también en la sección “Iniciar
            Sesión” para que se pueda ver u ocultar la contraseña.
          </li>
          <li>Booststrap para el diseño de la aplicación.</li>
          <li>Jinja como motor de plantillas.</li>
          <li>MySQL para la base de datos.</li>
        </div>
        <div className="py-3">
          <img className="w-full rounded-xl" src={organizadorTareas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppOrganizador;
