import React from 'react';
import styled from '@emotion/styled';

type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  min-width: 300px;
  max-width: 90%;
`;

const ModalTitle = styled.h2`
  margin: 0 0 10px;
`;

const ModalDescription = styled.p`
  margin: 0 0 20px;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal: React.FC<ModalProps> = ({ title, description, onClose, onConfirm, onCancel }) => {
  // Handle close modal on background click
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleBackgroundClick}>
      <ModalContent>
        <ModalTitle>{title || 'Modal Title'}</ModalTitle>
        <ModalDescription>{description || 'Modal Description'}</ModalDescription>
        <ModalButtonWrapper>
          <ModalButton onClick={onConfirm}>OK</ModalButton>
          <ModalButton onClick={onCancel}>Cancel</ModalButton>
        </ModalButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

// Example usage
const ExampleModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    console.log('Confirmed');
    handleClose();
  };
  const handleCancel = () => {
    console.log('Canceled');
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <Modal
          title="Example Modal"
          description="This is an example modal component."
          onClose={handleClose}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Modal;