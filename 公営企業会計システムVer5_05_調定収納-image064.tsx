import React from 'react';
import styled from '@emotion/styled';

interface AlertProps {
  message?: string;
  onClose?: () => void;
}

const AlertWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AlertMessage = styled.p`
  margin: 0;
  font-size: 16px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const AlertButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const Alert: React.FC<AlertProps> = ({ message = '入力した画面が異なります。', onClose }) => {
  return (
    <AlertWrapper>
      <AlertMessage>{message}</AlertMessage>
      <AlertButton onClick={onClose}>OK</AlertButton>
    </AlertWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleClose = () => {
    console.log('Alert closed');
  };

  return (
    <div>
      <h1>Alert Component Example</h1>
      <Alert onClose={handleClose} />
      <Alert message="Custom alert message" onClose={handleClose} />
    </div>
  );
};

export default Alert;