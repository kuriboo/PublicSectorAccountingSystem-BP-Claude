import React from 'react';
import styled from '@emotion/styled';

type TaxDeductionInputProps = {
  onSubmit: (data: { taxDeduction: boolean; basisDate: string; endDate: string; }) => void;
};

const TaxDeductionInput: React.FC<TaxDeductionInputProps> = ({ onSubmit }) => {
  const [taxDeduction, setTaxDeduction] = React.useState(true);
  const [basisDate, setBasisDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ taxDeduction, basisDate, endDate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>特定課税仕入税等控除入力</Title>
      <DateInputWrapper>
        <Label>
          税率
          <TaxRateSelect value={taxDeduction ? '課税' : '非課税'} onChange={() => setTaxDeduction(!taxDeduction)}>
            <option value="課税">課税</option>
            <option value="非課税">非課税</option>
          </TaxRateSelect>
        </Label>
        <Label>
          年度
          <YearInput type="number" min="28" max="99" defaultValue="28" />年度
        </Label>
      </DateInputWrapper>
      
      <DateRangeWrapper>
        <Label>
          伝票日付
          <DateInput type="date" value={basisDate} onChange={e => setBasisDate(e.target.value)} />
          ~
          <DateInput type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </Label>
        <CheckboxLabel>
          <input type="checkbox" defaultChecked />
          課税の支出予算科目から税額中の伝票のみ抽出
        </CheckboxLabel>
      </DateRangeWrapper>

      <SubmitButton type="submit">検索</SubmitButton>
      <CancelButton type="reset">クリア</CancelButton>
      <ExecuteButton type="button">実行</ExecuteButton>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: { taxDeduction: boolean; basisDate: string; endDate: string; }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Tax Deduction Input Example</h1>
      <TaxDeductionInput onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  margin: 0;
`;

const DateInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TaxRateSelect = styled.select`
  padding: 0.25rem;
`;

const YearInput = styled.input`
  width: 4rem;
  padding: 0.25rem;
`;

const DateRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateInput = styled.input`
  padding: 0.25rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ExecuteButton = styled.button`
  padding: 0.5rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
`;