import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavigationBTN.css";

const NavigationBTN = ({ text, path }) => {
  return (
    <div className="holder">
      <Link to={path} className="link">
        <section className="holder_section">{text}</section>
      </Link>
    </div>
  );
};

export default NavigationBTN;
