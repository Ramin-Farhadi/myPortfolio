import "./projectSection.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import ProjectBar from "./ProjectBar";
import { useState } from "react";

const ProjectSection = ({ projectHandler }) => {
  const [guide, setGuide] = useState(false);
  return (
    <div className="projSecContainer">
      {!guide && <img className="guide" src={require("../img/guide.png")} />}

      <div className="projSectionTitle">
        <h2>PROJECTS</h2>
      </div>
      <ProjectBar projectHandler={projectHandler} guide={setGuide} />
    </div>
  );
};

export default ProjectSection;
