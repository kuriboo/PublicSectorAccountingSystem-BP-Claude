import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  numPeople: number;
  name: string;
  phoneNumber: string;
  seatPreference: 'all' | 'non-smoking' | 'smoking';
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  width: 100px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ReservationData = {
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      numPeople: parseInt(formData.get('numPeople') as string, 10),
      name: formData.get('name') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      seatPreference: formData.get('seatPreference') as ReservationData['seatPreference'],
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>予約日付</Label>
          <Input type="date" name="date" required />
        </FormGroup>
        <FormGroup>
          <Label>時点</Label>
          <Input type="time" name="time" required />
        </FormGroup>
        <FormGroup>
          <Label>人数</Label>
          <Input type="number" name="numPeople" min={1} required />
        </FormGroup>
        <FormGroup>
          <Label>お名前</Label>
          <Input type="text" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label>電話番号</Label>
          <Input type="tel" name="phoneNumber" required />
        </FormGroup>
        <FormGroup>
          <Label>席指定</Label>
          <RadioGroup>
            <label>
              <input type="radio" name="seatPreference" value="all" defaultChecked /> 全体
            </label>
            <label>
              <input type="radio" name="seatPreference" value="non-smoking" /> 禁煙
            </label>
            <label>
              <input type="radio" name="seatPreference" value="smoking" /> 喫煙
            </label>
          </RadioGroup>
        </FormGroup>
        <SubmitButton type="submit">予約</SubmitButton>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    // Handle reservation submission logic here
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;