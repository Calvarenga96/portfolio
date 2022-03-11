import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, MenuButton } from "@chakra-ui/react";

const HamburgerMenu = () => {
  return (
    <MenuButton
      size="sm"
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon />}
      variant="outline"
      color="white"
      bg="transparent"
    />
  );
};

export default HamburgerMenu;
