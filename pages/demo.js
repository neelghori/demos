import React from "react";
import Demoss from "../components/Demoss";

const demo = () => {
  const array = [
    { firstname: "neel", lastname: "ghroi" },
    { firstname: "neel", lastname: "ghroi" },
    { firstname: "neel", lastname: "ghroi" },
  ];
  return (
    <div>
      {array.map((val, key) => {
        return <Demoss key={key} {...val} />;
      })}
    </div>
  );
};

export default demo;
