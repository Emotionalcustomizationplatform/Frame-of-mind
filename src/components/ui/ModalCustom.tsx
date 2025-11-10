import { ReactNode } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface ModalCustomProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
}

export default function ModalCustom({ isOpen, onClose, title, children, confirmText = "Confirm", onConfirm }: ModalCustomProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="md">
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>Cancel</Button>
          {onConfirm && <Button colorScheme="teal" onClick={onConfirm}>{confirmText}</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
