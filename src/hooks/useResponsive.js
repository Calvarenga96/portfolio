import { useEffect, useState } from "react";
import getViewportWidth from "../helpers/getViewportWidth";

const useResponsive = () => {
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

  return { responsive };
};

export default useResponsive;
