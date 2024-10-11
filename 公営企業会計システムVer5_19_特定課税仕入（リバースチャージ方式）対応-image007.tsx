import React from 'react';
import styled from '@emotion/styled';

// Define types for component props
type TaxOfficeSearchProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  name: string;
  postalCode: string;
  address: string;
};

// Define styles using Emotion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
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

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 80px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Define the component
const TaxOfficeSearch: React.FC<TaxOfficeSearchProps> = ({ onSubmit }) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      name: e.currentTarget.name.value,
      postalCode: e.currentTarget.postalCode.value,
      address: e.currentTarget.address.value,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <Form onSubmit={handleSubmit}>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" name="searchType" value="name" defaultChecked />
            登録
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="searchType" value="postalCode" />
            訂正
          </RadioLabel>
          <RadioLabel>
            <input type="radio" name="searchType" value="address" />
            削除
          </RadioLabel>
        </RadioGroup>
        <InputGroup>
          <Label>伝票日付</Label>
          <Input type="date" name="date" />
        </InputGroup>
        <InputGroup>
          <Label>伝票番号</Label>
          <Input type="text" name="invoiceNumber" />
        </InputGroup>
        <InputGroup>
          <Label>借方科目</Label>
          <Input type="text" name="debitAccount" />
        </InputGroup>
        <InputGroup>
          <Label>貸方科目</Label>
          <Input type="text" name="creditAccount" />
        </InputGroup>
        <SubmitButton type="submit">行削除</SubmitButton>
      </Form>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    // Perform search or other actions with the form data
  };

  return (
    <div>
      <TaxOfficeSearch onSubmit={handleSubmit} />
    </div>
  );
};

export default App;