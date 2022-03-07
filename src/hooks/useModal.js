import { useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openModal, setOpenModal } = useContext(DataContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (openModal) {
      onOpen();
    }
  }, [openModal]);

  return { isOpen, onClose, handleClick, openModal };
};

export default useModal;
