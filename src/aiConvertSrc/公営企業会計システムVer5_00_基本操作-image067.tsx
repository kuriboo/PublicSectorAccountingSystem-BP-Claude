import React from 'react';
import styled from 'styled-components';

interface ErrorModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <ErrorMessage>{message}</ErrorMessage>
        </ModalBody>
        <ModalFooter>
          <OKButton onClick={onClose}>OK</OKButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
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
  width: 80%;
  max-width: 400px;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OKButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleCloseModal = () => {
    // Logic to close the modal
    console.log('Modal closed');
  };

  return (
    <div>
      <h1>Error Modal Example</h1>
      <ErrorModal
        title="システムエラー"
        message="システムエラーが発生しました。管理者に連絡してください。"
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;