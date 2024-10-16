import React from 'react';
import styled from 'styled-components';

interface EntryFormProps {
  onSubmit: (data: EntryData) => void;
}

interface EntryData {
  date?: string;
  destination?: string;
  purpose?: string;
  departureDate?: string;
  returnDate?: string;
  days?: number;
  transportation?: string;
  fare?: number;
  dailyAllowance?: number;
  accommodation?: number;
  miscExpense?: number;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<EntryData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date">日付</Label>
          <Input type="date" id="date" name="date" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="destination">行先</Label>
          <Input type="text" id="destination" name="destination" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="purpose">用務</Label>
          <Input type="text" id="purpose" name="purpose" onChange={handleChange} />
        </FormGroup>
        {/* ... other form fields ... */}
        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default EntryForm;

// Usage example:
const App: React.FC = () => {
  const handleSubmit = (data: EntryData) => {
    console.log('Submitted data:', data);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div>
      <h1>出張経費精算システム</h1>
      <EntryForm onSubmit={handleSubmit} />
    </div>
  );
};