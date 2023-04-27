import { Grid } from "@mui/material";
import "./uxUi.css";
const UxUi = () => {
  return (
    <div>
      <Grid container spacing={2} mt={5}>
        <Grid xs={2}></Grid>

        <Grid xs={2}>
          <a href="https://www.behance.net/gallery/157821763/Network-Porch">
            <img
              className="uxUiThaumb"
              src={require("../../img/uxui/networkPorch.png")}
            />
            <div className="uxUiDetails">
              <h3>Network Porch</h3>
              <p>
                it is a social media app for immigirants who come to USA. To
                connect, trade or Date all in one app.
              </p>
            </div>
          </a>
        </Grid>
        <Grid xs={2}>
          <a href="https://www.behance.net/gallery/157413295/Email-Marketing-mobile-template-Womans-rights-funding">
            <img
              className="uxUiThaumb"
              src={require("../../img/uxui/womanOfTheWorld.png")}
            />
            <div className="uxUiDetails">
              <h3>Woman of the World</h3>
              <p>
                The Woman of the World app empowers women by educating them
                about their rights, including gender equality, equal pay, and
                reproductive rights. It provides practical tips, resources, and
                tools for reporting discrimination and harassment, making it a
                valuable tool for advocating for women's rights.
              </p>
            </div>
          </a>
        </Grid>
        <Grid xs={2}>
          <a href="https://www.behance.net/gallery/157331011/Garage">
            <img
              className="uxUiThaumb"
              src={require("../../img/uxui/Garage.png")}
            />
            <div className="uxUiDetails">
              <h3>Garage</h3>
              <p>
                This website allows users to buy, sell, and review used cars
                while participating in a community of car enthusiasts. It
                features a user-friendly interface, negotiation tools, and a
                review system for transparency. Additionally, users can connect
                with others in a forum to share tips and advice on their
                favorite vehicles.
              </p>
            </div>
          </a>
        </Grid>
        <Grid xs={2}>
          <a href="https://www.behance.net/gallery/159488147/Garage-storyboard">
            <img
              className="uxUiThaumb"
              src={require("../../img/uxui/garageStory.png")}
            />
            <div className="uxUiDetails">
              <h3>Garage Story telling</h3>
              <p>
                This is the story of how a user ended up with a garage website.
                With graphical designs, it's an effective way to tell the
                business story to stakeholders.
              </p>
            </div>
          </a>
        </Grid>

        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default UxUi;
