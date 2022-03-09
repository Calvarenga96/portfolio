import { Box, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Section from "../Section";

const AboutMeSection = () => {
  const { lang } = useContext(DataContext);

  return (
    <Box mt={0}>
      <Section title={lang === "en" ? "About Me" : "Sobre Mí"} />
      <Box mt={5}>
        <Text color="whiteColor">
          {lang === "en"
            ? "I was interested in technology from an early age thanks to the influence of my parents, but it wasn't until 2021, that I really started studying in online platforms like "
            : "Me interesé por la tecnología desde una edad temprana gracias a la influencia de mis padres, pero no fue hasta 2021, cuando realmente empecé a estudiar en plataformas online como "}
          <Link
            href="https://platzi.com/p/Calvarenga96/"
            isExternal={true}
            color="turquoiseColor.100"
          >
            Platzi
          </Link>{" "}
          {lang === "en" ? "and " : "y "}
          <Link
            href="https://www.udemy.com/user/christian-alvarenga-4/"
            isExternal={true}
            color="turquoiseColor.100"
          >
            Udemy
          </Link>{" "}
          {lang === "en"
            ? "to enter the world of programming, I also took an 8-month course at an institute in my country called "
            : "para entrar en el mundo de la programación, también hice un curso de 8 meses en un instituto de mi país llamado "}
          <Link
            href="https://www.idt.com.py/curso/curso-de-programacion-con-php/"
            isExternal={true}
            color="turquoiseColor.100"
          >
            {lang === "en"
              ? "Institute of Design and Technology"
              : "Instituto de Diseño y Tecnología"}
          </Link>
          {lang === "en"
            ? ". Before that, I had studied other areas such as Graphic Design and Digital Marketing, and while they may have been fun to learn, they didn't manage to grab me like programming. Currently, I started studying "
            : ". Antes de eso, había estudiado otras áreas como Diseño Gráfico y Marketing Digital, y si bien fueron divertidas de aprender, no lograron atraparme como la programación. Actualmente, empecé a estudiar "}
          <Link
            href="https://www.uaa.edu.py/carreras/ingenieria-informatica-ciencias-computacion"
            isExternal={true}
            color="turquoiseColor.100"
          >
            {lang === "en"
              ? "Computer Engineering at the Autonomous University of Asunción"
              : "Ingeniería Informática en la Universidad Autónoma de Asunción"}
          </Link>
          .
        </Text>
        <Text color="whiteColor">
          {lang === "en"
            ? "I am a person who believes that education is the key to achieve most of life's purposes, that's why I am always in constant learning and evolution."
            : "Soy una persona que cree que la educación es la clave para lograr la mayoría de los propósitos de la vida, por eso siempre estoy en constante aprendizaje y evolución."}
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMeSection;
