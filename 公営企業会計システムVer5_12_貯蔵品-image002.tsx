import React from 'react';
import styled from 'styled-components';

type BusinessPartnerEntryFormProps = {
  companyCode?: string;
  companyName?: string;
  departmentCode?: string;
  departmentName?: string;
  postalCode?: string;
  address?: string;
  phone?: string;
  onSubmit: (data: Record<string, string>) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  text-align: right;
  padding-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  grid-column: 2;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessPartnerEntryForm: React.FC<BusinessPartnerEntryFormProps> = ({
  companyCode = '',
  companyName = '',
  departmentCode = '',
  departmentName = '',
  postalCode = '',
  address = '',
  phone = '',
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    onSubmit(data);
  };

  return (
    <Container>
      <Title>未発注入庫入力(先入先出)</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="companyCode">会社コード:</Label>
        <Input type="text" id="companyCode" name="companyCode" defaultValue={companyCode} />

        <Label htmlFor="companyName">会社名:</Label>
        <Input type="text" id="companyName" name="companyName" defaultValue={companyName} />

        <Label htmlFor="departmentCode">部署コード:</Label>
        <Input type="text" id="departmentCode" name="departmentCode" defaultValue={departmentCode} />

        <Label htmlFor="departmentName">部署名:</Label>
        <Input type="text" id="departmentName" name="departmentName" defaultValue={departmentName} />

        <Label htmlFor="postalCode">郵便番号:</Label>
        <Input type="text" id="postalCode" name="postalCode" defaultValue={postalCode} />

        <Label htmlFor="address">住所:</Label>
        <Input type="text" id="address" name="address" defaultValue={address} />

        <Label htmlFor="phone">電話番号:</Label>
        <Input type="text" id="phone" name="phone" defaultValue={phone} />

        <SubmitButton type="submit">登録</SubmitButton>
      </Form>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('Submitted data:', data);
  };

  return (
    <BusinessPartnerEntryForm
      companyCode="9999999"
      companyName="予算編成昆布計画"
      departmentCode="OH001"
      departmentName="[会計]財務部入庫仕訳"
      postalCode="333-3333"
      address="埼玉県さいたま市"
      phone="048-123-4567"
      onSubmit={handleSubmit}
    />
  );
};

export default App;