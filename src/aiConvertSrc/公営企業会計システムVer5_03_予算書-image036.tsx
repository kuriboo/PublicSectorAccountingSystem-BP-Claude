import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

interface TaxFormProps {
  initialYearlyIncome: number;
  initialEstimatedTax: number;
  initialCalculationPeriod: 'yearly' | 'quarterly' | 'monthly';
  initialFilingStatus: 'single' | 'married' | 'headOfHousehold';
  onSubmit: (data: TaxFormData) => void;
}

interface TaxFormData {
  yearlyIncome: number;
  estimatedTax: number;
  calculationPeriod: 'yearly' | 'quarterly' | 'monthly';
  filingStatus: 'single' | 'married' | 'headOfHousehold';
}

const calculationPeriodOptions = [
  { value: 'yearly', label: '年' },
  { value: 'quarterly', label: '四半期' },
  { value: 'monthly', label: '月' },
] as const;

const filingStatusOptions = [
  { value: 'single', label: '独身' },
  { value: 'married', label: '既婚' },
  { value: 'headOfHousehold', label: '世帯主' },
] as const;

const TaxForm: React.FC<TaxFormProps> = ({
  initialYearlyIncome,
  initialEstimatedTax,
  initialCalculationPeriod,
  initialFilingStatus,
  onSubmit,
}) => {
  const [yearlyIncome, setYearlyIncome] = useState(initialYearlyIncome);
  const [estimatedTax, setEstimatedTax] = useState(initialEstimatedTax);
  const [calculationPeriod, setCalculationPeriod] = useState(initialCalculationPeriod);
  const [filingStatus, setFilingStatus] = useState(initialFilingStatus);
  const [errors, setErrors] = useState<Partial<Record<keyof TaxFormData, string>>>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof TaxFormData, string>> = {};

    if (yearlyIncome <= 0) {
      newErrors.yearlyIncome = '年収は0より大きい値を入力してください';
    }

    if (estimatedTax < 0) {
      newErrors.estimatedTax = '予想納税額は0以上の値を入力してください';
    }

    if (estimatedTax > yearlyIncome) {
      newErrors.estimatedTax = '予想納税額は年収を超えることはできません';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [yearlyIncome, estimatedTax]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const data: TaxFormData = {
        yearlyIncome,
        estimatedTax,
        calculationPeriod,
        filingStatus,
      };
      onSubmit(data);
    }
  }, [yearlyIncome, estimatedTax, calculationPeriod, filingStatus, onSubmit, validateForm]);

  const handleYearlyIncomeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setYearlyIncome(value);
    setErrors(prev => ({ ...prev, yearlyIncome: undefined }));
  }, []);

  const handleEstimatedTaxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setEstimatedTax(value);
    setErrors(prev => ({ ...prev, estimatedTax: undefined }));
  }, []);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormSection>
        <FormLabel htmlFor="yearlyIncome">年収</FormLabel>
        <FormInput
          id="yearlyIncome"
          type="number"
          value={yearlyIncome}
          onChange={handleYearlyIncomeChange}
          required
          min="1"
          step="1000"
        />
        {errors.yearlyIncome && <ErrorMessage>{errors.yearlyIncome}</ErrorMessage>}
      </FormSection>

      <FormSection>
        <FormLabel htmlFor="estimatedTax">予想納税額</FormLabel>
        <FormInput
          id="estimatedTax"
          type="number"
          value={estimatedTax}
          onChange={handleEstimatedTaxChange}
          required
          min="0"
          step="100"
        />
        {errors.estimatedTax && <ErrorMessage>{errors.estimatedTax}</ErrorMessage>}
      </FormSection>

      <FormSection>
        <FormLabel htmlFor="calculationPeriod">税額計算の期間</FormLabel>
        <FormSelect
          id="calculationPeriod"
          value={calculationPeriod}
          onChange={(e) => setCalculationPeriod(e.target.value as TaxFormData['calculationPeriod'])}
        >
          {calculationPeriodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
      </FormSection>

      <FormSection>
        <FormLabel htmlFor="filingStatus">申告ステータス</FormLabel>
        <FormSelect
          id="filingStatus"
          value={filingStatus}
          onChange={(e) => setFilingStatus(e.target.value as TaxFormData['filingStatus'])}
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

const TaxCalculator: React.FC = () => {
  const handleTaxFormSubmit = useCallback((data: TaxFormData) => {
    console.log('Tax form submitted:', data);
    // Perform tax calculation based on the form data
  }, []);

  return (
    <div>
      <h1>税額計算フォーム</h1>
      <TaxForm
        initialYearlyIncome={5000000}
        initialEstimatedTax={100000}
        initialCalculationPeriod="yearly"
        initialFilingStatus="single"
        onSubmit={handleTaxFormSubmit}
      />
    </div>
  );
};

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

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export default TaxCalculator;