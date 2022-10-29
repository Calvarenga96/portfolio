import { Container, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { motion } from "framer-motion";
import animationFooter from "../../animations/animationFooter";

const Footer = () => {
    const { lang } = useContext(DataContext);
    const AnimatedFooter = motion(Container);

    return (
        <AnimatedFooter
            as="footer"
            h="50px"
            my={15}
            display="flex"
            alignItems="center"
            justifyContent="center"
            variants={animationFooter}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            <Text
                color="purpleColor.100"
                fontSize="sm"
                textAlign="center"
                fontWeight="bold"
            >
                {lang === "en"
                    ? "Made with ❤ from PY."
                    : "Hecho con ❤ desde PY."}
            </Text>
        </AnimatedFooter>
    );
};

export default Footer;
