import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Button from "@mui/material/Button";

const LS = () => {
  const [English, setEnglish] = useState(0);
  const [Arabic, setArabic] = useState(0);
  const [Math, setMath] = useState(0);
  const [Physics, setPhysics] = useState(0);
  const [Chemistry, setChemistry] = useState(0);
  const [Biology, setBiology] = useState(0);
  const [Civics, setCivics] = useState(0);
  const [History, setHistory] = useState(0);
  const [Geography, setGeography] = useState(0);
  const [Philosophy, setPhilosophy] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      (English * 2 +
        Arabic * 2.5 +
        Math * 4 +
        Physics * 4 +
        Chemistry * 4 +
        Biology * 5 +
        Civics * 1.5 +
        History * 1.5 +
        Geography * 1.5 +
        Philosophy * 2) /
        5.5
    );
  }, [
    English,
    Arabic,
    Math,
    Physics,
    Chemistry,
    Biology,
    Civics,
    History,
    Geography,
    Philosophy,
  ]);

  const ResetValues = (e) => {
    e.preventDefault();

    setEnglish(0);
    setArabic(0);
    setMath(0);
    setPhysics(0);
    setChemistry(0);
    setBiology(0);
    setCivics(0);
    setHistory(0);
    setGeography(0);
    setPhilosophy(0);
    console.log("reset grades done :)");
  };
  return (
    <>
      <div className="background_LS">
        <Navbar title="LS" />
      </div>
      <br />
      <h2 className="center">
        <WarningAmberIcon />
        other sections and grades coming soon
        <WarningAmberIcon />
      </h2>
      <div className="App">
        <section className="subjects_section">
          <span>English:</span>
          <span>Arabic:</span>
          <span>Math:</span>
          <span>Physics:</span>
          <span>Chemistry:</span>
          <span>Biology:</span>
          <span>Civics:</span>
          <span>History:</span>
          <span>Geography:</span>
          <span>Philosophy:</span>
        </section>

        <section className="input_section">
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={English}
              onChange={(e) => setEnglish(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Arabic}
              onChange={(e) => setArabic(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Math}
              onChange={(e) => setMath(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Physics}
              onChange={(e) => setPhysics(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Chemistry}
              onChange={(e) => setChemistry(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Biology}
              onChange={(e) => setBiology(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Civics}
              onChange={(e) => setCivics(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={History}
              onChange={(e) => setHistory(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Geography}
              onChange={(e) => setGeography(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              min="0"
              max="20"
              placeholder="grade"
              maxLength={2}
              value={Philosophy}
              onChange={(e) => setPhilosophy(e.target.value)}
            />
            <span className="outOf"> /20</span>
          </div>
        </section>
      </div>
      {/* output */}
      <br />
      <div className="reset_button">
        <Button onClick={ResetValues} variant="outlined">
          reset
        </Button>
      </div>
      <div className="total_grade_div">
        <span className="total_value">
          Your total grade is <strong>{Total.toFixed(2)}</strong>/100
        </span>
      </div>
      <br />
      {(English > 0) &
      (Arabic > 0) &
      (Math > 0) &
      (Physics > 0) &
      (Chemistry > 0) &
      (Biology > 0) &
      (Civics > 0) &
      (History > 0) &
      (Geography > 0) &
      (Philosophy > 0) ? (
        <div className="share_div">
          <>
            <h3>share ur score with others on:</h3>
            <a
              href="whatsapp://send?text=The text to share!"
              data-action="share/whatsapp/share"
            >
              <WhatsAppIcon className="WhatsAppIcon" />
            </a>
          </>
        </div>
      ) : null}
      <br />
      <br />
      <br />
    </>
  );
};

export default LS;
