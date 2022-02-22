import { Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading
      as="h2"
      fontSize="lg"
      fontWeight="bold"
      fontFamily="heading"
      color="white"
      display="flex"
      variant="page-title"
    >
      {"<Christian Alvarenga />"}
    </Heading>
  );
};

export default Logo;
