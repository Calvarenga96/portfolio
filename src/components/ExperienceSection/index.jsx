import { Box, Kbd, Link, Text } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import Section from "../Section";
import styles from "./styles.module.css";

const ExperienceSection = () => {
  return (
    <Box mt={[0, 0, 0]}>
      <Section title="Experience" />
      <Box display="flex" mt={5}>
        <Kbd bgColor="purpleColor.100" color="whiteColor" h={5}>
          2021
        </Kbd>
        <Text color="whiteColor" pl={3}>
          I started creating my own projects (which you can see in the{" "}
          <LinkRouter to="/projects" className={styles.link}>
            projects
          </LinkRouter>{" "}
          section), after having learned for a long time the basics with HTML,
          CSS and JavaScript, starting with a calculator using POO. After that I
          started working on several real front-end projects creating landing
          pages like{" "}
          <Link
            href="https://www.marketingeducativo.com/"
            isExternal={true}
            color="turquoiseColor.100"
          >
            marketingeducativo.com
          </Link>
          ,{" "}
          <Link
            href="https://www.cursosdeofimatica.com"
            isExternal={true}
            color="turquoiseColor.100"
          >
            cursosdeofimatica.com
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.cursosdemkt.com"
            isExternal={true}
            color="turquoiseColor.100"
          >
            cursosdemkt.com
          </Link>{" "}
          using mainly React and its ecosystem but, they are closed source.
          While I was working on the landing pages, at my local high school and
          online I was learning about PHP and SQL for the backend which is also
          in the{" "}
          <LinkRouter to="/projects" className={styles.link}>
            projects
          </LinkRouter>{" "}
          section. I also started studying the Laravel framework for PHP.
        </Text>
      </Box>

      <Box display="flex" mt={5}>
        <Kbd bgColor="purpleColor.100" color="whiteColor" h={5}>
          2022
        </Kbd>
        <Text color="whiteColor" pl={3}>
          I have finished another project made with Jquery for the Front-End and
          PHP and SQL for the Back-End. Then I will start developing a project
          with Laravel.
        </Text>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
