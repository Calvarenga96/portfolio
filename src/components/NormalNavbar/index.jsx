import { Box, HStack, List } from "@chakra-ui/react";
import NavbarButton from "../NavbarButton";
import RRSS from "../RRSS";

const NormalNavbar = () => {
  return (
    <List>
      <HStack justifyContent="center" alignItems="center">
        <NavbarButton target="" title="Home" />
        <NavbarButton target="experience" title="Experience" />
        <NavbarButton target="projects" title="Projects" />
        <Box as="span" mx="5px" color="whiteColor">
          |
        </Box>
        <RRSS responsive={false} />
      </HStack>
    </List>
  );
};

export default NormalNavbar;
