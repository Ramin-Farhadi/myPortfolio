import { Grid, Box } from "@mui/material";
import "./touroProject.css";
import { Button } from "@mui/material";
const TouroProject = () => {
  return (
    <div className="wrapper">
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={2}>
            {" "}
            <img
              src={require("./img/Touro.jpg")}
              style={{
                width: "300px",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid xs={6}>
            <h3>Touro Homepage</h3>
            <p>
              I redesigned and developed the Touro University homepage, while
              keeping in mind the institution's desire to reflect its academic
              environment and culture. The new design successfully maintains
              this tradition while also enhancing the user experience with
              modern and intuitive features. As a result, the Touro University
              homepage saw a significant increase in user engagement, with a 30%
              boost in traffic over a period of 6 months. This is a testament to
              the effectiveness of the redesign and development process, and I
              am thrilled to have played a role in the success of this project.{" "}
            </p>

            <Box
              mt={5}
              mr={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <a href="https://gst.touro.edu">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>{" "}
              </a>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </div>
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={2}>
            <img
              src={require("./img/670x419-O-que-e-Landing-Page-e-como-criar-uma.png")}
              style={{ width: "300px", height: "200px" }}
            />
          </Grid>
          <Grid xs={6}>
            <h3>Landing Pages for marketing</h3>
            <p>
              I have designed and developed numerous landing pages for Touro
              University's marketing department to facilitate their Google
              advertising campaigns. Thanks to my expertise in creating visually
              appealing and user-friendly designs, the university has become
              increasingly popular online and has received a surge of
              applicants. Working closely with the backend team, I helped set up
              a form to collect data, which was then seamlessly passed to Touro
              GST's database. We have been running this campaign for almost 2
              years, and with my refreshing design ideas, we were able to
              dramatically decrease the bounce rate and significantly increase
              the rate of submissions. My contribution to this project played a
              critical role in its success, and I am proud of the impact my work
              has had on Touro University's online presence and enrollment
              numbers.
            </p>

            <Box
              mr={5}
              mt={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <a href="https://gst.touro.edu/sem/wmm/">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>{" "}
              </a>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </div>
      <div className="TouroBar">
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={2}>
            {" "}
            <img
              src={require("./img/blog.jpg")}
              style={{ width: "300px", height: "200px" }}
            />
          </Grid>
          <Grid xs={6}>
            <h3>Blog page from scratch</h3>
            <p>
              When I first started working at Touro, I noticed that the
              university was not using its main domain to publish blogs.
              Instead, they were renting space on Hubspot and then linking to
              the blog posts on the main Touro website. This approach was
              detrimental to Touro's SEO ranking on Google, and the university
              was missing out on valuable traffic. To address this issue, I
              created a new blog section on the Touro website from scratch,
              including all of the subpages necessary for effective blogging. In
              addition, I created a user-friendly system that anyone, even
              without technical knowledge, could use to publish blog posts. This
              allowed Touro to take control of their blog content and improve
              their SEO ranking, resulting in increased visibility and
              engagement.
            </p>
            <Box
              mr={5}
              mt={5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              {" "}
              <a href="https://gst.touro.edu/Blogs/">
                <Button variant="contained" sx={{ height: "50px" }}>
                  See the Project LIVE!
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TouroProject;
