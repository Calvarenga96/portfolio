import { Box, Container, Image, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <Container as="main">
      <Box mt={["100px", "100px", "70px"]}>
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
          src="../../../resources/svg/hand_2.svg"
          w={["120px", "200px", "270px"]}
          h={["120px", "200px", "270px"]}
          sx={{ transform: "rotate(20deg)" }}
          position="relative"
          top={["-35px", "-50px", "-90px"]}
          left={["60%", "-50px", "340px"]}
        />
      </Box>
    </Container>
  );
};

export default Main;
