import { Grid, Box } from "@mui/material";
import "./touroProject.css";
import { Button } from "@mui/material";
const TouroProject = () => {
  return (
    <div className="wrapper">
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={0} lg={2}></Grid>
          <Grid xs={12} lg={2}>
            {" "}
            <img
              src={require("../../img/Touro.jpg")}
              style={{
                width: "100%",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <h3>Touro Homepage</h3>
            <p>
              I successfully redesigned and developed the Touro University
              homepage, incorporating their academic environment and culture.
              The modern and intuitive features improved the user experience,
              resulting in a notable 30% increase in website traffic over 6
              months. This project's success demonstrates the effectiveness of
              my redesign and development skills, and I am proud to have
              contributed to its achievement.{" "}
            </p>

            <Box
              mt={5}
              mr={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <a href="https://gst.touro.edu" target="_blank">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>{" "}
              </a>
            </Box>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </div>
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={0} lg={2}></Grid>
          <Grid xs={12} lg={2}>
            <img
              src={require("../../img/670x419-O-que-e-Landing-Page-e-como-criar-uma.png")}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <h3>Landing Pages for marketing</h3>
            <p>
              I designed and developed landing pages for Touro University's
              marketing campaigns, resulting in increased online popularity and
              applicant numbers. Collaborating with the backend team, I
              implemented a seamless data collection form, reducing bounce rates
              and boosting submission rates. My work played a critical role in
              enhancing Touro University's online presence and enrollment
              figures.
            </p>

            <Box
              mr={5}
              mt={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <a href="https://gst.touro.edu/sem/wmm/" target="_blank">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>{" "}
              </a>
            </Box>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </div>
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={0} lg={2}></Grid>
          <Grid xs={12} lg={2}>
            {" "}
            <img
              src={require("../../img/blog.jpg")}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={6}>
            <h3>Blog page from scratch</h3>
            <p>
              I improved Touro University's blog strategy by creating a new blog
              section on their website. This helped them take control of their
              blog content and boosted their visibility on Google. I also made
              it easy for anyone to publish blog posts, even without technical
              knowledge. As a result, Touro experienced increased traffic and
              engagement on their blog.
            </p>
            <Box
              mr={5}
              mt={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              {" "}
              <a href="https://gst.touro.edu/Blogs/" target="_blank">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TouroProject;
