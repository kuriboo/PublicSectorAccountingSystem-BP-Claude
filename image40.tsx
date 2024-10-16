import React from 'react';
import styled from '@emotion/styled';

type PublicWorkerTaxDeductionFormProps = {
  fromDate: string;
  toDate: string;
  insuranceType: '健康' | '厚生年金' | '雇用' | '介護' | '労災';
  personalNumber: string;
  age: number;
  annualIncome: number;
  employmentIncome: number;
  deductibleExpense: number;
  onSubmit: (data: PublicWorkerTaxDeductionFormData) => void;
};

type PublicWorkerTaxDeductionFormData = {
  fromDate: string;
  toDate: string;
  insuranceType: '健康' | '厚生年金' | '雇用' | '介護' | '労災'; 
  personalNumber: string;
  age: number;
  annualIncome: number;
  employmentIncome: number;
  deductibleExpense: number;
};

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  label {
    width: 150px;
    margin-right: 10px;
  }

  input[type='text'],
  input[type='number'],
  select {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PublicWorkerTaxDeductionForm: React.FC<PublicWorkerTaxDeductionFormProps> = ({
  fromDate,
  toDate,
  insuranceType,
  personalNumber,
  age,
  annualIncome,
  employmentIncome,
  deductibleExpense,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      fromDate,
      toDate,
      insuranceType,
      personalNumber,
      age,
      annualIncome,
      employmentIncome,
      deductibleExpense,
    });
  };

  return (
    <FormContainer>
      <FormTitle>特定課税仕入税率管理入力</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <label>検索:</label>
          <input type="text" value={fromDate} readOnly />
          <span> 〜 </span>
          <input type="text" value={toDate} readOnly />
        </FormField>
        <FormField>
          <label>種別:</label>
          <select value={insuranceType}>
            <option value="健康">健康</option>
            <option value="厚生年金">厚生年金</option>
            <option value="雇用">雇用</option>
            <option value="介護">介護</option>
            <option value="労災">労災</option>
          </select>
        </FormField>
        <FormField>
          <label>伝票番号:</label>
          <input type="text" value={personalNumber} readOnly />
        </FormField>
        <FormField>
          <label>年度:</label>
          <input type="number" value={age} readOnly />
        </FormField>
        <FormField>
          <label>課税金額:</label>
          <input type="number" value={annualIncome} readOnly />
        </FormField>
        <FormField>
          <label>税抜金額:</label>
          <input type="number" value={employmentIncome} readOnly />
        </FormField>
        <FormField>
          <label>消費税額:</label>
          <input type="number" value={deductibleExpense} readOnly />
        </FormField>
        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </FormContainer>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: PublicWorkerTaxDeductionFormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <PublicWorkerTaxDeductionForm
      fromDate="2023-03-27"
      toDate="2023-03-27"
      insuranceType="健康"
      personalNumber="43"
      age={43}
      annualIncome={80000}
      employmentIncome={80000}
      deductibleExpense={0}
      onSubmit={handleSubmit}
    />
  );
};

export default PublicWorkerTaxDeductionForm;