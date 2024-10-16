import React from 'react';
import styled from '@emotion/styled';

type PredictionFormProps = {
  onSubmit: (data: { year: number; district: string; startDate: string; endDate: string }) => void;
};

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit }) => {
  const [year, setYear] = React.useState<number>(0);
  const [district, setDistrict] = React.useState<string>('');
  const [startDate, setStartDate] = React.useState<string>('');
  const [endDate, setEndDate] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ year, district, startDate, endDate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>予算配当総括表</Title>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
      </FormGroup>
      <FormGroup>
        <Label>予算編成区分</Label>
        <Select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">選択してください</option>
          <option value="当初予算">当初予算</option>
          {/* Add more options */}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>所属</Label>
        <span>総務課</span>
      </FormGroup>      
      <DateInputs>
        <FormGroup>
          <Label>所属</Label>
          <Input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </FormGroup>
        <span>〜</span>
        <FormGroup>
          <Label>所属</Label>
          <Input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </FormGroup>
      </DateInputs>
      <ButtonGroup>
        <Button type="button">クリア</Button>
        <Button type="submit" primary>終了</Button>      
      </ButtonGroup>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  width: 150px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DateInputs = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  cursor: pointer;
`;

// Usage example
const SamplePredictionForm = () => {
  const handleSubmit = (data: { year: number; district: string; startDate: string; endDate: string }) => {
    console.log('Form submitted:', data);
  };

  return <PredictionForm onSubmit={handleSubmit} />;
};

export default SamplePredictionForm;