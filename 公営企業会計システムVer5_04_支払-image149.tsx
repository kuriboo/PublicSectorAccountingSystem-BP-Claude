import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  id1: string;
  id2: string;
  paymentStartDate: string;
  paymentEndDate: string;
  paymentCycle: string;
}

interface Props {
  formData: FormData;
  onSubmit: (data: FormData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PublicationForm: React.FC<Props> = ({ formData, onSubmit }) => {
  const [data, setData] = React.useState<FormData>(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>ID1:</Label>
          <Input type="text" name="id1" value={data.id1} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>ID2:</Label>
          <Input type="text" name="id2" value={data.id2} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>支払年月日:</Label>
          <Input type="date" name="paymentStartDate" value={data.paymentStartDate} onChange={handleChange} required />
          <span>〜</span>
          <Input type="date" name="paymentEndDate" value={data.paymentEndDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>支払対象:</Label>
          <Select name="paymentCycle" value={data.paymentCycle} onChange={handleChange}>
            <option value="">選択してください</option>
            <option value="monthly">毎月</option>
            <option value="quarterly">四半期</option>
            <option value="yearly">年次</option>
          </Select>
        </FormGroup>
        <ButtonContainer>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
          <Button type="submit">OK</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default PublicationForm;

// Usage example:
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const exampleData: FormData = {
    id1: '11111111111',
    id2: '99999999999',
    paymentStartDate: '2021-04-01',
    paymentEndDate: '2021-06-30',
    paymentCycle: 'monthly',
  };

  return <PublicationForm formData={exampleData} onSubmit={handleSubmit} />;
};