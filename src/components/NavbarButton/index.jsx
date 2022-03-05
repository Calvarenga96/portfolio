import { Box, Button, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarButton = ({ title, target }) => {
  return (
    <ListItem color="whiteColor">
      <Box _hover={{ textDecoration: "underline" }}>
        <Link to={target === "" ? "/" : `${target}`}>
          {title === "Download Resume" ? (
            <Button
              bgColor="purpleColor.300"
              w="100%"
              color="whiteColor"
              _hover={{ bgColor: "purpleColor.100" }}
              size="sm"
            >
              {title}
            </Button>
          ) : (
            title
          )}
        </Link>
      </Box>
    </ListItem>
  );
};

export default NavbarButton;
