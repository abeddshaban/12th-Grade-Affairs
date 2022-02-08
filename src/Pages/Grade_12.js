import React from "react";
import Navbar from "../Navbar";
import "./Pages_styles/Classes.css";
import Grade_Section from "../Reusable_Components/NavigationBTN";

const Grade_12 = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Class" />
      </div>
      <div className="classes_page">
        {/* <Grade_Section path="" section="GS" /> */}
        <Grade_Section path="12-ls/subjects" section="LS" />
        {/* <Grade_Section path="" section="SE" /> */}
      </div>
    </>
  );
};

export default Grade_12;
