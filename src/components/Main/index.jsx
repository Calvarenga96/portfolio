import { Box, Container, Image, Text } from "@chakra-ui/react";
import Hand from "../../../resources/svg/hand_2.svg";
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
          <Text as="h3" color="white">
            Hi, I&apos;m a Jr. Front-End developer based in Paraguay!
          </Text>
        </Box>
        <Image
          src={Hand}
          position="relative"
          sx={{ transform: "rotate(20deg)" }}
          w={["120px", "200px", "270px"]}
          h={["120px", "200px", "270px"]}
          top={["-35px", "-50px", "-90px"]}
          left={["60%", "-50px", "340px"]}
        />
      </Box>
    </Container>
  );
};

export default Main;
