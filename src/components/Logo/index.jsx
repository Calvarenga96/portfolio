import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Logo = () => {
  const { section } = useContext(DataContext);

  return (
    <Heading
      as="h2"
      fontSize="lg"
      fontWeight="bold"
      fontFamily="heading"
      color="white"
      display="flex"
      variant="page-title"
      sx={{ "user-select": "none" }}
    >
      <Link to="/" _hover={{ textDecoration: "none" }}>
        {"<Christian Alvarenga />"}
      </Link>
    </Heading>
  );
};

export default Logo;
