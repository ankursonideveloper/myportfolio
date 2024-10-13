import React from "react";

const ProjectSkill = (props) => {
  return (
    <span className="bg-blue-100 border-solid rounded-lg px-1 mr-1 text-blue-900 font-semibold">
      {props.skill}
    </span>
  );
};

export default ProjectSkill;
