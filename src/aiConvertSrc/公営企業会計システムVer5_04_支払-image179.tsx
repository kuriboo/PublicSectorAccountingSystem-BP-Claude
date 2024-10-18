Here's the Next.js + TypeScript component based on the provided image:

import React from 'react';
import styled from 'styled-components';

// Define the props interface for the component
interface PaymentFormProps {
  onSubmit: (data: FormData) => void;
}

// Define the form data interface
interface FormData {
  level: string;
  startDate: string;
  endDate: string;
  amount: number;
  taxAmount: number;
  collectType: string;
  comment: string;
  printReceipt: boolean;
  printWorkOrder: boolean;
  printEstimate: boolean;
}

// Define styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Define the PaymentForm component
const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    level: '',
    startDate: '',
    endDate: '',
    amount: 0,
    taxAmount: 0,
    collectType: '',
    comment: '',
    printReceipt: false,
    printWorkOrder: false,
    printEstimate: false,
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label>出力レベル</Label>
        <Select name="level" value={formData.level} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="所属部">所属部</option>
          <option value="所属細目">所属細目</option>
          <option value="所属明細">所属明細</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="令和○○年○○月"
        />
        <span>～</span>
        <Input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="令和○○年○○月"
        />
      </FormGroup>
      <FormGroup>
        <Label>予算科目</Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0000000"
        />
        <span>～</span>
        <Input
          type="number"
          name="taxAmount"
          value={formData.taxAmount}
          onChange={handleChange}
          placeholder="9999999999"
        />
      </FormGroup>
      <FormGroup>
        <Label>集計対象</Label>
        <Select name="collectType" value={formData.collectType} onChange={handleChange}>
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          name="printReceipt"
          checked={formData.printReceipt}
          onChange={handleChange}
        />
        <Label>前月繰越行のみで印刷する</Label>
      </FormGroup>
      <FormGroup>
        <Checkbox
          name="printWorkOrder"
          checked={formData.printWorkOrder}
          onChange={handleChange}
        />
        <Label>指定された予算を印刷する</Label>
      </FormGroup>
      <FormGroup>
        <Checkbox
          name="printEstimate"
          checked={formData.printEstimate}
          onChange={handleChange}
        />
        <Label>指定された予備名称を印刷する</Label>
      </FormGroup>
      <Button type="button" onClick={handleSubmit}>
        集計
      </Button>
    </FormContainer>
  );
};

// Example usage of the PaymentForm component
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <PaymentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;