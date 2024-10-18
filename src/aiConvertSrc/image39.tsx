import React from 'react';
import styled from '@emotion/styled';

interface TaxExemptionFormProps {
  startDate: string;
  endDate: string;
  reason: string;
  amount1: number;
  amount2: number;
  deductedAmount: number;
  onSubmit: (data: TaxExemptionFormData) => void;
}

interface TaxExemptionFormData {
  startDate: string;
  endDate: string; 
  reason: string;
  amount1: number;
  amount2: number;
  deductedAmount: number;
}

const TaxExemptionForm: React.FC<TaxExemptionFormProps> = ({
  startDate,
  endDate,
  reason,
  amount1,
  amount2,
  deductedAmount,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TaxExemptionFormData = {
      startDate,
      endDate,
      reason,
      amount1,
      amount2,
      deductedAmount,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        伝票日付
        <Input
          type="date"
          value={startDate}
          onChange={(e) => console.log(e.target.value)}
          required
        />
        〜
        <Input
          type="date"
          value={endDate}
          onChange={(e) => console.log(e.target.value)}
          required
        />
      </Label>
      <Label>
        借方科目
        <Input
          type="text"
          value={reason}
          onChange={(e) => console.log(e.target.value)}
          required
        />
      </Label>
      <AmountContainer>
        <AmountItem>
          <AmountLabel>税込金額</AmountLabel>
          <AmountValue>{amount1.toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>税抜金額</AmountLabel>
          <AmountValue>{amount2.toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{deductedAmount.toLocaleString()}</AmountValue>
        </AmountItem>
      </AmountContainer>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <SubmitButton type="submit">キャンセル</SubmitButton>
      </ButtonContainer>
    </Form>
  );
};

// Sample usage
const SampleTaxExemptionForm: React.FC = () => {
  const handleSubmit = (data: TaxExemptionFormData) => {
    console.log(data);
  };

  return (
    <TaxExemptionForm
      startDate="2028-03-27"
      endDate="2028-03-27"
      reason="電子書籍/現物税分"
      amount1={80000}
      amount2={80000}
      deductedAmount={0}
      onSubmit={handleSubmit}
    />
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AmountItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const AmountValue = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

export default TaxExemptionForm;