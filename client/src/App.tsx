import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import "./App.scss";

function App(): ReactElement {
  return (
    <div className="app__container">
      {/* <main className="app__main-section"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:jobID" element={<Details />} />
      </Routes>
      {/* </main> */}
    </div>
  );
}

export default App;
