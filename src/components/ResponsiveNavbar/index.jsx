import { Box } from "@chakra-ui/react";
import useModal from "../../hooks/useModal";
import HamburguerMenu from "../HamburguerMenu";
import MenuModal from "../MenuModal";

const ResponsiveNavbar = () => {
  const { handleClick, openModal } = useModal();

  return (
    <Box>
      <Box onClick={handleClick}>
        <HamburguerMenu />
      </Box>
      {openModal && <MenuModal />}
    </Box>
  );
};

export default ResponsiveNavbar;
