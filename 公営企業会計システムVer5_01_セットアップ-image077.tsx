import React from 'react';
import styled from 'styled-components';

interface DialogProps {
  date: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const Dialog: React.FC<DialogProps> = ({ date, onOk, onClear, onCancel }) => {
  return (
    <DialogWrapper>
      <DateInput type="text" value={date} readOnly />
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div>
      <h1>Dialog Example</h1>
      <Dialog
        date="001/01/0912"
        onOk={handleOk}
        onClear={handleClear}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;