import React from 'react';
import styled from '@emotion/styled';

type Report = {
  startMonth: string;
  endMonth: string;
  calculationMethod: 'monthly' | 'daily';
  totalWorkingAmount: 'actualAmount' | 'scheduledAmount';
  segment: string;
};

type CashFlowFormProps = {
  report: Report;
  onSubmit: (report: Report) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CashFlowForm: React.FC<CashFlowFormProps> = ({ report, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(report);
  };

  return (
    <Container>
      <Title>キャッシュフロー計算書</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>期間指定</Label>
          {/* Implement startMonth and endMonth inputs */}
        </FormGroup>
        <FormGroup>
          <Label>計算方式</Label>
          <RadioGroup>
            {/* Implement calculationMethod radio buttons */}
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>金額単位選択</Label>
          <RadioGroup>
            {/* Implement totalWorkingAmount radio buttons */}
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>セグメント</Label>
          {/* Implement segment select */}
        </FormGroup>
        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

export default CashFlowForm;

// Sample usage
const sampleReport: Report = {
  startMonth: '2022-01',
  endMonth: '2022-12',
  calculationMethod: 'monthly',
  totalWorkingAmount: 'actualAmount',
  segment: '',
};

const App: React.FC = () => {
  const handleSubmit = (report: Report) => {
    console.log('Submitted report:', report);
  };

  return <CashFlowForm report={sampleReport} onSubmit={handleSubmit} />;
};