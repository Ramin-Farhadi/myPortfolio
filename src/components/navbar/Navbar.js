import "./navbar.css";
import { Box } from "@mui/material";
const Navbar = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end" }}
      className="navContainer"
    >
      <Box className="navItem">
        <a
          href={require("./resume.pdf")}
          target="_blank"
          download={"Ramin Farhadi Resume"}
        >
          Resume
        </a>
      </Box>
      <Box className="navItem">
        <a href="mailto:farhadiramin91@gmail.com">
          Email: Farhadiramin91@gmail.com
        </a>
      </Box>
    </Box>
  );
};
export default Navbar;
