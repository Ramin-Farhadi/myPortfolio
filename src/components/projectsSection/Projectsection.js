import "./projectSection.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import Project from "./Project";

const ProjectSection = () => {
  return (
    <div className="projSecContainer">
      <div className="projSectionTitle">
        <h2>PROJECTS</h2>
      </div>
      <Project />
    </div>
  );
};

export default ProjectSection;
