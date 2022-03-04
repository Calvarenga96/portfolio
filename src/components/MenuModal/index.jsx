import {
  Box,
  Divider,
  Heading,
  HStack,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
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
          borderRadius="10px"
          border="1px"
          borderColor="white"
          bg="backgroundColorBody"
          w={["90%", "80%", "70%"]}
        >
          <ModalHeader
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading color="white" fontSize={["md", "xl"]}>
              Where do you want to go?
            </Heading>
            <ModalCloseButton
              onClick={handleClick}
              color="white"
              position="static"
              w="max-content"
              h="max-content"
            />
          </ModalHeader>
          <ModalBody p={5}>
            <HStack>
              <List w="100%">
                <NavbarButton target="" title="Home" />
                <Divider h="2px" bgColor="white" w="100%" mb={2} />
                <NavbarButton target="experience" title="Experience" />
                <Divider h="2px" bgColor="white" w="100%" mb={2} />
                <NavbarButton target="projects" title="Projects" />
                <Divider h="2px" bgColor="white" w="100%" mb={2} />
                <NavbarButton title="Download Resume" />
              </List>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MenuModal;
