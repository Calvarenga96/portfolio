import { HStack, List } from "@chakra-ui/react";
import NavbarButton from "../NavbarButton";

const NormalNavbar = () => {
  return (
    <List>
      <HStack>
        <NavbarButton target="" title="Home" />
        <NavbarButton target="experience" title="Experience" />
        <NavbarButton target="projects" title="Projects" />
        <NavbarButton title="Download Resume" />
      </HStack>
    </List>
  );
};

export default NormalNavbar;
