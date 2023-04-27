import Grid from "@mui/material/Grid"; // Grid version 1

import "./summary.css";
const Summaries = () => {
  return (
    <div class="summaryContainer">
      <Grid container spacing={2}>
        <Grid xs={8}>
          <h1 id="sumTitle">I'm Ramin Farhadi</h1>
          <h2 id="subTitle">A Frontend Developer & UX UI Designer</h2>
        </Grid>
        <Grid xs={4}>
          <img
            id="profilePic"
            src={require("./aws-certified-developer-associate.png")}
            alt="badge"
          />
          {/* <img
            id="profilePic"
            src={require("./profilePic.jpg")}
            alt="profile"
          /> */}
        </Grid>
        <Grid xs={12}>
          <p>
            With 4 years of experience, a master's degree in computer science,
            and a bachelor's degree in architecture, I recently earned an AWS
            certification (AWS Certified Developer - Associate). I am passionate
            about creating top-notch user experiences and leveraging my
            technical skills to drive innovation. I am committed to staying
            up-to-date with the latest technologies and contributing to the
            growth of the industry.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summaries;
