import { VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <VStack w="100%" h="100vh" bgColor="backgroundColor" color="whiteColor">
      <Header />
      <Main />
      <Footer />
    </VStack>
  );
};

export default Home;
