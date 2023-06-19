import React from "react";

import { dummyProjects } from "../../dummyData";
import { Bullet } from "../../assets/icons/Bullet";
import { AddSquare } from "../../assets/icons/AddSquare";
import { Menu1 } from "../../assets/icons/Menu1";


export default function MyProjects() {
  const projects = dummyProjects;
  const currentProject = dummyProjects[0];

  return (
    <div>
      <header className={"hidden md:flex justify-between items-center mt-[30px] mb-5 mx-[22px]"}>
        <span className={"text-xs font-bold text-grey uppercase"}>MY PROJECTS</span>
        <AddSquare />
      </header>
      <ul className={"hidden md:flex flex-col gap-[10px]"}>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`${"flex items-center justify-between mx-3 pl-3 py-[10px]"} ${
              project.id === currentProject.id && "bg-blue bg-opacity-10 rounded-[6px]"
            }`}
          >
            <span className={"flex gap-4 items-center"}>
              <Bullet color={project.favColor} />
              <span className={"text-sm font-medium text-grey"}>{project.name}</span>
            </span>
            {project.id === currentProject.id && (
              <span className={"mr-3"}>
                <Menu1 />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
