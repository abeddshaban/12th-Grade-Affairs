import React from "react";
import Navbar from "../Navbar";
import "./Pages_styles/Classes.css";
import NavigationBTN from "../Reusable_Components/NavigationBTN";

const Classes = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Class" />
      </div>
      <div className="classes_page">
        <NavigationBTN path="/12" text="Grade 12" />
      </div>
    </>
  );
};

export default Classes;
