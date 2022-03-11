import { Box, Divider, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Language from "../Language";
import RRSS from "../RRSS";

const MenuResponsive = () => {
  const { lang } = useContext(DataContext);

  return (
    <MenuList bg="backgroundColorBody" px={3} boderColor="purpleColor.100">
      <Link to="/">
        <MenuItem
          color="whiteColor"
          bg="backgroundColorBody"
          my={2}
          p="0"
          _hover={{ bg: "backgroundColorBody", color: "purpleColor.100" }}
        >
          {lang === "en" ? "Home" : "Inicio"}
        </MenuItem>
      </Link>
      <Link to="/experience">
        <MenuItem
          color="whiteColor"
          bg="backgroundColorBody"
          my={2}
          p="0"
          _hover={{ bg: "backgroundColorBody", color: "purpleColor.100" }}
        >
          {lang === "en" ? "Experience" : "Experiencia"}
        </MenuItem>
      </Link>
      <Link to="/projects">
        <MenuItem
          color="whiteColor"
          bg="backgroundColorBody"
          my={2}
          p="0"
          _hover={{ bg: "backgroundColorBody", color: "purpleColor.100" }}
        >
          {lang === "en" ? "Projects" : "Proyectos"}
        </MenuItem>
      </Link>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={3}
        p="0"
      >
        <RRSS responsive={true} />
        <Language responsive={true} />
      </Box>
    </MenuList>
  );
};

export default MenuResponsive;
