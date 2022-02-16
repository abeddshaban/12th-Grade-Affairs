import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Reusable_Components/NavBar";
import LS from "./Calculator/LS";
import Classes from "./Pages/Classes";
import Grade12 from "./Pages/Grade_12";
import TwelveLs from "./Pages/12ls/12LSmaterial";
import TwelveLsEnglish from "./Pages/12ls/English";
import TwelveLsGeography from "./Pages/12ls/Geography";
import TwelveLsChemistry from "./Pages/12ls/Chemistry";
import TwelveLsBiology from "./Pages/12ls/Biology";
import TwelveLsCivics from "./Pages/12ls/Civics";
import TwelveLsArabic from "./Pages/12ls/Arabic";
import TwelveLsMath from "./Pages/12ls/Math";
import TwelveLsPhysics from "./Pages/12ls/Physics";
import TwelveLsPhilosophy from "./Pages/12ls/Philosophy";
import TwelveLsHistory from "./Pages/12ls/History";
//
import ToggleButton from "@mui/material/ToggleButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function App() {
  const [selected, setSelected] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <br />
      <br />
      <br />

      <div className="menu">
        <NavBar />
      </div>

      <Routes>
        <Route exact path="/" element={<LS />} />
      </Routes>
      <Routes>
        <Route exact path="/classes" element={<Classes />} />
      </Routes>
      <Routes>
        <Route exact path="/12" element={<Grade12 />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/subjects" element={<TwelveLs />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/English" element={<TwelveLsEnglish />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Geography" element={<TwelveLsGeography />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Chemistry" element={<TwelveLsChemistry />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Biology" element={<TwelveLsBiology />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Civics" element={<TwelveLsCivics />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Arabic" element={<TwelveLsArabic />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Math" element={<TwelveLsMath />} />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/Physics" element={<TwelveLsPhysics />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/12-ls/Philosophy"
          element={<TwelveLsPhilosophy />}
        />
      </Routes>
      <Routes>
        <Route exact path="/12-ls/History" element={<TwelveLsHistory />} />
      </Routes>

      <ToggleButton
        className="back_arrow_btn"
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
      </ToggleButton>
    </>
  );
}

export default App;
