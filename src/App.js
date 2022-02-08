import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LS from "./Calculator/LS";
import Classes from "./Pages/Classes";
import Grade12 from "./Pages/Grade_12";
import TwelveLs from "./Pages/12ls/12LSmaterial";
import TwelveLsEnglish from "./Pages/12ls/English";
import NavBar from "./Reusable_Components/NavBar";

function App() {
  return (
    <>
      <br />
      <br />
      <br />

      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
