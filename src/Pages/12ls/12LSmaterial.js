import React from "react";
import Navbar from "../../Navbar";
import NavigationBTN from "../../Reusable_Components/NavigationBTN";

const TwelveLS = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Check your Class" />
      </div>

      <div className="classes_page">
        <NavigationBTN path="/12-ls/English" text="English" />
        <NavigationBTN path="/" text="Arabic" />
        <NavigationBTN path="/" text="Math" />
        <NavigationBTN path="/" text="Chemistry" />
        <NavigationBTN path="/" text="Physics" />
        <NavigationBTN path="/" text="Biology" />
        <NavigationBTN path="/" text="Civics" />
        <NavigationBTN path="/" text="Geography" />
        <NavigationBTN path="/" text="Philosofy" />
        <NavigationBTN path="/" text="History" />
      </div>
    </>
  );
};

export default TwelveLS;
