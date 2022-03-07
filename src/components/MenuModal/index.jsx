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
} from "@chakra-ui/react";
import useModal from "../../hooks/useModal";
import NavbarButton from "../NavbarButton";
import RRSS from "../RRSS";

const MenuModal = () => {
  const { isOpen, onClose, handleClick } = useModal();

  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        motionPreset="slideInRight"
        isCentered
      >
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
                <NavbarButton target="/" title="Home" />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <NavbarButton target="experience" title="Experience" />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <NavbarButton target="projects" title="Projects" />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <Box display="flex" alignItems="center" justifyContent="center">
                  <RRSS responsive={true} />
                </Box>
              </List>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MenuModal;
