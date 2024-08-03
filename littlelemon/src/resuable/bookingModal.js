import React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

const BookingModal = ({ children, title = 'Reservation Form', buttonText = 'Reserve Table' }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button bg="#F4CE14" size="md" onClick={onOpen} aria-label={`open ${title}`}>{buttonText}</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {React.cloneElement(children, { closeModal: onClose })}
            </ModalBody>
            <ModalFooter />
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BookingModal;