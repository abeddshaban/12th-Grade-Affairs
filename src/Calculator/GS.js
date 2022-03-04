import React, { useEffect, useState } from "react";
import Title from "../Reusable_Components/Title";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Styles/Calc.css";

const GS = () => {
  const [ArabicGS, setArabicGS] = useState();
  const [EnglishGS, setEnglishGS] = useState();
  const [MathGS, setMathGS] = useState();
  const [PhysicsGS, setPhysicsGS] = useState();
  const [ChemistryGS, setChemistryGS] = useState();
  const [HistoryGS, setHistoryGS] = useState();
  const [GeographyGS, setGeographyGS] = useState();
  const [CivicsGS, setCivicsGS] = useState();
  const [PhilosophyGS, setPhilosophyGS] = useState();
  const [GStotal, setGStotal] = useState();

  useEffect(() => {
    setGStotal(
      (EnglishGS * 2 +
        ArabicGS * 2.5 +
        MathGS * 8 +
        PhysicsGS * 5.5 +
        ChemistryGS * 4 +
        CivicsGS * 1.5 +
        HistoryGS * 1.5 +
        GeographyGS * 1.5 +
        PhilosophyGS * 2) /
        5.7
    );
  }, [
    EnglishGS,
    ArabicGS,
    MathGS,
    PhysicsGS,
    ChemistryGS,
    CivicsGS,
    HistoryGS,
    GeographyGS,
    PhilosophyGS,
  ]);

  const ResetGSValues = (e) => {
    e.preventDefault();

    setArabicGS(0);
    setEnglishGS(0);
    setMathGS(0);
    setPhysicsGS(0);
    setChemistryGS(0);
    setHistoryGS(0);
    setGeographyGS(0);
    setCivicsGS(0);
    setPhilosophyGS(0);

    console.log("reset GS grades done :)");
  };

  return (
    <>
      <div className="background_GS">
        <Title title="GS" />
      </div>
      <br />

      <div className="App">
        <section className="subjects_section">
          <span>English:</span>
          <span>Arabic:</span>
          <span>Math:</span>
          <span>Physics:</span>
          <span>Chemistry:</span>
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
              placeholder="English"
              value={EnglishGS}
              onChange={(e) => setEnglishGS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({EnglishGS * 2} /40)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Arabic"
              value={ArabicGS}
              onChange={(e) => setArabicGS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({ArabicGS * 2.5} /50)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Math"
              value={MathGS}
              onChange={(e) => setMathGS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({MathGS * 8} /160)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Physics"
              value={PhysicsGS}
              onChange={(e) => setPhysicsGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({PhysicsGS * 5.5} /110)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Chemistry"
              value={ChemistryGS}
              onChange={(e) => setChemistryGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({ChemistryGS * 4} /80)</span>
          </div>

          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Civics"
              value={CivicsGS}
              onChange={(e) => setCivicsGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({CivicsGS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="History"
              value={HistoryGS}
              onChange={(e) => setHistoryGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({HistoryGS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Geography"
              value={GeographyGS}
              onChange={(e) => setGeographyGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({GeographyGS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Philosophy"
              value={PhilosophyGS}
              onChange={(e) => setPhilosophyGS(e.target.value)}
            />
            <span className="outOf"> /20</span>
            <span className="margleft  grey">({PhilosophyGS * 2} /40)</span>
          </div>
        </section>
      </div>
      {/* output */}
      <br />
      <div className="reset_button">
        <Button onClick={ResetGSValues} variant="outlined">
          reset
        </Button>
      </div>
      <div className="total_grade_div">
        <span className="total_value">
          Your total grade is
          <strong>{GStotal > 0 ? GStotal.toFixed(2) : null}</strong>/100
        </span>
      </div>
      <br />
      {(EnglishGS > 0) &
      (ArabicGS > 0) &
      (MathGS > 0) &
      (PhysicsGS > 0) &
      (ChemistryGS > 0) &
      (CivicsGS > 0) &
      (HistoryGS > 0) &
      (GeographyGS > 0) &
      (PhilosophyGS > 0) ? (
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

export default GS;
