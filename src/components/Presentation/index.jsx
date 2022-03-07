import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ProfilePicture from "../ProfilePicture";

const Presentation = () => {
  return (
    <Container
      display="flex"
      flexDirection={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px="0"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={["center", "center", "flex-start"]}
      >
        <Heading color="whiteColor">Christian Alvarenga</Heading>
        <Text as="span" color="whiteColor" fontSize="sm">
          Passionate about the technological world
        </Text>
      </Box>
      <Box my={[5, 5, 0]} position={["static", "static", "relative"]} right={5}>
        <ProfilePicture />
      </Box>
    </Container>
  );
};

export default Presentation;
