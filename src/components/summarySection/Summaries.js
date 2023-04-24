import "./summary.css";
const Summaries = () => {
  return (
    <div class="summaryContainer">
      <h1 id="sumTitle">
        I'm Ramin Farhadi <br />A Frontend Developer & UX UI Designer
      </h1>
      <img id="profilePic" src={require("./profilePic.jpg")} alt="profile" />
      <img
        id="profilePic"
        src={require("./aws-certified-developer-associate.png")}
        alt="badge"
      />
      <p>
        with 4 years of experience, a master's degrees in computer science and a
        bachelor's degree in architecture. Recently earned an AWS certification
        (AWS Certified Developer - Associate). I am passionate about creating
        top-notch user experiences and using my technical skills to drive
        innovation. I am committed to staying up-to-date with the latest
        technologies and contributing to the growth of the industry.
      </p>
    </div>
  );
};

export default Summaries;
