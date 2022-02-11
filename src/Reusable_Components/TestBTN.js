import React from "react";
import { Link } from "react-router-dom";
import "./Styles/TestBTN.css";

const TestBTN = ({ path, year, courseNb }) => {
  return (
    <>
      <a href={path} target="_blank" rel="noreferrer" className="link_a">
        <div className="test_div">
          <span>{year}</span>
          <span>Course: {courseNb}</span>
        </div>
      </a>
    </>
  );
};

export default TestBTN;
