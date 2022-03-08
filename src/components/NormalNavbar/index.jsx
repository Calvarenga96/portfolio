import { Divider, HStack, List } from "@chakra-ui/react";
import Language from "../Language";
import NavbarButton from "../NavbarButton";
import RRSS from "../RRSS";

const NormalNavbar = () => {
  return (
    <List>
      <HStack justifyContent="center" alignItems="center">
        <NavbarButton target="" title="Home" />
        <NavbarButton target="experience" title="Experience" />
        <NavbarButton target="projects" title="Projects" />
        <Divider
          orientation="vertical"
          colorScheme="whiteColor"
          w="3px"
          h="24px"
        />
        <RRSS responsive={false} />
        <Divider
          orientation="vertical"
          colorScheme="whiteColor"
          w="3px"
          h="24px"
        />
        <Language />
      </HStack>
    </List>
  );
};

export default NormalNavbar;
