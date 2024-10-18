import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  startDate: string;
  endDate: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AttendancePeriodForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: FormData = {
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>節期指定</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>積算日</Label>
          <DateInput type="date" name="startDate" defaultValue="2029-06-16" />
        </FormGroup>
        <FormGroup>
          <Label>収納日</Label>
          <DateInput type="date" name="endDate" defaultValue="2029-06-16" />
        </FormGroup>
        <ButtonGroup>
          <Button type="submit">検索</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Attendance Period Form</h1>
      <AttendancePeriodForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;