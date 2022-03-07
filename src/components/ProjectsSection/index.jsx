import { Box, Wrap } from "@chakra-ui/react";
import Calculator from "../../../assets/img/calculator.png";
import Portfolio from "../../../assets/img/portfolio.png";
import Project from "../Project";
import Section from "../Section";

const ProjectsSection = () => {
  return (
    <Box mt={[0, 0, 0]}>
      <Section title="Projects" />
      <Wrap direction="row" justifyContent="center" mt={5}>
        <Project
          name="Portfolio"
          src={Portfolio}
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
        <Project
          name="Splitter Calculator"
          src={Calculator}
          link="https://calvarenga96.github.io/splitter-calculator/"
          alt="Calculator project"
          technologies={["HTML5", "CSS3", "JavaScript", "Webpack"]}
        />
      </Wrap>
    </Box>
  );
};

export default ProjectsSection;
