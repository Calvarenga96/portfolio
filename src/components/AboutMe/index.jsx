import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box>
      <Box
        w="100%"
        mt={10}
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={["center", "center", "flex-start"]}
        >
          <Heading color="whiteColor">Christian Alvarenga</Heading>
          <Text as="span" color="whiteColor" fontSize={14}>
            Passionate about the technological world
          </Text>
        </Box>
        <Box
          my={[5, 5, 0]}
          position={["static", "static", "relative"]}
          right={5}
        >
          <Image src="#" />
        </Box>
      </Box>
      <Box my={[0, 0, 5]}>
        <Text color="whiteColor">
          I was born in the city of Asuncion in 1996. I was interested in
          technology from an early age thanks to the influence of my parents,
          but it wasn't until 2020, that I really started studying in online
          platforms like{" "}
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
          to enter the world of programming. Before that, I had studied other
          areas such as Graphic Design and Digital Marketing, and while they may
          have been fun to learn, they didn't manage to grab me like
          programming. Currently, I started studying{" "}
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
          I am a person who believes that education is the key to achieve most
          of life's purposes, that's why I am always in constant learning and
          evolution.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
