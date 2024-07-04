import React from "react";

const ProjectItem = ({ img, title, display_more_info }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <img src={img} alt="/" className="object-cover md:h-full md:w-full rounded-xl group-hover:opacity-10" />
        <div className="w-full hidden group-hover:block absolute">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {title}
          </h3>
          <div>{display_more_info}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
