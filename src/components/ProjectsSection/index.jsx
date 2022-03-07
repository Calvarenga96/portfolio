import { Box, Center, Divider, Wrap } from "@chakra-ui/react";
import Calculator from "../../../assets/img/calculator.png";
import Portfolio from "../../../assets/img/portfolio.png";
import useResponsive from "../../hooks/useResponsive";
import Project from "../Project";
import Section from "../Section";

const ProjectsSection = () => {
  const { responsive } = useResponsive();

  return (
    <Box mt={0}>
      <Section title="Projects" />
      <Wrap direction="row" mt={5} spacing="15px" justify="center">
        <Project
          name="Portfolio"
          srcPath={Portfolio}
          link="https://github.com/Calvarenga96/portfolio"
          alt="My personal portfolio"
          technologies={[
            "React",
            "Three.js",
            "Chakra UI",
            "React Router",
            "React Helmet",
            "Framer Motion",
            "React Icons",
          ]}
        />
        {responsive && (
          <Center w="100%">
            <Divider colorScheme="whiteColor" w="100%" h="5px" />
          </Center>
        )}
        <Project
          name="Splitter Calculator"
          srcPath={Calculator}
          link="https://calvarenga96.github.io/splitter-calculator/"
          alt="Calculator project"
          technologies={["HTML5", "CSS3", "JavaScript", "Webpack"]}
        />
      </Wrap>
    </Box>
  );
};

export default ProjectsSection;
