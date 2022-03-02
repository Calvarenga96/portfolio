import { Button, Link, ListItem } from "@chakra-ui/react";

const NavbarButton = ({ target, title }) => {
  return (
    <ListItem>
      <Link href={`/${target}`} color={"whiteColor"}>
        {title === "Download Resume" ? (
          <Button
            bgColor="purpleColor.300"
            w="100%"
            color="whiteColor"
            _hover={{
              background: "purpleColor.100",
            }}
          >
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
