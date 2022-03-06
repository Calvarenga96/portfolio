import { Box, Link, Tooltip } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const RRSS = () => {
  return (
    <Box
      display="flex"
      position="column"
      alignItems="center"
      justifyContent="center"
      columnGap="5px"
    >
      <Tooltip label="Visit my GitHub page" placement="bottom">
        <Link
          href="https://github.com/Calvarenga96"
          color="whiteColor"
          _hover={{ color: "purpleColor.100" }}
          isExternal={true}
        >
          <FaGithubSquare size="1.5rem" />
        </Link>
      </Tooltip>
      <Tooltip label="Visit my LinkedIn page" placement="bottom">
        <Link
          href="https://www.linkedin.com/in/calvarenga96/"
          color="whiteColor"
          _hover={{ color: "purpleColor.100" }}
          isExternal={true}
        >
          <FaLinkedin size="1.5rem" />
        </Link>
      </Tooltip>
    </Box>
  );
};

export default RRSS;
