import React from "react";

const List = (props) => {
  return (
    <ul className="mt-0 list-disc px-4">
      {props.list.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default List;
