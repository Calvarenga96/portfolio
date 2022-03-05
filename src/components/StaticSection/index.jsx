import { Box } from "@chakra-ui/react";
import Banner from "../Banner";
import GroguSection from "../GroguSection";
import Presentation from "../Presentation";

const StaticSection = () => {
  return (
    <Box mt="100px">
      <GroguSection />
      <Banner />
      <Presentation />
    </Box>
  );
};

export default StaticSection;
