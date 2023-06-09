import "./projectSection.css";
import ProjectBar from "./ProjectBar";
import NoticeSec from "./noticeComponent/NoticeSec";
import { useState } from "react";

const ProjectSection = ({ projectHandler }) => {
  const [guide, setGuide] = useState(false);
  return (
    <div className="projSecContainer">
      {!guide && <NoticeSec />}

      <div className="projSectionTitle">
        <h2 style={{ color: "#e3f2fd" }}>PROJECTS</h2>
      </div>
      <ProjectBar projectHandler={projectHandler} guide={setGuide} />
    </div>
  );
};

export default ProjectSection;
