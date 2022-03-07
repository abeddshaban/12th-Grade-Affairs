import { useEffect, useState } from "react";
import Title from "../Reusable_Components/Title";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Styles/Calc.css";

const SE = () => {
  const [EnglishSE, setEnglishSE] = useState("");
  const [ArabicSE, setArabicSE] = useState("");
  const [MathSE, setMathSE] = useState("");
  const [PhysicsSE, setPhysicsSE] = useState("");
  const [ChemistrySE, setChemistrySE] = useState("");
  const [BiologySE, setBiologySE] = useState("");
  const [CivicsSE, setCivicsSE] = useState("");
  const [HistorySE, setHistorySE] = useState("");
  const [GeographySE, setGeographySE] = useState("");
  const [PhilosophySE, setPhilosophySE] = useState("");
  const [EconomicSE, setEconomicSE] = useState("");
  const [SociologySE, setSociologySE] = useState("");
  const [TotalSE, setTotalSE] = useState("");

  useEffect(() => {
    setTotalSE(
      (EnglishSE * 2 +
        ArabicSE * 3 +
        MathSE * 3.5 +
        PhysicsSE * 1 +
        ChemistrySE * 1 +
        BiologySE * 1 +
        CivicsSE * 1.5 +
        HistorySE * 1.5 +
        GeographySE * 1.5 +
        PhilosophySE * 2.5 +
        EconomicSE * 4 +
        SociologySE * 4) /
        5.3
    );
  }, [
    EnglishSE,
    ArabicSE,
    MathSE,
    PhysicsSE,
    ChemistrySE,
    BiologySE,
    CivicsSE,
    HistorySE,
    GeographySE,
    PhilosophySE,
    EconomicSE,
    SociologySE,
  ]);

  const ResetSEValues = (e) => {
    e.preventDefault();

    setEnglishSE("");
    setArabicSE("");
    setMathSE("");
    setPhysicsSE("");
    setChemistrySE("");
    setBiologySE("");
    setCivicsSE("");
    setHistorySE("");
    setGeographySE("");
    setPhilosophySE("");
    setEconomicSE("");
    setSociologySE("");

    console.log("reset grades of SE done :)");
  };
  return (
    <>
      <div className="background_SE">
        <Title title="SE" />
      </div>
      <br />

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
          <span>Economic:</span>
          <span>Sociology:</span>
        </section>

        <section className="input_section">
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="English"
              value={EnglishSE}
              onChange={(e) => setEnglishSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({EnglishSE * 2} /40)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Arabic"
              value={ArabicSE}
              onChange={(e) => setArabicSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({ArabicSE * 3} /60)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Math"
              value={MathSE}
              onChange={(e) => setMathSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({MathSE * 3.5} /70)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Physics"
              value={PhysicsSE}
              onChange={(e) => setPhysicsSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({PhysicsSE * 1} /20)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Chemistry"
              value={ChemistrySE}
              onChange={(e) => setChemistrySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({ChemistrySE * 1} /20)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Biology"
              value={BiologySE}
              onChange={(e) => setBiologySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({BiologySE * 1} /20)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Civics"
              value={CivicsSE}
              onChange={(e) => setCivicsSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({CivicsSE * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="History"
              value={HistorySE}
              onChange={(e) => setHistorySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({HistorySE * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Geography"
              value={GeographySE}
              onChange={(e) => setGeographySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({GeographySE * 1.5} /30)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Philosophy"
              value={PhilosophySE}
              onChange={(e) => setPhilosophySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({PhilosophySE * 2.5} /50)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Economic"
              value={EconomicSE}
              onChange={(e) => setEconomicSE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({EconomicSE * 4} /80)</span>
          </div>
          <div className="subject_div">
            <input
              className="input_grade"
              type="number"
              placeholder="Sociology"
              value={SociologySE}
              onChange={(e) => setSociologySE(e.target.value)}
            />
            <span> /20</span>
            <span className="margleft  grey">({SociologySE * 4} /80)</span>
          </div>
        </section>
      </div>
      {/* output */}
      <br />
      <div className="reset_button">
        <Button onClick={ResetSEValues} variant="outlined">
          reset
        </Button>
      </div>
      <div className="total_grade_div">
        <span className="total_value">
          Your total grade is
          <strong className="margleft">
            {TotalSE > 0 ? TotalSE.toFixed(2) : 0}
          </strong>
          /100
        </span>
      </div>
      <br />
      {(EnglishSE > 0) &
      (ArabicSE > 0) &
      (MathSE > 0) &
      (PhysicsSE > 0) &
      (ChemistrySE > 0) &
      (BiologySE > 0) &
      (CivicsSE > 0) &
      (EconomicSE > 0) &
      (SociologySE > 0) &
      (HistorySE > 0) &
      (GeographySE > 0) &
      (PhilosophySE > 0) ? (
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

export default SE;
