import React from 'react';
import styled from '@emotion/styled';

type ConfirmationDialogProps = {
  title: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
};

const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 90%;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  message,
  onOk,
  onCancel,
}) => {
  return (
    <Dialog>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </Dialog>
  );
};

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    // Handle OK button click
    console.log('OK button clicked');
  };

  const handleCancel = () => {
    // Handle Cancel button click 
    console.log('Cancel button clicked');
  };

  return (
    <div>
      <h1>Confirmation Dialog Example</h1>
      <ConfirmationDialog
        title="練習予算確定処理"
        message="年度の練習データを次年度へ締越します。"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;