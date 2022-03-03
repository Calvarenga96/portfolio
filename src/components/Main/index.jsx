import { Box, Container, Text } from "@chakra-ui/react";
import AboutMe from "../AboutMe";
import GroguSection from "../GroguSection";

const Main = () => {
  return (
    <Container as="main">
      <Box mt="100px">
        <GroguSection />
        <Box
          bg="whiteAlpha.200"
          borderRadius="lg"
          py={[6]}
          px={[7, 3, 3]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            as="h3"
            color="whiteColor"
            textAlign={["center", "left", "left"]}
            fontSize={18}
          >
            Hi, I'm a Jr. Full-Stack developer based in Paraguay!
          </Text>
        </Box>
      </Box>
      <AboutMe />
    </Container>
  );
};

export default Main;
