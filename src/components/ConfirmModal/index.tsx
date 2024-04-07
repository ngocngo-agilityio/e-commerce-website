'use client';

// Libs
import { memo } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  HStack,
  Button,
} from '@chakra-ui/react';

interface ConfirmModalProps {
  isOpen?: boolean;
  title: string;
  message: string;
  textSubmit: string;
  textCancel: string;
  onClose: () => void;
  onSubmit: () => void;
}

const ModalConfirm = ({
  isOpen = true,
  message,
  title,
  textSubmit,
  textCancel,
  onClose,
  onSubmit,
}: ConfirmModalProps): JSX.Element => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent backgroundColor="white">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton data-testid="close-btn" />
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <HStack spacing="20px">
            <Button variant="cancelModal" size="xs" onClick={onClose}>
              {textCancel}
            </Button>
            <Button size="xs" onClick={onSubmit}>
              {textSubmit}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalConfirm);
