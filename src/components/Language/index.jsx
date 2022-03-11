import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { IoLanguage } from "react-icons/io5";
import { DataContext } from "../../context/DataContext";

const Language = ({ responsive }) => {
  const { setLang } = useContext(DataContext);

  const handleClick = (language) => {
    setLang(language);
  };

  return (
    <Menu autoSelect={false} isLazy={true}>
      <MenuButton
        transition="all 0.2s"
        color="whiteColor"
        _hover={{ color: "purpleColor.100" }}
      >
        <Box display="flex" alignItems="center">
          <IoLanguage size={responsive ? "2rem" : "1.5rem"} />
        </Box>
      </MenuButton>
      <MenuList
        py="0"
        px="0"
        border="2px"
        borderRadius={10}
        minW="max-content"
        borderColor="turquoiseColor.100"
      >
        <MenuItem
          _hover={{ bg: "purpleColor.100" }}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          color="whiteColor"
          bg="backgroundColorBody"
          justifyContent="center"
          onClick={() => handleClick("en")}
        >
          English
        </MenuItem>
        <MenuItem
          _hover={{ bg: "purpleColor.100" }}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          color="whiteColor"
          bg="backgroundColorBody"
          justifyContent="center"
          onClick={() => handleClick("es")}
        >
          Español
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Language;
