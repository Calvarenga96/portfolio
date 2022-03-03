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
          I was born in the city of Asunción in 1996. I became interested in
          technology from an early age thanks to the influence of my parents,
          but it was not until 2020 that I really began to study on online
          platforms such as{" "}
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
          to enter the world of technology. programming. Before, he had studied
          other areas such as Graphic Design and Digital Marketing. Currently I
          have started studying{" "}
          <Link
            href="https://www.uaa.edu.py/carreras/ingenieria-informatica-ciencias-computacion"
            isExternal={true}
            color="turquoiseColor.100"
          >
            Computer Engineering at the Autonomous University of Asunción
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
