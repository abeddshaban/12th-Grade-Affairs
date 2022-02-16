import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Reusable_Components/NavBar";
import Footer from "./Reusable_Components/Footer";

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
// material-ui
import ToggleButton from "@mui/material/ToggleButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageNotFound from "./Reusable_Components/PageNotFound";

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
        <Route path="*" element={<PageNotFound />} />

        <Route exact path="/" element={<LS />} />
        <Route exact path="/classes" element={<Classes />} />
        <Route exact path="/12" element={<Grade12 />} />
        <Route exact path="/12-ls" element={<TwelveLs />} />

        <Route exact path="/12-ls/English" element={<TwelveLsEnglish />} />
        <Route exact path="/12-ls/Geography" element={<TwelveLsGeography />} />
        <Route exact path="/12-ls/Chemistry" element={<TwelveLsChemistry />} />
        <Route exact path="/12-ls/Biology" element={<TwelveLsBiology />} />
        <Route exact path="/12-ls/Civics" element={<TwelveLsCivics />} />
        <Route exact path="/12-ls/Arabic" element={<TwelveLsArabic />} />
        <Route exact path="/12-ls/Math" element={<TwelveLsMath />} />
        <Route exact path="/12-ls/Physics" element={<TwelveLsPhysics />} />
        <Route
          exact
          path="/12-ls/Philosophy"
          element={<TwelveLsPhilosophy />}
        />
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

      <Footer />
    </>
  );
}

export default App;
