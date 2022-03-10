import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import bannerAnimation from "../../animations/bannerAnimation";
import { DataContext } from "../../context/DataContext";

const Banner = () => {
  const { lang } = useContext(DataContext);
  const AnimatedBox = motion(Box);

  return (
    <AnimatedBox
      bg="whiteAlpha.200"
      borderRadius="lg"
      py={4}
      px={[5, 3, 3]}
      mb={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      variants={bannerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
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
    </AnimatedBox>
  );
};

export default Banner;
