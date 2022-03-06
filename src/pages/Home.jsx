import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <VStack>
      <Helmet>
        <meta
          name="description"
          content="Welcome to my website! May the force be with you"
        />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </VStack>
  );
};

export default Home;
