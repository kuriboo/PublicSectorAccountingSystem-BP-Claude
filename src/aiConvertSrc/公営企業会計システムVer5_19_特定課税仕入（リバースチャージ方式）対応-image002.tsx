import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingInputProps = {
  onSubmit: (data: {
    date: string;
    branch: string;
    section: string;
    deduction: string;
  }) => void;
};

const TaxWithholdingInput: React.FC<TaxWithholdingInputProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [branch, setBranch] = React.useState('');
  const [section, setSection] = React.useState('');
  const [deduction, setDeduction] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ date, branch, section, deduction });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>
        <Title>特定課税仕入伝票管理入力</Title>
        <SubmitButton type="submit">検索</SubmitButton>
      </FormHeader>
      
      <FormBody>
        <FormGroup>
          <Label>検索</Label>
          <DateInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>借方科目</Label>
          <Input
            type="text"
            value={deduction}
            onChange={(e) => setDeduction(e.target.value)}
            required  
          />
        </FormGroup>

        <FormGroup>
          <Label>種別</Label>
          <RadioGroup>
            <RadioInput
              type="radio"
              id="tax"
              name="type"
              value="tax"
              defaultChecked
            />
            <RadioLabel htmlFor="tax">課税</RadioLabel>

            <RadioInput type="radio" id="taxExempt" name="type" value="taxExempt" />
            <RadioLabel htmlFor="taxExempt">非課</RadioLabel>
            
            <RadioInput type="radio" id="other" name="type" value="other" />  
            <RadioLabel htmlFor="other">その他</RadioLabel>
          </RadioGroup>
        </FormGroup>
        
        <FormGroup>
          <Label>借方部門</Label>
          <Input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>  
          <Label>貸方科目</Label>
          <Input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </FormGroup>

      </FormBody>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const FormBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: {
    date: string;
    branch: string;
    section: string;
    deduction: string;
  }) => {
    console.log(data);
  };

  return (
    <div>
      <TaxWithholdingInput onSubmit={handleSubmit} />
    </div>
  );
};

export default App;