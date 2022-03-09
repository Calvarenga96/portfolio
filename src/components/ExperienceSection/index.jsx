import { Box, Kbd, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Section from "../Section";
import styles from "./styles.module.css";

const ExperienceSection = () => {
  const { lang } = useContext(DataContext);

  return (
    <Box mt={0}>
      <Section title={lang === "en" ? "Experience" : "Experiencia"} />
      <Box display="flex" mt={5}>
        <Kbd bgColor="purpleColor.100" color="whiteColor" h={5}>
          2021
        </Kbd>
        <Text color="whiteColor" pl={3}>
          {lang === "en"
            ? "I started creating my own projects (which you can see in the "
            : "Empecé a crear mis propios proyectos (que puedes ver la sección de "}
          <LinkRouter to="/projects" className={styles.link}>
            {lang === "en" ? "projects " : "proyectos"}
          </LinkRouter>
          {lang === "en"
            ? "section), after having learned for a long time the basics with HTML, CSS and JavaScript, starting with a calculator using POO. After that I started working on several real front-end projects creating landing pages like "
            : "), después de haber aprendido durante mucho tiempo los fundamentos con HTML, CSS y JavaScript, comenzando con una calculadora usando POO. Después de eso  proyectos reales de front-end, creando páginas de aterrizaje páginas como"}
          <Link
            href="https://www.marketingeducativo.com/"
            isExternal={true}
            color="turquoiseColor.100"
          >
            marketingeducativo.com
          </Link>
          ,{" "}
          <Link
            href="https://www.cursosdeofimatica.com"
            isExternal={true}
            color="turquoiseColor.100"
          >
            cursosdeofimatica.com
          </Link>{" "}
          {lang === "en" ? "and " : "y "}
          <Link
            href="https://www.cursosdemkt.com"
            isExternal={true}
            color="turquoiseColor.100"
          >
            cursosdemkt.com
          </Link>{" "}
          {lang === "en"
            ? "using mainly React and its ecosystem but, they are closed source. While I was working on the landing pages, at my local high school and online I was learning about PHP and SQL for the backend which is also in the "
            : "utilizando principalmente React y su ecosistema pero, son de código cerrado. Mientras trabajaba en las páginas de aterrizaje, en mi instituto local y en línea estaba aprendiendo sobre PHP y SQL para el backend que también está en la sección de "}
          <LinkRouter to="/projects" className={styles.link}>
            {lang === "en" ? "projects " : "proyectos. "}
          </LinkRouter>
          {lang === "en"
            ? "section. I also started studying the Laravel framework for PHP."
            : "También empecé a estudiar el framework Laravel para PHP"}
        </Text>
      </Box>

      <Box display="flex" mt={5}>
        <Kbd bgColor="purpleColor.100" color="whiteColor" h={5}>
          2022
        </Kbd>
        <Text color="whiteColor" pl={3}>
          {lang === "en"
            ? "I have finished another project made with Jquery for the Front-End and PHP and SQL for the Back-End. Then I will start developing a project with Laravel."
            : "He terminado otro proyecto hecho con Jquery para el Front-End y PHP y SQL para el Back-End. Luego comenzaré a desarrollar un proyecto con Laravel."}
        </Text>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
