import { Box, Spinner } from "@chakra-ui/react";

const GroguLoading = () => {
  return (
    <Box h="200px" display="flex" alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purpleColor.300"
        size="xl"
      />
    </Box>
  );
};

export default GroguLoading;
