import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details/Details";
import { Home } from "./pages/Home/Home";
import { PageHeader } from "./components/PageHeader";

function App(): ReactElement {
  return (
    <>
      {/* <div className="app__container"> */}
      <PageHeader />
      {/* <main className="app__main-section"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:jobID" element={<Details />} />
      </Routes>
      {/* </main> */}
      {/* </div> */}
    </>
  );
}

export default App;
