import React from "react";
import Navbar from "../../Navbar";
import JsonData from "./12LsMaterial.json";
import TestBTN from "../../Reusable_Components/TestBTN.js";

const Biology = () => {
  const data = JsonData[0].twelve[0].ls[3].Biology_tests;
  return (
    <>
      <div className="background_classes_biology">
        <Navbar title="Biology Official Exams" />
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

export default Biology;
