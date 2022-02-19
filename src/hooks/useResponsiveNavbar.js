export { useEffect, useState } from "react";
import getViewportWidth from "../helpers/getViewportWidth";

const useResponsiveNavbar = () => {
  const [responsive, setResponsive] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      getViewportWidth() <= 900 ? setResponsive(true) : setResponsive(false);
    });
  }, [getViewportWidth]);

  return responsive;
};

export default useResponsiveNavbar;
