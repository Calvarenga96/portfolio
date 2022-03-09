import { Box, Center, Divider, Wrap } from "@chakra-ui/react";
import { useContext } from "react";
import Calculator from "../../../assets/img/calculator.png";
import Portfolio from "../../../assets/img/portfolio.png";
import { DataContext } from "../../context/DataContext";
import useResponsive from "../../hooks/useResponsive";
import Project from "../Project";
import Section from "../Section";

const ProjectsSection = () => {
  const { responsive } = useResponsive();
  const { lang } = useContext(DataContext);

  return (
    <Box mt={0}>
      <Section title={lang === "en" ? "Projects" : "Proyectos"} />
      <Wrap direction="row" mt={5} spacing="15px" justify="center">
        <Project
          name={lang === "en" ? "Portfolio" : "Portafolio"}
          srcPath={Portfolio}
          link="https://github.com/Calvarenga96/portfolio"
          alt={
            lang === "en" ? "My personal portfolio" : "Mi portafolio personal"
          }
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
          alt={lang === "en" ? "Calculator project" : "Proyecto de calculadora"}
          technologies={["HTML5", "CSS3", "JavaScript", "Webpack"]}
        />
      </Wrap>
    </Box>
  );
};

export default ProjectsSection;
