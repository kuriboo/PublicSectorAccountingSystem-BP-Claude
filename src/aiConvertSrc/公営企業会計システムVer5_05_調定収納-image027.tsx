// ReceiptForm.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Types
type FormData = {
  receiptNo: string;
  date: string;
  debitDate: string;
  creditDate: string;
  amount: string;
  taxAmount: string;
  totalAmount: string;
  payee: string;
  memo: string;
  accountingSubject: string;
};

type ReceiptFormProps = {
  onSubmit: (data: FormData) => void;
};

// Styled components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;

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
    align-items: flex-start;
  }
`;

const FormLabel = styled.label`
  flex: 1;
  font-weight: bold;
`;

const FormInput = styled.input`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// ReceiptForm component
const ReceiptForm: React.FC<ReceiptFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    receiptNo: '',
    date: '',
    debitDate: '',
    creditDate: '',
    amount: '',
    taxAmount: '',
    totalAmount: '',
    payee: '',
    memo: '',
    accountingSubject: '受付未',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form data after submission
    setFormData({
      receiptNo: '',
      date: '',
      debitDate: '',
      creditDate: '',
      amount: '',
      taxAmount: '',
      totalAmount: '',
      payee: '',
      memo: '',
      accountingSubject: '受付未',
    });
  };

  return (
    <FormWrapper>
      <FormRow>
        <FormLabel htmlFor="receiptNo">領収書No</FormLabel>
        <FormInput
          type="text"
          id="receiptNo"
          name="receiptNo"
          value={formData.receiptNo}
          onChange={handleChange}
          required
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="date">日付</FormLabel>
        <FormInput type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="debitDate">振替日付</FormLabel>
        <FormInput
          type="date"
          id="debitDate"
          name="debitDate"
          value={formData.debitDate}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="creditDate">振込日付</FormLabel>
        <FormInput
          type="date"
          id="creditDate"
          name="creditDate"
          value={formData.creditDate}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="amount">金額</FormLabel>
        <FormInput
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="taxAmount">税額</FormLabel>
        <FormInput
          type="number"
          id="taxAmount"
          name="taxAmount"
          value={formData.taxAmount}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="totalAmount">合計金額</FormLabel>
        <FormInput
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          required
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="payee">振込先</FormLabel>
        <FormInput type="text" id="payee" name="payee" value={formData.payee} onChange={handleChange} required />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="memo">摘要</FormLabel>
        <FormInput type="text" id="memo" name="memo" value={formData.memo} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="accountingSubject">処理区分</FormLabel>
        <FormSelect
          id="accountingSubject"
          name="accountingSubject"
          value={formData.accountingSubject}
          onChange={handleChange}
          required
        >
          <option value="受付未">受付未</option>
          <option value="受付済">受付済</option>
          <option value="修正済">修正済</option>
          <option value="訂正">訂正</option>
        </FormSelect>
      </FormRow>
      <FormButton type="submit" onClick={handleSubmit}>
        登録
      </FormButton>
    </FormWrapper>
  );
};



// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>Receipt Form</h1>
      <ReceiptForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;