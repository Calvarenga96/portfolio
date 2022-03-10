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
            ? "section), after having learned for a long time the basics with HTML, CSS and JavaScript, starting with a calculator using OOP. After that, I started working on several real front-end projects creating landing pages like "
            : "), después de haber aprendido durante mucho tiempo los fundamentos con HTML, CSS y JavaScript, comenzando con una calculadora usando POO. Después de eso, empecé a trabajar en varios proyectos reales de front-end creando landing pages como "}
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
            ? "using mainly React and its ecosystem but, they are closed source. While I was working on the landing pages, at the institute and online I was learning about PHP and SQL for the backend which is also in the "
            : "utilizando principalmente React y su ecosistema pero, son de código cerrado. Mientras trabajaba en landing pages, el instituto y en línea estaba aprendiendo sobre PHP y SQL para el backend que también está en la sección de "}
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
            ? "Almost at the beginning of the year, I had finished another project using technologies like Jquery for the Front-End and PHP and SQL for the Back-End. Very soon, I will start my more in depth incursion with Laravel, creating a project of my own, which will be public in my GitHub repository."
            : "Casi a comienzo de año, había terminado otro proyecto utilizando tecnologías como Jquery para el Front-End y PHP y SQL para el Back-End. Muy pronto, comenzaré mi incursión más a profundidad con Laravel, creando un proyecto propio, el cuál estará siendo público en mi repositorio de GitHub."}
        </Text>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
