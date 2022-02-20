import { useEffect, useState } from "react";
import getViewportWidth from "../../helpers/getViewportWidth";
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
    <header w="100%" p={["sm", "md", "lg"]}>
      <nav>{responsive ? <ResponsiveNavbar /> : <NormalNavbar />}</nav>
    </header>
  );
};

export default Header;
