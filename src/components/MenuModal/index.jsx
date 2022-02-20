import {
  Box,
  Divider,
  HStack,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import BackgroundOverlay from "../BackgroundOverlay";
import NavbarButton from "../NavbarButton";

const MenuModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<BackgroundOverlay />);
  const { openModal, setOpenModal } = useContext(DataContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (openModal) {
      setOverlay(<BackgroundOverlay />);
      onOpen();
    }
  }, [openModal]);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        {overlay}
        <ModalContent
          display="flex"
          border="2px"
          borderColor="gradient.turquoisePurpleColor"
          borderRadius="10px"
        >
          <ModalCloseButton onClick={handleClick} mb={5} />
          <ModalBody p={5}>
            <HStack>
              <List w="100%">
                <NavbarButton target="" title="Home" />
                <Divider h="2px" bgColor="gray.700" w="100%" mb={2} />
                <NavbarButton target="about-me" title="About Me" />
                <Divider h="2px" bgColor="gray.700" w="100%" mb={2} />
                <NavbarButton target="experience" title="Experience" />
                <Divider h="2px" bgColor="gray.700" w="100%" mb={2} />
                <NavbarButton target="projects" title="Projects" />
                <Divider h="2px" bgColor="gray.700" w="100%" mb={2} />
                <NavbarButton target="resume" title="Download Resume" />
              </List>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MenuModal;
