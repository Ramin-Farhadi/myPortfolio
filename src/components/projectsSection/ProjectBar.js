import Grid from "@mui/material/Grid"; // Grid version 1
import projectObject from "./projectObject";
import "./projectSection.css";
import { useEffect, useState } from "react";

const ProjectBar = ({ projectHandler }) => {
  const [btnsID, setBtnsID] = useState("");
  useEffect(() => {
    projectHandler(btnsID);
  }, [btnsID]);
  return (
    <>
      <Grid container spacing={2}>
        {projectObject.map((eachProj) => (
          <Grid key={eachProj.projectName} xs={2}>
            <span
              className="circle"
              onClick={() => setBtnsID(eachProj.projectName)}
              style={
                btnsID === eachProj.projectName
                  ? { backgroundColor: "yellow" }
                  : {}
              }
            ></span>
            <span className="circle-lable">{eachProj.projectName}</span>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectBar;
