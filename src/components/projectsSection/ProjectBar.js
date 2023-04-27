import Grid from "@mui/material/Grid"; // Grid version 1
import projectObject from "./projectObject";
import "./projectSection.css";
import { useEffect, useState } from "react";

const ProjectBar = ({ projectHandler, guide }) => {
  const [btnsID, setBtnsID] = useState("");
  useEffect(() => {
    projectHandler(btnsID);
    btnsID && guide(true);
  }, [btnsID]);
  return (
    <>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        {projectObject.map((eachProj) => (
          <Grid key={eachProj.projectName} xs={6} md={2}>
            <span
              className="circle"
              onClick={() => setBtnsID(eachProj.projectName)}
              style={
                btnsID === eachProj.projectName
                  ? { backgroundColor: "#ffeb3b" }
                  : {}
              }
            ></span>
            <br />
            <span
              className="circle-lable"
              style={
                btnsID === eachProj.projectName ? { color: "#3d5afe" } : {}
              }
            >
              {eachProj.projectName}
            </span>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectBar;
