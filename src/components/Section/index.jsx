import { Badge, Box, Heading } from "@chakra-ui/react";

const Section = ({ title }) => {
  return (
    <Box>
      <Heading>
        <Badge colorScheme="turquoiseColor">{title}</Badge>
      </Heading>
    </Box>
  );
};

export default Section;
