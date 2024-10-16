import React from 'react';
import styled from '@emotion/styled';

type InvoiceFormProps = {
  onOk?: () => void;
  onCancel?: () => void;
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onOk, onCancel }) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <FormGroup>
        <label>
          <input type="radio" name="invoice" defaultChecked /> 支出負担行為伺書(工事)　とりまとめ
        </label>
        <label>
          <input type="radio" name="invoice" /> 支出負担行為伺書(工事)
        </label>
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border: 1px solid #ccc;
  width: 300px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div>
      <h1>Invoice Form Example</h1>
      <InvoiceForm onOk={handleOk} onCancel={handleCancel} />
    </div>
  );
};

export default App;