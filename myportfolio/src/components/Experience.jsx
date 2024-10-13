import React from "react";
import ProjectSkill from "./ProjectSkill";
import ExperienceDescription from "./ExperienceDescription";

const Experience = (props) => {
  return (
    <div className="mx-1 rounded-lg border-1 shadow-lg px-2 pb-3 mt-3">
      <p className="font-bold text-xl">{props.experienceHeader}</p>
      <ExperienceDescription
        experienceDescription={props.experienceDescription}
      ></ExperienceDescription>
      <div className="flex flex-wrap gap-y-1 mt-3 mx-2 mb-2">
        {props.skills.map((item) => {
          return <ProjectSkill skill={item} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
