import React from 'react';
import styled from '@emotion/styled';

type AdjustmentFormProps = {
  onSubmit: (startDate: string, endDate: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <Container>
      <Title>調整指定</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="startDate">平成29年02月21日 ～</Label>
          <Input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="endDate">平成29年03月31日</Label>
          <Input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </FormGroup>
        <ButtonGroup>
          <SubmitButton type="submit">OK</SubmitButton>
          <CancelButton type="button">クリア</CancelButton>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (startDate: string, endDate: string) => {
    console.log('Submitted:', startDate, endDate);
  };

  return (
    <div>
      <h1>Adjustment Form Example</h1>
      <AdjustmentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;