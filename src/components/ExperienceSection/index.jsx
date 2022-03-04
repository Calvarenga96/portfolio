import { Box, Kbd, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Section from "../Section";

const ExperienceSection = () => {
  return (
    <Box mt={[0, 0, 0]}>
      <Section title="Experience" />
      <Box display="flex">
        <Kbd bgColor="purpleColor.100" color="whiteColor" h={5}>
          2021
        </Kbd>
        <Text color="whiteColor" pl={3}>
          I started creating my own projects (which you can see in the{" "}
          <Link to="projects">projects</Link>
          section), after having learned for a long time the basics with HTML,
          CSS and JavaScript, starting with a calculator.
        </Text>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
