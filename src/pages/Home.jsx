import { Container, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import StaticSection from "../components/StaticSection";

const Home = () => {
  return (
    <VStack w="100%" h="100%" bgColor="backgroundColorBody">
      <Helmet>
        <meta
          name="description"
          content="Welcome to my website! May the force be with you"
        />
      </Helmet>
      <Header />
      <Container as="main">
        <StaticSection />
        <Routes>
          <Route path="/" element={<AboutMeSection />} />
          <Route path="experience" element={<ExperienceSection />} />
          <Route path="projects" element={<ProjectsSection />} />
        </Routes>
      </Container>
      <Footer />
    </VStack>
  );
};

export default Home;
