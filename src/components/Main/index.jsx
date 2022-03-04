import { Box, Container } from "@chakra-ui/react";
import AboutMe from "../AboutMe";
import Banner from "../Banner";
import GroguSection from "../GroguSection";
import Presentation from "../Presentation";

const Main = () => {
  return (
    <Container as="main">
      <Box mt="100px">
        <GroguSection />
        <Banner />
        <Presentation />
      </Box>
      <AboutMe />
    </Container>
  );
};

export default Main;
