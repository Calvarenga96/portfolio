import { HStack, List } from "@chakra-ui/react";
import NavbarButton from "../NavbarButton";

const NormalNavbar = () => {
  return (
    <List>
      <HStack>
        <NavbarButton target="" title="Home" />
        <NavbarButton target="about-me" title="About Me" />
        <NavbarButton target="experience" title="Experience" />
        <NavbarButton target="projects" title="Projects" />
        <NavbarButton target="resume" title="Resume" />
      </HStack>
    </List>
  );
};

export default NormalNavbar;
