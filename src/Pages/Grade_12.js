import React from "react";
import Title from "../Reusable_Components/Title";
import "./Pages_styles/Classes.css";
import NavigationBTN from "../Reusable_Components/NavigationBTN";

const Grade_12 = () => {
  return (
    <>
      <div className="background_classes">
        <Title title="Check your Class" />
      </div>
      <div className="classes_page">
        {/* <Grade_Section path="" section="GS" /> */}
        <NavigationBTN path="/12-ls" text="LS" />
        {/* <Grade_Section path="" section="SE" /> */}
      </div>
    </>
  );
};

export default Grade_12;
