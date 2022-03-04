import { Box, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      bg="whiteAlpha.200"
      borderRadius="lg"
      py={6}
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
        Hi, I'm a Jr. Full-Stack developer based in Paraguay!
      </Text>
    </Box>
  );
};

export default Banner;
