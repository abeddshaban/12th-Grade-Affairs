import React from "react";
import Navbar from "../Navbar";
import "./Pages_styles/Classes.css";
import Grade_Section from "../Reusable_Components/NavigationBTN";

const Classes = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Class" />
      </div>
      <div className="classes_page">
        <Grade_Section path="12" section="Grade 12" />
      </div>
    </>
  );
};

export default Classes;
