import React from 'react';
import styled from 'styled-components';

type BudgetFormProps = {
  budget: number;
  deposit: number;
  interestRate: number;
  years: number;
  monthlyPayment: number;
  yearlyPayment: number;
  totalPayment: number;
  interestPayment: number;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  budget,
  deposit,
  interestRate,
  years,
  monthlyPayment,
  yearlyPayment,
  totalPayment,
  interestPayment,
  onInputChange,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <FormGroup>
        <Label>取得価額</Label>
        <Input type="number" name="budget" value={budget} onChange={onInputChange} />
      </FormGroup>
      <FormGroup>
        <Label>頭金</Label>
        <Input type="number" name="deposit" value={deposit} onChange={onInputChange} />
      </FormGroup>
      <FormGroup>
        <Label>借入方法</Label>
        <RadioGroup>
          <RadioLabel>
            <Radio type="radio" name="paymentType" value="monthly" defaultChecked />
            毎月返済
          </RadioLabel>
          <RadioLabel>
            <Radio type="radio" name="paymentType" value="yearly" />
            年払い
          </RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>返済期間</Label>
        <Input type="number" name="years" value={years} onChange={onInputChange} />年
      </FormGroup>
      <FormGroup>
        <Label>利用年数</Label>
        <Input type="number" name="usageYears" value={years} onChange={onInputChange} />年
      </FormGroup>
      <FormGroup>
        <Label>金利</Label>
        <Input type="number" name="interestRate" value={interestRate} onChange={onInputChange} />％
      </FormGroup>
      <ResultGroup>
        <ResultLabel>月々の支払額</ResultLabel>
        <Result>{monthlyPayment.toLocaleString()}</Result>
      </ResultGroup>
      <ResultGroup>
        <ResultLabel>年間の支払額</ResultLabel>
        <Result>{yearlyPayment.toLocaleString()}</Result>
      </ResultGroup>
      <ResultGroup>
        <ResultLabel>支払総額</ResultLabel>
        <Result>{totalPayment.toLocaleString()}</Result>
      </ResultGroup>
      <ResultGroup>
        <ResultLabel>うち利息</ResultLabel>
        <Result>{interestPayment.toLocaleString()}</Result>
      </ResultGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>計算</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Radio = styled.input`
  margin: 0;
`;

const ResultGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultLabel = styled.div`
  font-weight: bold;
`;

const Result = styled.div`
  font-size: 1.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleBudgetForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    budget: 2000000,
    deposit: 1000,
    interestRate: 1.0,
    years: 10,
    monthlyPayment: 18000,
    yearlyPayment: 200000,
    totalPayment: 1800000,
    interestPayment: 180000,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = () => {
    // Perform calculations and update form data
    // ...
  };

  return (
    <BudgetForm
      {...formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SampleBudgetForm;