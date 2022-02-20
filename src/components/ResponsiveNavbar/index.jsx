import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import HamburguerMenu from "../HamburguerMenu";
import MenuModal from "../MenuModal";

const ResponsiveNavbar = () => {
  const { openModal, setOpenModal } = useContext(DataContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box>
      <Box onClick={handleClick} position="fixed" bottom="30px" right="30px">
        <HamburguerMenu />
      </Box>
      {openModal && <MenuModal />}
    </Box>
  );
};

export default ResponsiveNavbar;
