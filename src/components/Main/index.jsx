import { Box, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GroguLoading from "../GroguLoading";
import GroguSection from "../GroguSection";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <Container as="main">
      <Box mt={["100px", "100px", "calc(64px - 0.5rem)"]}>
        {isLoading ? <GroguLoading /> : <GroguSection />}
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
          >
            Hi, I'm a Jr. Full-Stack developer based in Paraguay!
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
