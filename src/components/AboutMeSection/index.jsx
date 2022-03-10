import { Box, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import boxAnimation from "../../animations/boxAnimation";
import { DataContext } from "../../context/DataContext";
import Banner from "../Banner";
import Presentation from "../Presentation";
import Section from "../Section";

const AboutMeSection = () => {
  const { lang } = useContext(DataContext);
  const BoxAnimated = motion(Box);

  return (
    <BoxAnimated
      variants={boxAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      mt={0}
    >
      <Banner />
      <Presentation />
      <Section title={lang === "en" ? "About Me" : "Sobre Mí"} />
      <Box mt={5}>
        <Text color="whiteColor">
          {lang === "en"
            ? "I was interested in technology from an early age thanks to the influence of my parents, I started studying on online platforms such as "
            : "Me interesé por la tecnología desde una edad temprana gracias a la influencia de mis padres, comencé estudiando en plataformas online como "}
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
            ? "to enter the world of programming. I also did an 8-month course at an institute in my city, called "
            : "para entrar al mundo de la programación. También hice un curso de 8 meses en un instituto de mi ciudad, llamado "}
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
            ? ". Before that, I have studied and worked in other fields such as Graphic Design and Digital Marketing, which gives me a certain facility to work with teams from other areas, but it was discovering programming that captivated me and has been my passion to this day. Currently, I am studying for a degree in "
            : ". Antes de eso, he estudiado y trabajado en otras ramas como Diseño Gráfico y Marketing Digital, lo cuál me da cierta facilidad para trabajar con equipos de otras áreas, aunque descubrir la programación fue lo que me cautivó y apasionó hasta hoy en día. Actualmente, me encuentro estudiando la carrera de "}
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
            ? "I am a person who believes that education is the key to achieve our purposes, that is why I am always in constant learning and evolution."
            : "Soy una persona que cree que la educación es la clave para lograr nuestros propósitos, por eso siempre estoy en constante aprendizaje y evolución."}
        </Text>
        <Text color="whiteColor">
          {lang === "en"
            ? "I have other interests besides programming, I enjoy working out at the gym💪🏻, hiking 🏃🏻‍♂️, listening to music 🎶 and I have also studied, as a hobby, to become a DJ 🎧."
            : "Tengo otros intereses a parte de la programación, disfruto bastante de entrenar en el gimnasio 💪🏻, hacer caminatas 🏃🏻‍♂️, escuchar música 🎶 y además he estudiado, como hobby, para ser Dj 🎧."}
        </Text>
      </Box>
    </BoxAnimated>
  );
};

export default AboutMeSection;
