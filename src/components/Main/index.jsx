import { Box, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AboutMeSection from "../AboutMeSection";
import Banner from "../Banner";
import ExperienceSection from "../ExperienceSection";
import GroguSection from "../GroguSection";
import Presentation from "../Presentation";
import ProjectsSection from "../ProjectsSection";

const Main = () => {
  return (
    <Container as="main">
      <Box mt="100px">
        <GroguSection />
        <Banner />
        <Presentation />
      </Box>
      <Routes>
        <Route path="/" element={<AboutMeSection />} />
        <Route path="/experience" element={<ExperienceSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
      </Routes>
    </Container>
  );
};

export default Main;
