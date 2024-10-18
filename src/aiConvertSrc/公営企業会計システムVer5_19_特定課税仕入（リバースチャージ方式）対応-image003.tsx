import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingEntryFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  startDate: string;
  endDate: string;
  paymentDate: string;
  taxAmount: number;
  locationCategory: '給与' | '賞与' | '年金';
  pensionCategory: '老齢' | '障害' | '遺族';
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DateInputGroup = styled(InputGroup)`
  input {
    width: 120px;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const TaxWithholdingEntryForm: React.FC<TaxWithholdingEntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data: FormData = {
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      paymentDate: form.paymentDate.value,
      taxAmount: parseFloat(form.taxAmount.value),
      locationCategory: form.locationCategory.value as FormData['locationCategory'],
      pensionCategory: form.pensionCategory.value as FormData['pensionCategory'],
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <Form onSubmit={handleSubmit}>
        <DateInputGroup>
          <Label>提出日付</Label>
          <Input type="date" name="startDate" required />
          <span>〜</span>
          <Input type="date" name="endDate" required />
        </DateInputGroup>
        <InputGroup>
          <Label>支払年月日</Label>
          <Input type="date" name="paymentDate" required />
        </InputGroup>
        <InputGroup>
          <Label>税額</Label>
          <Input type="number" name="taxAmount" required />
        </InputGroup>
        <InputGroup>
          <Label>支払区分</Label>
          <Select name="locationCategory" required>
            <option value="給与">給与</option>
            <option value="賞与">賞与</option>    
            <option value="年金">年金</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>年金区分</Label>
          <Select name="pensionCategory" required>
            <option value="老齢">老齢</option>
            <option value="障害">障害</option>
            <option value="遺族">遺族</option>  
          </Select>
        </InputGroup>
        <SubmitButton type="submit">登録</SubmitButton>
      </Form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <TaxWithholdingEntryForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;