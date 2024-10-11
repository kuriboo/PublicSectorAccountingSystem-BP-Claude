import React from 'react';
import styled from '@emotion/styled';

type InsuranceFormProps = {
  productCode?: string;
  premiumAmount?: number;
  currency?: string;
  premiumPeriodA?: string;
  dipA1?: number;
  age?: number;
  gender?: string;
  premiumMode?: number;
  sumAssured?: number;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const InsuranceForm: React.FC<InsuranceFormProps> = ({
  productCode = '',
  premiumAmount = 0,
  currency = '',
  premiumPeriodA = '',
  dipA1 = 0,
  age = 0,
  gender = '',
  premiumMode = 0,
  sumAssured = 0,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <FormContainer>
      <Title>移転明細画面（売入先出）</Title>
      <FormRow>
        <FormLabel>保管場所</FormLabel>
        <FormInput value={productCode} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>品番</FormLabel>
        <FormInput value={premiumAmount.toFixed(8)} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>品名</FormLabel>
        <FormInput value={currency} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>規格</FormLabel>
        <FormInput value={premiumPeriodA} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>φ75</FormLabel>
        <FormInput value={dipA1} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>数量</FormLabel>
        <FormInput value={age.toFixed(2)} readOnly />
        <FormLabel>単位</FormLabel>
        <FormInput value={gender} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>仮出庫数</FormLabel>
        <FormInput value={premiumMode.toFixed(2)} readOnly />
      </FormRow>
      <FormRow>
        <FormLabel>現在庫数</FormLabel>
        <FormInput value={sumAssured.toFixed(2)} readOnly />
      </FormRow>
      <FormButtonContainer>
        <FormButton onClick={onOk}>OK</FormButton>
        <FormButton onClick={onClear}>クリア</FormButton>
        <FormButton onClick={onCancel}>キャンセル</FormButton>
      </FormButtonContainer>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  font-family: sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormLabel = styled.label`
  width: 120px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const FormInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const FormButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none; 
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const InsuranceFormExample = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <InsuranceForm
      productCode="00000"
      premiumAmount={999999.99}
      currency="JPY"
      premiumPeriodA="DIP(A1)精算管"
      dipA1={75}
      age={1}
      gender="本" 
      premiumMode={10}
      sumAssured={130}
      onOk={handleOk}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default InsuranceForm;