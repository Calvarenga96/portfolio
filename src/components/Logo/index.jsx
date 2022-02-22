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
      sx={{ "user-select": "none" }}
    >
      {"<Christian Alvarenga />"}
    </Heading>
  );
};

export default Logo;
