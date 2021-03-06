import React from "react";
import Title from "../../../Reusable_Components/Title";
import JsonData from "../../../12LsMaterial.json";
import TestBTN from "../../../Reusable_Components/TestBTN.js";

const Philosophy = () => {
  const data = JsonData[0].twelve[0].EN[0].ls[8].Philosophy;
  return (
    <>
      <div className="background_classes_philosophy">
        <Title title="Philosophy Official Exams" />
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

export default Philosophy;
