import { ModalOverlay } from "@chakra-ui/react";

const BackgroundOverlay = () => {
  return (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
};

export default BackgroundOverlay;
