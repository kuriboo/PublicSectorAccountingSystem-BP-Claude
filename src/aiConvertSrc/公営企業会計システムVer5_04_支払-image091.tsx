import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

interface FormData {
  companyName: string;
  departmentName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  comment: string;
  paymentAmount: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompanyRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    departmentName: '',
    postalCode: '',
    address: '',
    phoneNumber: '',
    faxNumber: '',
    comment: '',
    paymentAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log(formData);
  };

  return (
    <Container>
      <Title>会社情報入力</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="companyName">会社名</Label>
        <Input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />

        <Label htmlFor="departmentName">部署名</Label>
        <Input type="text" id="departmentName" name="departmentName" value={formData.departmentName} onChange={handleChange} />

        <Label htmlFor="postalCode">郵便番号</Label>
        <Input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />

        <Label htmlFor="address">住所</Label>
        <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

        <Label htmlFor="phoneNumber">電話番号</Label>
        <Input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <Label htmlFor="faxNumber">FAX番号</Label>
        <Input type="tel" id="faxNumber" name="faxNumber" value={formData.faxNumber} onChange={handleChange} />

        <Label htmlFor="comment">摘要</Label>
        <TextArea id="comment" name="comment" value={formData.comment} onChange={handleChange} />

        <Label htmlFor="paymentAmount">資金前渡額</Label>
        <Input type="number" id="paymentAmount" name="paymentAmount" value={formData.paymentAmount} onChange={handleChange} />

        <ButtonContainer>
          <Button type="submit">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};



// Usage example:
const App: React.FC = () => {
  return (
    <div>
      <h1>Company Registration</h1>
      <CompanyRegistrationForm />
    </div>
  );
};

export default App;