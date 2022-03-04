import { Container, Text } from "@chakra-ui/react";

const Footer = () => {
  const ACTUAL_YEAR = new Date().getFullYear();

  return (
    <Container
      as="footer"
      h="50px"
      my={15}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        color="purpleColor.100"
        fontSize="sm"
        textAlign="center"
        fontWeight="bold"
      >
        Made with ❤ from PY for the whole world.
        <br />© {ACTUAL_YEAR} All rights reserved.
      </Text>
    </Container>
  );
};

export default Footer;
