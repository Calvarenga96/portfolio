import { Box, Link, Text } from "@chakra-ui/react";
import Section from "../Section";

const AboutMe = () => {
  return (
    <Box mt={[0, 0, 0]}>
      <Section title="About Me" />
      <Text color="whiteColor">
        I was interested in technology from an early age thanks to the influence
        of my parents, but it wasn't until 2020, that I really started studying
        in online platforms like{" "}
        <Link
          href="https://platzi.com/p/Calvarenga96/"
          isExternal={true}
          color="turquoiseColor.100"
        >
          Platzi
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.udemy.com/user/christian-alvarenga-4/"
          isExternal={true}
          color="turquoiseColor.100"
        >
          Udemy
        </Link>{" "}
        to enter the world of programming, I also took an 8-month course at an
        institute in my country called{" "}
        <Link
          href="https://www.idt.com.py/"
          isExternal={true}
          color="turquoiseColor.100"
        >
          Instituto de Diseño y Tecnología
        </Link>
        . Before that, I had studied other areas such as Graphic Design and
        Digital Marketing, and while they may have been fun to learn, they
        didn't manage to grab me like programming. Currently, I started studying{" "}
        <Link
          href="https://www.uaa.edu.py/carreras/ingenieria-informatica-ciencias-computacion"
          isExternal={true}
          color="turquoiseColor.100"
        >
          Computer Engineering at the Autonomous University of Asunción
        </Link>
        .
      </Text>
      <Text color="whiteColor">
        I am a person who believes that education is the key to achieve most of
        life's purposes, that's why I am always in constant learning and
        evolution.
      </Text>
    </Box>
  );
};

export default AboutMe;
