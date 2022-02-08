import React from "react";
import Navbar from "../../Navbar";
import Grade_Section from "../../Reusable_Components/NavigationBTN";
import one from "./Official_exams/English/2004-1-english-ls.pdf";

const English = () => {
  return (
    <>
      <div className="background_classes">
        <Navbar title="Material" />
      </div>
      <div className="classes_page">
        <embed src={one} type="application/pdf" />
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1EdrYcvXNWodVlh03kIgB8PGsAvz3_qB3/view?usp=sharing"
        >
          <h3>test</h3>
        </a>
      </div>

      {/* const array = [2, 5, 9]; let squares = array.map((num) => num * num);
      console.log(array); // [2, 5, 9] console.log(squares); // [4, 25, 81] */}
    </>
  );
};

export default English;
