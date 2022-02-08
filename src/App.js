import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LS from "./Calculator/LS";
import Classes from "./Pages/Classes";
import Grade_12 from "./Pages/Grade_12";
import TwelveLS from "./Pages/12ls/12LSmaterial";
import TwelveLS_English from "./Pages/12ls/English";
import NavBar from "./Reusable_Components/NavBar";

function App() {
  return (
    <>
      <div className="menu">
        <NavBar />
      </div>
      <br />
      <br />
      <br />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LS />} />
        </Routes>
        <Routes>
          <Route exact path="/classes" element={<Classes />} />
        </Routes>
        <Routes>
          <Route exact path="/12" element={<Grade_12 />} />
        </Routes>
        <Routes>
          <Route exact path="/12-ls/subjects" element={<TwelveLS />} />
        </Routes>
        <Routes>
          <Route exact path="/12-ls/English" element={<TwelveLS_English />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
