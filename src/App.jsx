import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AboutMeSection />} />
        <Route path="experience" element={<ExperienceSection />} />
        <Route path="projects" element={<ProjectsSection />} />
      </Route>
    </Routes>
  );
}

export default App;
