import "./projectSection.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import ProjectBar from "./ProjectBar";
import NoticeSec from "../../components/NoticeSec";
import { useState } from "react";

const ProjectSection = ({ projectHandler }) => {
  const [guide, setGuide] = useState(false);
  return (
    <div className="projSecContainer">
      {!guide && <NoticeSec />}

      <div className="projSectionTitle">
        <h2>PROJECTS</h2>
      </div>
      <ProjectBar projectHandler={projectHandler} guide={setGuide} />
    </div>
  );
};

export default ProjectSection;
