import Grid from "@mui/material/Grid"; // Grid version 1
import projectObject from "./projectObject";
import "./projectSection.css";

console.log(projectObject);
const Project = () => {
  return (
    <>
      <Grid container spacing={2}>
        {projectObject.map((eachProj) => (
          <Grid key={eachProj.projectName} xs={2}>
            <span className="circle"></span>
            <span className="circle-lable">{eachProj.projectName}</span>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Project;
