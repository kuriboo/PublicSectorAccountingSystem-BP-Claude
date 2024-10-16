import React from 'react';
import styled from 'styled-components';

interface PrintPreviewDialogProps {
  printerName?: string;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
}

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 300px;
  max-width: 90%;
`;

const DialogTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const PrinterNameInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
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

const PrintPreviewDialog: React.FC<PrintPreviewDialogProps> = ({
  printerName = '',
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <DialogContainer>
      <DialogTitle>印刷部署名</DialogTitle>
      <PrinterNameInput type="text" value={printerName} readOnly />
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

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
      <h1>Print Preview Dialog Example</h1>
      <PrintPreviewDialog
        printerName="Default Printer"
        onOk={handleOk}
        onClear={handleClear}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;