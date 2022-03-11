import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const { lang } = useContext(DataContext);

  return (
    <VStack>
      <Helmet>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Welcome to my website! May the force be with you young Jedi"
              : "¡Bienvenido a mi sitio web! Que la fuerza te acompañe joven Jedi"
          }
        />
        <title>
          {lang === "en"
            ? "Welcome to my website!"
            : "¡Bienvenido a mi sitio web!"}
        </title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </VStack>
  );
};

export default Home;
