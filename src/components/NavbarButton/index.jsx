import { Box, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarButton = ({ title, target }) => {
  return (
    <ListItem color="whiteColor">
      <Box _hover={{ textDecoration: "underline", color: "purpleColor.100" }}>
        <Link to={target === "/" ? "/" : `/${target}`}>{title}</Link>
      </Box>
    </ListItem>
  );
};

export default NavbarButton;
