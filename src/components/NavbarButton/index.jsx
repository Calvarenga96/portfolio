import { Box, Button, ListItem } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const NavbarButton = ({ title, target }) => {
  const { openModal, setOpenModal } = useContext(DataContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <ListItem color="whiteColor" onClick={handleClick}>
      <Box _hover={{ textDecoration: "underline" }}>
        <Link to={`/${target}`}>
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
