import { useState } from "react";
import "./App.css";
import Summaries from "./components/summarySection/Summaries";
import Navbar from "./components/navbar/Navbar";
import ProjectSection from "./components/projectsSection/Projectsection";
import Weather from "./components/projectsSection/weatherComponent/Weather";
import Youtube from "./components/projectsSection/YoutubeComponents/Youtube";
import Cal from "./components/projectsSection/CalComponents/Cal";
import TouroProject from "./components/projectsSection/touroComponent/TouroProject";
import UxUi from "./components/projectsSection/uxuiComponent/UxUiProject";
import VideoBanner from "./components/summarySection/videoBanner/VideoBanner";
import Fbbrands from "./components/projectsSection/fullBeautyBrandsComponent/FbbBrands";

function App() {
  const [idDetector, setIdDetector] = useState("");
  return (
    <div className="App">
      <Navbar></Navbar>
      <VideoBanner />
      <Summaries></Summaries>
      <ProjectSection projectHandler={setIdDetector} />
      {idDetector === "WeatherApp (API CALL)" ? (
        <Weather />
      ) : idDetector === "FullBeauty Brands" ? (
        <Fbbrands />
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
