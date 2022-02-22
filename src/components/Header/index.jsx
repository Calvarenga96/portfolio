import { Box, Container, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getViewportWidth from "../../helpers/getViewportWidth";
import Logo from "../Logo";
import NormalNavbar from "../NormalNavbar";
import ResponsiveNavbar from "../ResponsiveNavbar";

const Header = () => {
  const [responsive, setResponsive] = useState();
  const BREAKPOINT = 1024;

  useEffect(() => {
    getViewportWidth() <= BREAKPOINT
      ? setResponsive(true)
      : setResponsive(false);

    window.addEventListener("resize", () => {
      getViewportWidth() <= BREAKPOINT
        ? setResponsive(true)
        : setResponsive(false);
    });
  }, []);

  return (
    <Box
      as="header"
      w="100%"
      py={["30px", "20px", "20px"]}
      position="fixed"
      bgColor="backgroundColorHeader"
      backdropFilter="blur(13.4px)"
      zIndex={1}
    >
      <Container
        as="nav"
        maxW="2xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Logo />
        </Link>
        {responsive ? <ResponsiveNavbar /> : <NormalNavbar />}
      </Container>
    </Box>
  );
};

export default Header;
