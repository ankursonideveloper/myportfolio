import React from "react";
import List from "./List";

const ExperienceDescription = (props) => {
  return (
    <div className="mx-2 mt-2">
      {props.experienceDescription.map((item) => {
        let firstKey = Object.keys(item)[0];
        let firstValue = item[firstKey];
        return (
          <div className="mb-2">
            <p className="font-semibold">{firstKey}</p>
            <List list={[firstValue]}></List>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceDescription;
