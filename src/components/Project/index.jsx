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
import useResponsive from "../../hooks/useResponsive";

const Project = ({ name, link, alt, technologies, srcPath }) => {
  const { responsive } = useResponsive();

  return (
    <WrapItem w={responsive ? "100%" : "45%"}>
      <Flex direction="column" rowGap="15px">
        <Link href={link} isExternal={true}>
          <Image
            src={srcPath}
            alt={alt}
            color="whiteColor"
            borderRadius={10}
            border="2px"
            borderColor="purpleColor.300"
            _hover={{ borderColor: "purpleColor.100" }}
          />
        </Link>
        <Heading as="h3" color="whiteColor" size="md">
          <Link href={link} isExternal={true}>
            {name}
          </Link>
        </Heading>
        <Text color="whiteColor" fontWeight="600">
          Technologies used
        </Text>
        <Wrap>
          {technologies.map((technology) => {
            return (
              <WrapItem key={technology}>
                <Badge
                  variant="subtle"
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
