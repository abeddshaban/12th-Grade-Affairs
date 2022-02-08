import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavigationBTN.css";

const Grade_Section = ({ section, path }) => {
  return (
    <div className="holder">
      <Link to={"/" + path}>
        <section className="holder_section">{section}</section>
      </Link>
    </div>
  );
};

export default Grade_Section;
