import React from 'react';
import styled from '@emotion/styled';

interface InsurancePolicyInputProps {
  saving: number;
  deposit: number;
  premiumAmount: number;
  incomeAmount: number;
  outgoAmount: number;
  outgoCommissionAmount: number;
  otherExpenseAmount: number;
  reserveInsurantAmount: number;
  reserveSubscriberAmount: number;
}

const InsurancePolicyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  flex: 1;
`;

const InputField = styled.input`
  flex: 2;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const InsurancePolicyInput: React.FC<InsurancePolicyInputProps> = ({
  saving,
  deposit,
  premiumAmount,
  incomeAmount,
  outgoAmount,
  outgoCommissionAmount,
  otherExpenseAmount,
  reserveInsurantAmount,
  reserveSubscriberAmount,
}) => {
  return (
    <InsurancePolicyInputWrapper>
      <Title>貯蓄月別入出庫保守</Title>
      <InputWrapper>
        <InputLabel>保管場所</InputLabel>
        <InputField type="text" value={saving || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>保管コード</InputLabel>
        <InputField type="text" value={deposit || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>入庫数量</InputLabel>
        <InputField type="number" value={premiumAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>入庫金額</InputLabel>
        <InputField type="number" value={incomeAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>出庫数量</InputLabel>
        <InputField type="number" value={outgoAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>出庫金額</InputLabel>
        <InputField type="number" value={outgoCommissionAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>仮出庫数量</InputLabel>
        <InputField type="number" value={otherExpenseAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>累積在庫数量</InputLabel>
        <InputField type="number" value={reserveInsurantAmount || 0} readOnly />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>累積在庫金額</InputLabel>
        <InputField type="number" value={reserveSubscriberAmount || 0} readOnly />
      </InputWrapper>
    </InsurancePolicyInputWrapper>
  );
};

export default InsurancePolicyInput;

// Usage example
const UsageExample: React.FC = () => {
  const sampleData: InsurancePolicyInputProps = {
    saving: 00000,
    deposit: 00007010015,
    premiumAmount: 200,
    incomeAmount: 9.00,
    outgoAmount: 75000,
    outgoCommissionAmount: 0.00, 
    otherExpenseAmount: 0.00,
    reserveInsurantAmount: 15.00,
    reserveSubscriberAmount: 42356968,
  };

  return (
    <div>
      <h1>Insurance Policy Input Example</h1>
      <InsurancePolicyInput {...sampleData} />
    </div>
  );
};