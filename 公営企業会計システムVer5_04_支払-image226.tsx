import React from 'react';
import styled from '@emotion/styled';

type BankInfoFormProps = {
  name: string;
  branch: string;
  accountNumber: string;
  accountType: string;
  faxNumber: string;
  onSubmit: (data: BankInfoFormData) => void;
};

type BankInfoFormData = {
  name: string;
  branch: string;
  accountNumber: string;
  accountType: string;
  faxNumber: string;
  printPassbook: boolean;
  registerForNationalTax: boolean;
  bankCode: string;
  preNotice: string;
  fpbCode: string;
  supplementCode: string;
  nameKana: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
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

const BankInfoForm: React.FC<BankInfoFormProps> = ({
  name,
  branch,
  accountNumber,
  accountType,
  faxNumber,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: BankInfoFormData = {
      name,
      branch,
      accountNumber,
      accountType,
      faxNumber,
      printPassbook: false,
      registerForNationalTax: false,
      bankCode: '',
      preNotice: '',
      fpbCode: '',
      supplementCode: '',
      nameKana: '',
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">相手先情報</Label>
          <Input type="text" id="name" value={name} readOnly />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="branch">略名</Label>
          <Input type="text" id="branch" value={branch} readOnly />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="accountNumber">郵便番号</Label>
          <Input type="text" id="accountNumber" value={accountNumber} readOnly />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="accountType">電話番号</Label>
          <Input type="text" id="accountType" value={accountType} readOnly />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="faxNumber">FAX番号</Label>
          <Input type="text" id="faxNumber" value={faxNumber} readOnly />
        </FormGroup>
        <Button type="submit">銀行</Button>
        <Button type="submit">支店</Button>
        {/* Add remaining form fields and submit button */}
      </form>
    </Container>
  );
};

// Example usage of the BankInfoForm component
const App: React.FC = () => {
  const handleSubmit = (data: BankInfoFormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <BankInfoForm
      name="John Doe"
      branch="Main Branch"
      accountNumber="1234567890"
      accountType="Savings"
      faxNumber="123-456-7890"
      onSubmit={handleSubmit}
    />
  );
};

export default App;