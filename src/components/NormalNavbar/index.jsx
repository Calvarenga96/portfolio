import { Divider, HStack, List } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Language from "../Language";
import NavbarButton from "../NavbarButton";
import RRSS from "../RRSS";

const NormalNavbar = () => {
  const { lang } = useContext(DataContext);

  return (
    <List>
      <HStack justifyContent="center" alignItems="center">
        <NavbarButton target="" title={lang === "en" ? "Home" : "Inicio"} />
        <NavbarButton
          target="experience"
          title={lang === "en" ? "Experience" : "Experiencia"}
        />
        <NavbarButton
          target="projects"
          title={lang === "en" ? "Projects" : "Proyectos"}
        />
        <Divider
          orientation="vertical"
          colorScheme="whiteColor"
          border="1px"
          bg="whiteColor"
          h="25px"
        />
        <RRSS responsive={false} />
        <Divider
          orientation="vertical"
          colorScheme="whiteColor"
          border="1px"
          bg="whiteColor"
          h="25px"
        />
        <Language />
      </HStack>
    </List>
  );
};

export default NormalNavbar;
