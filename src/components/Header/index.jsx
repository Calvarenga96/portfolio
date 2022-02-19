import useResponsiveNavbar from "../../hooks/useResponsiveNavbar";
import NormalNavbar from "../NormalNavbar";
import ResponsiveNavbar from "../ResponsiveNavbar";

const Header = () => {
  return (
    <header w="100%">
      <nav>
        {!useResponsiveNavbar() ? <NormalNavbar /> : <ResponsiveNavbar />}
      </nav>
    </header>
  );
};

export default Header;
