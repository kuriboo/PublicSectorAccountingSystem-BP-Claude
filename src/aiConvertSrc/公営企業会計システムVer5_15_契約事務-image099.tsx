import React from 'react';
import styled from '@emotion/styled';

interface BusinessExpenseEntryFormProps {
  companyCode?: string;
  departmentCode?: string;
  accountTitle?: string;
  businessTrip?: number;
  accommodation?: number;
  amount?: number;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const BusinessExpenseEntryForm: React.FC<BusinessExpenseEntryFormProps> = ({
  companyCode = '',
  departmentCode = '',
  accountTitle = '',
  businessTrip = 0,
  accommodation = 0,
  amount = 0,
}) => {
  return (
    <FormWrapper>
      <div>
        <FormLabel>業者</FormLabel>
        <FormInput type="text" defaultValue={companyCode} />
      </div>
      <div>
        <FormLabel>業種</FormLabel>
        <FormInput type="text" defaultValue={departmentCode} />
      </div>
      <div>
        <FormLabel>契約区分</FormLabel>
        <FormSelect defaultValue={accountTitle}>
          <option value="0103-指名競争入札">0103-指名競争入札</option>
          {/* Add more options as needed */}
        </FormSelect>
      </div>
      <div>
        <FormLabel>指名回数</FormLabel>
        <FormInput type="number" defaultValue={businessTrip} />
      </div>
      <div>
        <FormLabel>落札回数</FormLabel>
        <FormInput type="number" defaultValue={accommodation} />
      </div>
      <div>
        <FormLabel>金額</FormLabel>
        <FormInput type="number" defaultValue={amount} />
      </div>
    </FormWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Business Expense Entry Form</h1>
      <BusinessExpenseEntryForm
        companyCode="0000001111"
        departmentCode="001"
        accountTitle="0103-指名競争入札"
        businessTrip={3}
        accommodation={1}
        amount={123456}
      />
    </div>
  );
};

export default App;