import React from "react";
import Skill from "./Skill";
import ProjectSkill from "./ProjectSkill";

const Project = (props) => {
  return (
    <div className="mx-1 rounded-lg border-1 shadow-lg px-2 py-2">
      <p className="font-semibold text-l">{props.projectTitle}</p>
      <p>{props.projectDescription}</p>
      <div className="flex flex-wrap gap-y-1 mt-2">
        {props.projectSkills.map((item) => {
          return <ProjectSkill skill={item}></ProjectSkill>;
        })}
      </div>
    </div>
  );
};

export default Project;
