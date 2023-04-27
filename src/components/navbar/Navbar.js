import "./navbar.css";
import { Box } from "@mui/material";
const Navbar = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end" }}
      className="navContainer"
    >
      <Box className="navItem">
        <a href="/files/resume.pdf" download="resume.pdf">
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
