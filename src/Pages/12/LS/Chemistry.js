import React from "react";
import Title from "../../../Reusable_Components/Title";
import JsonData from "../../../12LsMaterial.json";
import TestBTN from "../../../Reusable_Components/TestBTN.js";

const Chemistry = () => {
  const data = JsonData[0].twelve[0].EN[0].ls[2].Chemistry;
  return (
    <>
      <div className="background_classes_chemisty">
        <Title title="Chemistry Official Exams" />
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

export default Chemistry;
