// PrinterQueueForm.tsx
import React from 'react';
import styled from '@emotion/styled';

interface PrinterQueueFormProps {
  printerName?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClear?: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PrinterName = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 8px;
  }
`;

const PrinterQueueForm: React.FC<PrinterQueueFormProps> = ({
  printerName = '',
  onOk,
  onCancel,
  onClear
}) => {
  return (
    <Container>
      <Title>印刷隊列名稱:</Title>
      <PrinterName>{printerName}</PrinterName>
      <ButtonContainer>
        <button onClick={onOk}>OK</button>
        <button onClick={onClear}>クリア</button>
        <button onClick={onCancel}>キャンセル</button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SamplePrinterQueueForm: React.FC = () => {
  const handleOk = () => {
    console.log('OK button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const handleClear = () => {
    console.log('Clear button clicked');
  };

  return (
    <PrinterQueueForm
      printerName="HP OfficeJet Pro 6978 (前払工事)"
      onOk={handleOk}
      onCancel={handleCancel}  
      onClear={handleClear}
    />
  );
};

export default PrinterQueueForm;