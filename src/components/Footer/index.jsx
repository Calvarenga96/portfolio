import { Container, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Footer = () => {
  const { lang } = useContext(DataContext);

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
        {lang === "en"
          ? "Made with ❤ from PY for everyone."
          : "Hecho con ❤ desde PY para todo el mundo."}
      </Text>
    </Container>
  );
};

export default Footer;
