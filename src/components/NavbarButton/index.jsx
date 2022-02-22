import { Button, Link, ListItem } from "@chakra-ui/react";

const NavbarButton = ({ target, title }) => {
  return (
    <ListItem>
      <Link href={`/${target}`} color={"white"}>
        {title === "Download Resume" ? (
          <Button bgColor="purpleColor.100" w="100%" color="white">
            {title}
          </Button>
        ) : (
          title
        )}
      </Link>
    </ListItem>
  );
};

export default NavbarButton;
