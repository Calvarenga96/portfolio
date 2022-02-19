import { Link, ListItem } from "@chakra-ui/react";

const NavbarButton = ({ target, title }) => {
  return (
    <ListItem>
      <Link href={`/${target}`}>{title}</Link>
    </ListItem>
  );
};

export default NavbarButton;
