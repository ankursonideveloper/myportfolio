import React from "react";

const Education = (props) => {
  return (
    <div className="mt-0">
      <p className="font-semibold text-lg">{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Education;
