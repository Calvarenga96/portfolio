import { Box, Container } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";
import Logo from "../Logo";
import NormalNavbar from "../NormalNavbar";
import ResponsiveNavbar from "../ResponsiveNavbar";

const Header = () => {
  const { responsive } = useResponsive();

  return (
    <Box
      as="header"
      w="100vw"
      h="65px"
      position="fixed"
      bgColor="backgroundColorHeader"
      backdropFilter="blur(13.4px)"
      zIndex={1}
      display="flex"
      alignItems="center"
    >
      <Container
        as="nav"
        maxW="2xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        {responsive ? <ResponsiveNavbar /> : <NormalNavbar />}
      </Container>
    </Box>
  );
};

export default Header;
