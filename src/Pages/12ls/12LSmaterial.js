import React from "react";
import Navbar from "../../Navbar";
import NavigationBTN from "../../Reusable_Components/NavigationBTN";

const TwelveLS = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Subject" />
      </div>

      <div className="classes_page">
        <NavigationBTN path="/12-ls/English" text="English" />
        <NavigationBTN path="/12-ls/Chemistry" text="Chemistry" />
        <NavigationBTN path="/12-ls/Biology" text="Biology" />
        <NavigationBTN path="/12-ls/Arabic" text="Arabic" />
        <NavigationBTN path="/12-ls/Geography" text="Geography" />
        <NavigationBTN path="/12-ls/Civics" text="Civics" />
        <NavigationBTN path="/12-ls/Math" text="Math" />
        <NavigationBTN path="/12-ls/Physics" text="Physics" />
        <NavigationBTN path="/12-ls/Philosophy" text="Philosophy" />
        {/* 
        <NavigationBTN path="/" text="History" /> 
        */}
      </div>
    </>
  );
};

export default TwelveLS;
