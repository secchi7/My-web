import React from "react";
import ProjectItem from "./ProjectItem";
import consumoLuz from "../assets/appConsumoLuz.jpg";
import organizadorTareas from "../assets/organizadorTareas.JPG";
import contable from "../assets/appContable.jpg";
import ratioshares from "../assets/ratioShares.jpg";
import AppConsumoLuz from "./AppConsumoLuz";
import AppContable from "./AppContable";
import AppOrganizador from "./AppOrganizador";
import AppRatioShares from "./AppRatioShares";

import { useTranslation } from "react-i18next";

const Projects = () => {
  const [display, setDisplay] = React.useState(true);
  const [appConsumoLuz, setAppConsumoLuz] = React.useState(false);
  const [appOrganizador, setAppOrganizador] = React.useState(false);
  const [appContable, setAppContable] = React.useState(false);
  const [appRatioShares, setRatioShares] = React.useState(false);
  const { t } = useTranslation();
  const {
    title,
    description,
    title_project_1,
    title_project_2,
    title_project_3,
    title_project_4,
    info,
    b_repository,
    b_back,
  } = t("projects");

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">{title}</h1>
      <p className="text-Jusitify py-8">{description}</p>
      {display ? (
        <div className="grid md:grid-cols-2 gap-12">
          <ProjectItem
            className="h-1"
            img={consumoLuz}
            title={title_project_1}
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppConsumoLuz(true)}>
                  <p className="w-fit text-center mt-3 m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {info}
                  </p>
                </div>
              </div>
            }
            link="https://github.com/secchi7/ConsumoLuz/tree/master"
          />
          <ProjectItem
            img={organizadorTareas}
            title={title_project_2}
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppOrganizador(true)}>
                  <p className="w-fit text-center mt-3 m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {info}
                  </p>
                </div>
              </div>
            }
            link="https://secchi.pythonanywhere.com/"
          />
          <ProjectItem
            img={contable}
            title={title_project_3}
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppContable(true)}>
                  <p className="w-fit text-center mt-3 m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {info}
                  </p>
                </div>
              </div>
            }
            link="https://github.com/secchi7/AppContable"
          />
          <ProjectItem
            img={ratioshares}
            title={title_project_4}
            display_more_info={
              <div onClick={() => setDisplay(false)}>
                <div onClick={() => setAppRatioShares(true)}>
                  <p className="w-fit text-center mt-3 m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {info}
                  </p>
                </div>
              </div>
            }
            link="https://secchi7.github.io/ratioShares/"
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
                  <p className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {b_repository}
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  <div onClick={() => setAppConsumoLuz(false)}> {b_back}</div>
                </div>
              </div>
            </div>
          ) : appOrganizador ? (
            <div>
              <AppOrganizador />
              <div className="space-y-2">
                <a href="https://secchi.pythonanywhere.com/" target="_blank">
                  <p className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {b_repository}
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  <div onClick={() => setAppOrganizador(false)}> {b_back}</div>
                </div>
              </div>
            </div>
          ) : appContable ? (
            <div>
              <AppContable />
              <div className="space-y-2">
                <a
                  href="https://github.com/secchi7/AppContable"
                  target="_blank"
                >
                  <p className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {b_repository}
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  {b_back}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <AppRatioShares />
              <div className="space-y-2">
                <a
                  href="https://secchi7.github.io/ratioShares/"
                  target="_blank"
                >
                  <p className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                    {b_repository}
                  </p>
                </a>
                <div
                  onClick={() => setDisplay(true)}
                  className="w-fit text-center m-auto p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
                >
                  {b_back}
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
