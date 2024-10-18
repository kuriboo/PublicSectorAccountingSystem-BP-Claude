import React from 'react';
import styled from '@emotion/styled';

type TaxWithholding = {
  year: number;
  period: number;
  departureDate: string;
  destination: string;
  taxAmount: number;
  localTaxAmount: number;
  reconstructionTaxAmount: number;
};

type TaxWithholdingFormProps = {
  data?: TaxWithholding;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  data = {
    year: 0,
    period: 0,
    departureDate: '',
    destination: '',
    taxAmount: 0,
    localTaxAmount: 0,
    reconstructionTaxAmount: 0,
  },
  onOk,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <Form>
        <Row>
          <Label>伝票日付</Label>
          <span>{data.departureDate}</span>
        </Row>
        <Row>
          <Label>伝票番号</Label>
          <Input type="number" value={data.period} readOnly />
          年
          <Input type="number" value={data.year} readOnly />
        </Row>
        <Row>
          <Label>摘要</Label>
          <Input type="text" value={data.destination} readOnly />
        </Row>
        <Row>
          <Label>税込金額</Label>
          <Input type="number" value={data.taxAmount} readOnly />
        </Row>
        <Row>
          <Label>税抜金額</Label>
          <Input type="number" value={data.localTaxAmount} readOnly />
        </Row>
        <Row>
          <Label>消費税額</Label>
          <Input type="number" value={data.reconstructionTaxAmount} readOnly />
        </Row>
      </Form>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  margin-right: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  const taxWithholdingData: TaxWithholding = {
    year: 28,
    period: 4,
    departureDate: '平成28年03月27日',
    destination: '消費税仕訳伝票振替',
    taxAmount: 80000,
    localTaxAmount: 80000,
    reconstructionTaxAmount: 0,
  };

  return (
    <div>
      <h1>Tax Withholding Form Example</h1>
      <TaxWithholdingForm
        data={taxWithholdingData}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;