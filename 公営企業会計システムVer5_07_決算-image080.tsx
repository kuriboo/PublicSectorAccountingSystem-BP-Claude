import React from 'react';
import styled from '@emotion/styled';

type ReceiptFormProps = {
  onSubmit: (data: ReceiptData) => void;
};

type ReceiptData = {
  division: string;
  year: number;
  receiptNumber: string;
  subject: string;
  paymentDate: Date;
  expenseItems: string;
  division2: string;
  beforeTax: number;
  taxRate: number;
  tax: number;
  total: number;
  payer: string;
  payerCode: string;
  note: string;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FormLabel = styled.label`
  flex: 1;
  text-align: right;

  @media (max-width: 767px) {
    text-align: left;
  }
`;

const FormInput = styled.input`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReceiptForm: React.FC<ReceiptFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Gather form data and call onSubmit with the data
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>区分:</FormLabel>
          <FormInput type="text" required />
        </FormRow>
        <FormRow>
          <FormLabel>年度:</FormLabel>
          <FormInput type="number" required />
        </FormRow>
        <FormRow>
          <FormLabel>収入区分:</FormLabel>
          <FormInput type="text" required />
        </FormRow>
        <FormRow>
          <FormLabel>設定無し:</FormLabel>
          <FormInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>伝票番号:</FormLabel>
          <FormInput type="text" pattern="\d{6}" title="6桁の数字を入力してください" />
        </FormRow>
        <FormRow>
          <FormLabel>摘要検索:</FormLabel>
          <FormTextarea required></FormTextarea>
        </FormRow>
        <FormRow>
          <FormLabel>予算科目:</FormLabel>
          <FormInput type="text" />
          <FormInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>予算科目:</FormLabel>
          <FormInput type="text" />
          <FormInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>税込金額:</FormLabel>
          <FormInput type="number" required />
        </FormRow>
        <FormRow>
          <FormLabel>伝票区分:</FormLabel>
          <FormInput type="text" required />
        </FormRow>
        <FormButton type="submit">表示</FormButton>
      </form>
    </FormContainer>
  );
};

export default ReceiptForm;

// Sample usage
const SampleReceiptForm = () => {
  const handleSubmit = (data: ReceiptData) => {
    console.log('Submitted data:', data);
  };

  return <ReceiptForm onSubmit={handleSubmit} />;
};