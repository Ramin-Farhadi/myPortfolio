import "./projectSection.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import ProjectBar from "./ProjectBar";

const ProjectSection = ({ projectHandler }) => {
  return (
    <div className="projSecContainer">
      <div className="projSectionTitle">
        <h2>PROJECTS</h2>
      </div>
      <ProjectBar projectHandler={projectHandler} />
    </div>
  );
};

export default ProjectSection;
