import React from 'react';
import styled from '@emotion/styled';

interface TaxReportFormProps {
  onSubmit: (data: { date: string; taxAmount: number; taxableAmount: number; deductibleAmount: number; }) => void;
}

const TaxReportForm: React.FC<TaxReportFormProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [taxAmount, setTaxAmount] = React.useState(0);
  const [taxableAmount, setTaxableAmount] = React.useState(0);
  const [deductibleAmount, setDeductibleAmount] = React.useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, taxAmount, taxableAmount, deductibleAmount });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>消費税申告伝票登録</Title>
      <Label>
        伝票日付
        <Input type="text" value={date} onChange={e => setDate(e.target.value)} />
      </Label>
      <AmountInputs>
        <Label>
          税込金額
          <Input type="number" value={taxAmount} onChange={e => setTaxAmount(Number(e.target.value))} />
        </Label>
        <Label>
          税抜金額
          <Input type="number" value={taxableAmount} onChange={e => setTaxableAmount(Number(e.target.value))} />
        </Label>
        <Label>
          消費税額
          <Input type="number" value={deductibleAmount} onChange={e => setDeductibleAmount(Number(e.target.value))} />
        </Label>
      </AmountInputs>
      <ButtonContainer>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
        <Button type="submit" primary>OK</Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AmountInputs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  ${Label} {
    flex: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  color: ${props => props.primary ? '#fff' : '#333'};
  background-color: ${props => props.primary ? '#007bff' : '#f0f0f0'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const MyPage: React.FC = () => {
  const handleSubmit = (data: { date: string; taxAmount: number; taxableAmount: number; deductibleAmount: number; }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>消費税申告ページ</h1>
      <TaxReportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MyPage;