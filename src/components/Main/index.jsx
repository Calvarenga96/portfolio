import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AboutMeSection from "../AboutMeSection";
import ExperienceSection from "../ExperienceSection";
import ProjectsSection from "../ProjectsSection";
import StaticSection from "../StaticSection";

const Main = () => {
  return (
    <Container as="main" w="100vw">
      <StaticSection />
      <Routes>
        <Route path="/" element={<AboutMeSection />} />
        <Route path="experience" element={<ExperienceSection />} />
        <Route path="projects" element={<ProjectsSection />} />
      </Routes>
    </Container>
  );
};

export default Main;
