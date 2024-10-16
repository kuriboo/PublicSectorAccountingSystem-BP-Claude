import React from 'react';
import styled from 'styled-components';

// Props type definition for the EnterForm component
type EnterFormProps = {
  formData: {
    storeName: string;
    storeCode: string;
    fiscalYear: string;
    fiscalMonth: string;
    fiscalPeriod: string;
    periodStart: string;
    periodEnd: string;
    totalDays: number;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: () => void;
  onCancel: () => void;
};

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// EnterForm component
const EnterForm: React.FC<EnterFormProps> = ({
  formData,
  onInputChange,
  onRegister,
  onCancel,
}) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>店舗名称:</Label>
        <Input type="text" name="storeName" value={formData.storeName} onChange={onInputChange} />
      </FormGroup>
      <FormGroup>
        <Label>店舗コード:</Label>
        <Input type="text" name="storeCode" value={formData.storeCode} onChange={onInputChange} />
      </FormGroup>
      {/* Other form fields */}
      <FormGroup>
        <Label>期間:</Label>
        <Input type="text" name="periodStart" value={formData.periodStart} onChange={onInputChange} />
        <span>～</span>
        <Input type="text" name="periodEnd" value={formData.periodEnd} onChange={onInputChange} />
        <span>合計数:</span>
        <Input type="number" name="totalDays" value={formData.totalDays} readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onRegister}>登録</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </FormContainer>
  );
};

// Sample data for the EnterForm component
const sampleData = {
  storeName: '水道薬品',
  storeCode: '42980007',
  fiscalYear: '平成29年',
  fiscalMonth: '09月',
  fiscalPeriod: '05日',
  periodStart: '平成29年09月06日',
  periodEnd: '平成29年09月12日',
  totalDays: 0.00,
};

// Example usage of the EnterForm component
const EnterFormExample: React.FC = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle input change
  };

  const handleRegister = () => {
    // Handle register button click
  };

  const handleCancel = () => {
    // Handle cancel button click
  };

  return (
    <EnterForm
      formData={sampleData}
      onInputChange={handleInputChange}
      onRegister={handleRegister}
      onCancel={handleCancel}
    />
  );
};

export default EnterFormExample;