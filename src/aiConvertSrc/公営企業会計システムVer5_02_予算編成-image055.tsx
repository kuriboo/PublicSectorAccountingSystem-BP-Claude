import React from 'react';
import styled from '@emotion/styled';

type ConfirmDialogProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const DialogContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const DialogTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DialogMessage = styled.p`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
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
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
  onClose,
}) => {
  // Confirm button click handler
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  // Cancel button click handler  
  const handleCancel = () => {
    onCancel();
    onClose();
  };

  return (
    <DialogContainer>
      <DialogTitle>{title}</DialogTitle>
      <DialogMessage>{message}</DialogMessage>
      <ButtonContainer>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleConfirm}>OK</Button>
        <Button onClick={onClose}>Close</Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

// Example usage
const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <div>
      <h1>Confirm Dialog Example</h1>
      <ConfirmDialog
        title="当初予算データ登録"
        message="f予算積算基礎入力用シートからコピー&ペーストして出力したCSVファイルを取り込み、一括で当初積算要求登録を行います。見積要求登録済の予算科目については取り込みを行いません。予算データが間違っていると登録してくだ"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;