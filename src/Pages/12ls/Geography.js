import React from "react";
import Navbar from "../../Navbar";
import JsonData from "./12LsMaterial.json";
import TestBTN from "../../Reusable_Components/TestBTN.js";

const Geography = () => {
  const data = JsonData[1].Geography_tests;
  return (
    <>
      <div className="background_classes">
        <Navbar title="Geography Official Exams" />
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
