import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const HamburgerMenu = () => {
  return (
    <Flex
      p={2}
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      bgColor="transparent"
      border="1px"
      borderColor="whiteColor"
    >
      <HamburgerIcon w={4} h={4} color="white" />
    </Flex>
  );
};

export default HamburgerMenu;
