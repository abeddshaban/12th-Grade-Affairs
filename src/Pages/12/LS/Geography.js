import React from "react";
import Title from "../../../Reusable_Components/Title";
import JsonData from "../../../12LsMaterial.json";
import TestBTN from "../../../Reusable_Components/TestBTN.js";

const Geography = () => {
  const data = JsonData[0].twelve[0].EN[0].ls[1].Geography;

  return (
    <>
      <div className="background_classes_geography">
        <Title title="Geography Official Exams" />
      </div>
      <br />
      <div className="classes_page">
        {data.map((test) => {
          return (
            <TestBTN
              key={test.id}
              path={test.link}
              year={test.year}
              courseNb={test.courseNb}
            />
          );
        })}
      </div>
    </>
  );
};

export default Geography;
