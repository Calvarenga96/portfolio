import { Box, ListItem } from "@chakra-ui/react";
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
      <Box _hover={{ textDecoration: "underline", color: "purpleColor.100" }}>
        <Link to={target === "/" ? "/" : `/${target}`}>{title}</Link>
      </Box>
    </ListItem>
  );
};

export default NavbarButton;
