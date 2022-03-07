import { useEffect, useState } from "react";
import Title from "../Reusable_Components/Title";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";
import "./Styles/Calc.css";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const LS = () => {
  const [EnglishLS, setEnglishLS] = useState("");
  const [ArabicLS, setArabicLS] = useState("");
  const [MathLS, setMathLS] = useState("");
  const [PhysicsLS, setPhysicsLS] = useState("");
  const [ChemistryLS, setChemistryLS] = useState("");
  const [BiologyLS, setBiologyLS] = useState("");
  const [CivicsLS, setCivicsLS] = useState("");
  const [HistoryLS, setHistoryLS] = useState("");
  const [GeographyLS, setGeographyLS] = useState("");
  const [PhilosophyLS, setPhilosophyLS] = useState("");
  const [TotalLS, setTotalLS] = useState("");

  useEffect(() => {
    setTotalLS(
      (EnglishLS * 2 +
        ArabicLS * 2.5 +
        MathLS * 4 +
        PhysicsLS * 4 +
        ChemistryLS * 4 +
        BiologyLS * 5 +
        CivicsLS * 1.5 +
        HistoryLS * 1.5 +
        GeographyLS * 1.5 +
        PhilosophyLS * 2) /
        5.6
    );
  }, [
    EnglishLS,
    ArabicLS,
    MathLS,
    PhysicsLS,
    ChemistryLS,
    BiologyLS,
    CivicsLS,
    HistoryLS,
    GeographyLS,
    PhilosophyLS,
  ]);

  const ResetLSValues = (e) => {
    e.preventDefault();

    setEnglishLS("");
    setArabicLS("");
    setMathLS("");
    setPhysicsLS("");
    setChemistryLS("");
    setBiologyLS("");
    setCivicsLS("");
    setHistoryLS("");
    setGeographyLS("");
    setPhilosophyLS("");

    console.log("reset grades of LS done :)");
  };
  return (
    <>
      <div className="background_LS">
        <Title title="LS" />
      </div>
      <br />
      {/* <h2 className="center">
        <WarningAmberIcon />
        other sections and grades coming soon
        <WarningAmberIcon />
      </h2> */}
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
              placeholder="English"
              value={EnglishLS}
              onChange={(e) => setEnglishLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({EnglishLS * 2} /40)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Arabic"
              value={ArabicLS}
              onChange={(e) => setArabicLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({ArabicLS * 2.5} /50)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Math"
              value={MathLS}
              onChange={(e) => setMathLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({MathLS * 4} /80)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Physics"
              value={PhysicsLS}
              onChange={(e) => setPhysicsLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({PhysicsLS * 4} /80)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Chemistry"
              value={ChemistryLS}
              onChange={(e) => setChemistryLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({ChemistryLS * 4} /80)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Biology"
              value={BiologyLS}
              onChange={(e) => setBiologyLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({BiologyLS * 5} /100)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Civics"
              value={CivicsLS}
              onChange={(e) => setCivicsLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({CivicsLS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="History"
              value={HistoryLS}
              onChange={(e) => setHistoryLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({HistoryLS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Geography"
              value={GeographyLS}
              onChange={(e) => setGeographyLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({GeographyLS * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Philosophy"
              value={PhilosophyLS}
              onChange={(e) => setPhilosophyLS(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({PhilosophyLS * 2} /40)</span>
          </div>
        </section>
      </div>
      {/* output */}
      <br />
      <div className="reset_button">
        <Button onClick={ResetLSValues} variant="outlined">
          reset
        </Button>
      </div>
      <div className="total_grade_div">
        <span className="total_value">
          Your total grade is
          <strong className="margleft">
            {TotalLS > 0 ? TotalLS.toFixed(2) : 0}
          </strong>
          /100
        </span>
      </div>
      <br />
      {(EnglishLS > 0) &
      (ArabicLS > 0) &
      (MathLS > 0) &
      (PhysicsLS > 0) &
      (ChemistryLS > 0) &
      (BiologyLS > 0) &
      (CivicsLS > 0) &
      (HistoryLS > 0) &
      (GeographyLS > 0) &
      (PhilosophyLS > 0) ? (
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
