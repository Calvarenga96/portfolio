import { Box, Link, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";

const RRSS = ({ responsive }) => {
  const { lang } = useContext(DataContext);

  return (
    <Box
      display="flex"
      position="column"
      alignItems="center"
      justifyContent="center"
      columnGap="3px"
    >
      <Tooltip
        label={
          lang === "en" ? "Visit my GitHub page" : "Visita mi página de GitHub"
        }
        placement="bottom"
        bg="turquoiseColor.100"
      >
        <Link
          href="https://github.com/Calvarenga96"
          color="whiteColor"
          _hover={{ color: "purpleColor.100" }}
          isExternal={true}
        >
          <FaGithubSquare size={!responsive ? "1.5rem" : "2.5rem"} />
        </Link>
      </Tooltip>
      <Tooltip
        label={
          lang === "en"
            ? "Visit my LinkedIn page"
            : "Visita mi página de LinkedIn"
        }
        placement="bottom"
        bg="turquoiseColor.100"
      >
        <Link
          href="https://www.linkedin.com/in/calvarenga96/"
          color="whiteColor"
          _hover={{ color: "purpleColor.100" }}
          isExternal={true}
        >
          <FaLinkedin size={!responsive ? "1.5rem" : "2.5rem"} />
        </Link>
      </Tooltip>
    </Box>
  );
};

export default RRSS;
