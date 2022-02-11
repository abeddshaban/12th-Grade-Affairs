import React from "react";
import Navbar from "../../Navbar";
import JsonData from "./12LsMaterial.json";
import TestBTN from "../../Reusable_Components/TestBTN.js";
import pdf from "../../Official_exams/12/LS/English/2004-1-english-ls.pdf";

function English() {
  const data = JsonData[0].English_tests;

  return (
    <>
      <div className="background_classes">
        <Navbar title="English Tests" />
      </div>
      <br />
      <div className="classes_page">
        {data.map((test) => {
          return (
            <TestBTN
              path={test.path}
              year={test.year}
              courseNb={test.courseNb}
            />
          );
        })}
        <TestBTN path={pdf} year="x" courseNb="y" />
      </div>
    </>
  );
}

export default English;
