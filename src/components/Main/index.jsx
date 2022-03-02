import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import GroguSection from "../GroguSection";

const Main = () => {
  return (
    <Container as="main">
      <Box mt={["100px", "100px", "calc(64px - 0.5rem)"]}>
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
      <Box
        w="100%"
        mt={10}
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Heading color="whiteColor">Christian Alvarenga</Heading>
          <Text as="span" color="whiteColor" fontSize={14}>
            Passionate about the technological world
          </Text>
        </Box>
        <Box>
          <Image src="#" />
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
