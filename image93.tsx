import React, { useState } from 'react';
import styled from '@emotion/styled';

interface FormData {
  internalNumber: string;
  csvFile: File | null;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CompanyInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    internalNumber: '',
    csvFile: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      csvFile: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Title>業者情報取込準備処理</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          内容
          <Input
            type="text"
            name="internalNumber"
            value={formData.internalNumber}
            onChange={handleInputChange}
            required
          />
        </Label>
        <Label>
          CSVファイル
          <Input type="file" accept=".csv" onChange={handleFileChange} required />
        </Label>
        <SubmitButton type="submit">終了</SubmitButton>
      </Form>
    </Container>
  );
};

export default CompanyInfoForm;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <CompanyInfoForm />
    </div>
  );
};