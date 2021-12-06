import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job/:jobID" element={<Details />} />
    </Routes>
  );
}

export default App;
