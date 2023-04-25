import "./App.css";
import Summaries from "./components/summarySection/Summaries";
import Navbar from "./components/navbar/Navbar";
import ProjectSection from "./components/projectsSection/Projectsection";
import Weather from "./components/Weather";
import { useState } from "react";
function App() {
  const [idDetector, setIdDetector] = useState("");
  return (
    <div className="App">
      <Navbar></Navbar>
      <Summaries></Summaries>
      <ProjectSection projectHandler={setIdDetector} />
      {idDetector === "weatherApp" ? <Weather /> : ""}
    </div>
  );
}

export default App;
