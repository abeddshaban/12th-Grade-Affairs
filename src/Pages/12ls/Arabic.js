import React from "react";
import Navbar from "../../Navbar";
import JsonData from "./12LsMaterial.json";
import TestBTN from "../../Reusable_Components/TestBTN.js";

const Arabic = () => {
  const data = JsonData[0].twelve[0].EN[0].ls[5].Arabic;
  return (
    <>
      <div className="background_classes_civics">
        <Navbar title="Arabic Official Exams" />
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

export default Arabic;
