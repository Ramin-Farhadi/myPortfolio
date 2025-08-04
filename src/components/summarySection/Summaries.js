import Grid from "@mui/material/Grid"; // Grid version 1

import "./summary.css";
const Summaries = () => {
  return (
    <div className="summaryContainer">
      <Grid container spacing={2}>
        <Grid item md={8}>
          <h1 id="sumTitle">I'm Ramin Farhadi</h1>
          <h2 id="subTitle">A Full Stack Developer & UX UI Designer</h2>
        </Grid>
        <Grid item md={4}>
          <a
            href="https://www.credly.com/badges/e53ff0de-1778-4993-84dc-abe6f46676ec"
            target="_blank"
          >
            <img
              id="profilePic"
              src={require("./aws-certified-developer-associate.png")}
              alt="badge"
            />
          </a>
          {/* <img
            id="profilePic"
            src={require("./profilePic.jpg")}
            alt="profile"
          /> */}
        </Grid>
        <Grid item md={12}>
          <p style={{ color: "#e3f2fd" }}>
            With 7 years of experience, a master's degree in computer science,
            I recently earned an AWS certification (AWS Certified Developer -
            Associate). I am passionate about creating top-notch user
            experiences and leveraging my technical skills to drive innovation.
            I am committed to staying up-to-date with the latest technologies
            and contributing to the growth of the industry.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summaries;
