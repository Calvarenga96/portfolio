import { Menu } from "@chakra-ui/react";
import HamburguerMenu from "../HamburguerMenu";
import MenuResponsive from "../MenuResponsive";

const ResponsiveNavbar = () => {
  return (
    <Menu autoSelect={false} isLazy>
      <HamburguerMenu />
      <MenuResponsive />
    </Menu>
  );
};

export default ResponsiveNavbar;
