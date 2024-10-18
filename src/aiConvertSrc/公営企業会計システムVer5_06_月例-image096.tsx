import React from 'react';
import styled from 'styled-components';

// Define types for component props
type CashFlowFormProps = {
  onSubmit: (data: CashFlowFormData) => void;
};

type CashFlowFormData = {
  date: string;
  segment: string;
  paymentMethod: string;
  accountingItem: string;
  size: string;
  amount: number;
};

// Define styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define main component
const CashFlowForm: React.FC<CashFlowFormProps> = ({ onSubmit }) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: CashFlowFormData = {
      date: formData.get('date') as string,
      segment: formData.get('segment') as string,
      paymentMethod: formData.get('paymentMethod') as string,
      accountingItem: formData.get('accountingItem') as string,
      size: formData.get('size') as string,
      amount: Number(formData.get('amount')),
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldSet>
        <Legend>範囲指定</Legend>
        <Label>
          作業年月
          <Input type="month" name="date" defaultValue="2022-10" required />
        </Label>
        <Label>
          セグメント
          <Select name="segment" required>
            <option value="">選択してください</option>
            <option value="関接法">関接法</option>
            <option value="直接法">直接法</option>
          </Select>
        </Label>
        <Label>
          金額単位選択
          <Input type="radio" name="accountingItem" value="円単位" defaultChecked /> 円単位
          <Input type="radio" name="accountingItem" value="千円単位" /> 千円単位
        </Label>
      </FieldSet>
      <FieldSet>
        <Legend>書式</Legend>
        <Label>
          出力形式
          <Input type="radio" name="paymentMethod" value="単年度キャッシュ・フロー" defaultChecked /> 単年度キャッシュ・フロー
          <Input type="radio" name="paymentMethod" value="比較キャッシュ・フロー" /> 比較キャッシュ・フロー
        </Label>
        <Label>
          サイズ
          <Input type="radio" name="size" value="A4_横" defaultChecked /> A4 横
          <Input type="radio" name="size" value="A4_縦" /> A4 縦
        </Label>
        <Label>
          頁印字
          <Input type="radio" name="pageNumber" value="する" defaultChecked /> する
          <Input type="radio" name="pageNumber" value="しない" /> しない
        </Label>
        <Label>
          閾値円
          <Input type="number" name="amount" min="1" defaultValue="1" required />
        </Label>
      </FieldSet>
      <Button type="submit">OK</Button>
    </Form>
  );
};

export default CashFlowForm;

// Sample usage
const MyPage: React.FC = () => {
  const handleSubmit = (data: CashFlowFormData) => {
    console.log(data);
    // Implement cash flow report generation logic here
  };

  return (
    <div>
      <h1>キャッシュ・フロー計算書</h1>
      <CashFlowForm onSubmit={handleSubmit} />
    </div>
  );
};