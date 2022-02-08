import React from "react";
import Navbar from "../../Navbar";
import Grade_Section from "../../Reusable_Components/NavigationBTN";

const TwelveLS = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Class" />
      </div>

      <div className="classes_page">
        <Grade_Section path="12-ls/English" section="English" />
        <Grade_Section path="" section="Arabic" />
        <Grade_Section path="" section="Math" />
        <Grade_Section path="" section="Chemistry" />
        <Grade_Section path="" section="Physics" />
        <Grade_Section path="" section="Biology" />
        <Grade_Section path="" section="Civics" />
        <Grade_Section path="" section="Geography" />
        <Grade_Section path="" section="Philosofy" />
        <Grade_Section path="" section="History" />
      </div>
    </>
  );
};

export default TwelveLS;
