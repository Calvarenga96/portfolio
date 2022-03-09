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
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import useModal from "../../hooks/useModal";
import Language from "../Language";
import NavbarButton from "../NavbarButton";
import RRSS from "../RRSS";

const MenuModal = () => {
  const { isOpen, onClose, handleClick } = useModal();
  const { lang } = useContext(DataContext);

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
          borderColor="turquoiseColor.100"
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
              {lang === "en"
                ? "Where do you want to go?"
                : "¿A dónde quieres ir?"}
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
                <NavbarButton
                  target="/"
                  title={lang === "en" ? "Home" : "Inicio"}
                />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <NavbarButton
                  target="experience"
                  title={lang === "en" ? "Experience" : "Experiencia"}
                />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <NavbarButton
                  target="projects"
                  title={lang === "en" ? "Projects" : "Proyectos"}
                />
                <Divider h="2px" bgColor="white" w="100%" mb={3} />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <RRSS responsive={true} />
                  <Language responsive={true} />
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
