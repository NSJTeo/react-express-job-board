import { ReactElement, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { PageHeader } from "./components/PageHeader";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App(): ReactElement {
  const [darkMode, setDarkMode] = useState(false);

  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <PageHeader setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:jobID" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
