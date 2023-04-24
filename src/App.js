import "./App.css";
import Summaries from "./components/summarySection/Summaries";
import Navbar from "./components/navbar/Navbar";
import ProjectSection from "./components/projectsSection/Projectsection";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Summaries></Summaries>
      <ProjectSection />
    </div>
  );
}

export default App;
