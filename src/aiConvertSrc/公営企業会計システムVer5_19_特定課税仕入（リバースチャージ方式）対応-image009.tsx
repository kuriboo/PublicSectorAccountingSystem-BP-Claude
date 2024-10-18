import React from 'react';
import styled from 'styled-components';

// 特定課税仕入伝票管理入力の型定義
type SpecialTaxPurchaseEntryFormProps = {
  date: string;
  department: string;
  taxType: string;
  invoiceNumber: number;
  submissionDate: string;
  supplier: string;
  taxExcludedAmount: number;
  taxIncludedAmount: number;
  taxAmount: number;
  onSubmit: (formData: SpecialTaxPurchaseEntryFormProps) => void;
};

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
  flex-basis: 120px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const FormInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-grow: 1;
`;

const FormSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-grow: 1;
`;

const FormButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// 特定課税仕入伝票管理入力フォームコンポーネント
const SpecialTaxPurchaseEntryForm: React.FC<SpecialTaxPurchaseEntryFormProps> = ({
  date,
  department,
  taxType,
  invoiceNumber,
  submissionDate,
  supplier,
  taxExcludedAmount,
  taxIncludedAmount,
  taxAmount,
  onSubmit,
}) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      date,
      department,
      taxType,
      invoiceNumber,
      submissionDate,
      supplier,
      taxExcludedAmount,
      taxIncludedAmount,
      taxAmount,
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>伝票日付</FormLabel>
          <FormInput type="date" value={date} required />
        </FormRow>
        <FormRow>
          <FormLabel>伝票番号</FormLabel>
          <FormInput type="text" value={invoiceNumber} required />
        </FormRow>
        <FormRow>
          <FormLabel>検索</FormLabel>
          <FormInput type="text" />
        </FormRow>
        <FormRow>
          <FormLabel>課税区分</FormLabel>
          <FormSelect value={taxType} required>
            <option value="">選択してください</option>
            <option value="課税">課税</option>
            <option value="非課税">非課税</option>
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel>提出日</FormLabel>
          <FormInput type="date" value={submissionDate} required />
        </FormRow>
        <FormRow>
          <FormLabel>取引先</FormLabel>
          <FormInput type="text" value={supplier} required />
        </FormRow>
        <FormRow>
          <FormLabel>税抜金額</FormLabel>
          <FormInput type="number" value={taxExcludedAmount} required min="0" />
        </FormRow>
        <FormRow>
          <FormLabel>税込金額</FormLabel>
          <FormInput type="number" value={taxIncludedAmount} required min="0" />
        </FormRow>
        <FormRow>
          <FormLabel>消費税額</FormLabel>
          <FormInput type="number" value={taxAmount} required min="0" />
        </FormRow>
        <FormButtonRow>
          <FormButton type="button">クリア</FormButton>
          <FormButton type="button">キャンセル</FormButton>
          <FormButton type="submit">OK</FormButton>
        </FormButtonRow>
      </form>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: SpecialTaxPurchaseEntryFormProps = {
  date: '2023-03-27',
  department: '経理部',
  taxType: '課税',
  invoiceNumber: 43,
  submissionDate: '2023-03-27',
  supplier: '電子書籍/書籍税分',
  taxExcludedAmount: 80000,
  taxIncludedAmount: 80000,
  taxAmount: 0,
  onSubmit: (formData) => console.log(formData),
};

// サンプルコンポーネント
const SampleSpecialTaxPurchaseEntryForm: React.FC = () => {
  return <SpecialTaxPurchaseEntryForm {...sampleData} />;
};

export default SampleSpecialTaxPurchaseEntryForm;