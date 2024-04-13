import React from "react";
import ProjectItem from "./ProjectItem";
import consumoLuz from "../assets/appConsumoLuz.jpg";
import organizadorTareas from "../assets/organizadorTareas.JPG";
import contable from "../assets/appContable.jpg";
import AppConsumoLuz from "./AppConsumoLuz";
import AppContable from "./AppContable";
import AppOrganizador from "./AppOrganizador";

const Projects = () => {
  const [display, setDisplay] = React.useState(true);
  const [appConsumoLuz, setAppConsumoLuz] = React.useState(false);
  const [appOrganizador, setAppOrganizador] = React.useState(false);

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Proyectos
      </h1>
      <p className="text-Jusitify py-8">
        Desde que emprendí este camino, desarrolle distintas aplicaciones web
        como de escritorio, las cuales muestro a continuación.
      </p>
      {display ? (
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem
            img={consumoLuz}
            title="Aplicación Consumo de Luz"
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppConsumoLuz(true)}>
                  <p> </p>
                  <p className="w-1/2 text-center m-auto mt-2 p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Más información
                  </p>
                </div>
              </div>
            }
            link="https://github.com/secchi7/ConsumoLuz/tree/master"
          />
          <ProjectItem
            img={organizadorTareas}
            title="Organizador de Tareas"
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppOrganizador(true)}>
                  <p className="w-1/2 text-center m-auto mt-2 p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Más información
                  </p>
                </div>
              </div>
            }
            link="https://secchi.pythonanywhere.com/"
          />
          <ProjectItem
            img={contable}
            title="Aplicación Contable"
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <p className="w-1/2 text-center m-auto mt-2 p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                  Más información
                </p>
              </div>
            }
            link="https://github.com/secchi7/AppContable"
          />
        </div>
      ) : (
        <div>
          {appConsumoLuz ? (
            <div>
              <AppConsumoLuz />
              <div className="space-y-2">
                <a
                  href="https://github.com/secchi7/ConsumoLuz/tree/master"
                  target="_blank"
                >
                  <p className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Ir al Repositorio
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  <div onClick={() => setAppConsumoLuz(false)}>Volver</div>
                </div>
              </div>
            </div>
          ) : appOrganizador ? (
            <div>
              <AppOrganizador />
              <div className="space-y-2">
                <a href="https://secchi.pythonanywhere.com/" target="_blank">
                  <p className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Ir al Repositorio
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  <div onClick={() => setAppOrganizador(false)}>Volver</div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <AppContable />
              <div className="space-y-2">
                <a
                  href="https://github.com/secchi7/AppContable"
                  target="_blank"
                >
                  <p className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    Ir al Repositorio
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-1/2 text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  Volver
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
