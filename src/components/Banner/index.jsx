import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Banner = () => {
  const { lang } = useContext(DataContext);

  return (
    <Box
      bg="whiteAlpha.200"
      borderRadius="lg"
      py={4}
      px={[5, 3, 3]}
      mb={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        as="h3"
        color="whiteColor"
        textAlign={["center", "left", "left"]}
        fontSize={18}
      >
        {lang === "en"
          ? "Hi, I'm a Full-Stack Jr. developer from Paraguay!"
          : "¡Hola, soy un desarrollador Full-Stack Jr. de Paraguay!"}
      </Text>
    </Box>
  );
};

export default Banner;
