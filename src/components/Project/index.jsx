import {
  Badge,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Project = ({ name, link, alt, technologies, src }) => {
  return (
    <WrapItem w="40%">
      <Flex direction="column" rowGap="15px">
        <Link href={link} isExternal>
          <Image
            src={src}
            alt={alt}
            color="whiteColor"
            borderRadius={5}
            border="2px"
            borderColor="purpleColor.300"
            _hover={{ borderColor: "purpleColor.100" }}
          />
        </Link>
        <Heading as="h3" color="whiteColor" size="md">
          <Link href={link} isExternal>
            {name}
          </Link>
        </Heading>
        <Text color="whiteColor" fontWeight="600">
          Technologies used
        </Text>
        <Wrap>
          {technologies.map((technology) => {
            return (
              <WrapItem>
                <Badge
                  variant="subtle"
                  key={technology}
                  color="turquoiseColor.100"
                  w="max-content"
                  h="max-content"
                  fontSize={10}
                >
                  {technology}
                </Badge>
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </WrapItem>
  );
};

export default Project;
