import { useState } from "react";
import "./App.css";
import Summaries from "./components/summarySection/Summaries";
import Navbar from "./components/navbar/Navbar";
import ProjectSection from "./components/projectsSection/Projectsection";
import Weather from "./components/Weather";
import Youtube from "./Youtube";
import Cal from "./Cal";
import TouroProject from "./components/TouroProject";
import UxUi from "./components/components/uxui/UxUiProject";

function App() {
  const [idDetector, setIdDetector] = useState("");
  return (
    <div className="App">
      <Navbar></Navbar>
      <Summaries></Summaries>
      <ProjectSection projectHandler={setIdDetector} />
      {idDetector === "WeatherApp (API CALL)" ? (
        <Weather />
      ) : idDetector === "Youtube Simulator (API CALL)" ? (
        <Youtube />
      ) : idDetector === "Digital calculator" ? (
        <Cal />
      ) : idDetector === "Touro University Website" ? (
        <TouroProject />
      ) : idDetector === "UX UI Design" ? (
        <UxUi />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
