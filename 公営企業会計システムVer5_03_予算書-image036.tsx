import React from 'react';
import styled from '@emotion/styled';

interface TaxFormProps {
  yearlyIncome: number;
  estimatedTax: number;
  calculationPeriod: 'yearly' | 'quarterly' | 'monthly';
  filingStatus: 'single' | 'married' | 'headOfHousehold';
  onSubmit: (data: TaxFormData) => void;
}

interface TaxFormData {
  yearlyIncome: number;
  estimatedTax: number;
  calculationPeriod: string;
  filingStatus: string;
}

const TaxForm: React.FC<TaxFormProps> = ({
  yearlyIncome,
  estimatedTax,
  calculationPeriod,
  filingStatus,
  onSubmit,
}) => {
  // 税額計算の期間選択肢
  const calculationPeriodOptions = [
    { value: 'yearly', label: '年' },
    { value: 'quarterly', label: '四半期' },
    { value: 'monthly', label: '月' },
  ];

  // 申告ステータス選択肢
  const filingStatusOptions = [
    { value: 'single', label: '独身' },
    { value: 'married', label: '既婚' },
    { value: 'headOfHousehold', label: '世帯主' },
  ];

  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TaxFormData = {
      yearlyIncome,
      estimatedTax,
      calculationPeriod,
      filingStatus,
    };
    onSubmit(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormSection>
        <FormLabel>年収</FormLabel>
        <FormInput
          type="number"
          value={yearlyIncome}
          onChange={(e) => setYearlyIncome(Number(e.target.value))}
          required
        />
      </FormSection>

      <FormSection>
        <FormLabel>予算納税分</FormLabel>
        <FormInput
          type="number"
          value={estimatedTax}
          onChange={(e) => setEstimatedTax(Number(e.target.value))}
        />
      </FormSection>

      <FormSection>
        <FormLabel>税額計算の期間</FormLabel>
        <FormSelect
          value={calculationPeriod}
          onChange={(e) => setCalculationPeriod(e.target.value)}
        >
          {calculationPeriodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
      </FormSection>

      <FormSection>
        <FormLabel>申告ステータス</FormLabel>
        <FormSelect
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value)}
        >
          {filingStatusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
      </FormSection>

      <SubmitButton type="submit">計算</SubmitButton>
    </FormWrapper>
  );
};

// Usage example
const TaxCalculator = () => {
  const handleTaxFormSubmit = (data: TaxFormData) => {
    console.log('Tax form submitted:', data);
    // Perform tax calculation based on the form data
  };

  return (
    <div>
      <h1>税額計算フォーム</h1>
      <TaxForm
        yearlyIncome={5000000}
        estimatedTax={100000}
        calculationPeriod="yearly"
        filingStatus="single"
        onSubmit={handleTaxFormSubmit}
      />
    </div>
  );
};

// Styled components
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default TaxCalculator;