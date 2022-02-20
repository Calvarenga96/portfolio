import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const HamburgerMenu = () => {
  return (
    <Flex
      p={3}
      justifyContent="center"
      alignItems="center"
      rounded="xl"
      bgColor="turquoiseColor.100"
    >
      <HamburgerIcon w={5} h={5} color="white" />
    </Flex>
  );
};

export default HamburgerMenu;
