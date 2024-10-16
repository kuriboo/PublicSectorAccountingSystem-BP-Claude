import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  year: number;
  month: number;
  day: number;
  branch: string;
  reservationType: string;
  numberOfPeople: number;
  isRoundTrip: boolean;
  hasLuggage: boolean;
  billingType: 'perPerson' | 'perGroup';
  onSubmit: (formData: ReservationFormData) => void;
};

type ReservationFormData = {
  date: string;
  reservationType: string;
  numberOfPeople: number;
  isRoundTrip: boolean;
  hasLuggage: boolean;
  billingType: 'perPerson' | 'perGroup';
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Select = styled.select`
  padding: 4px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 4px;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({
  year,
  month,
  day,
  branch,
  reservationType,
  numberOfPeople,
  isRoundTrip,
  hasLuggage,
  billingType,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: ReservationFormData = {
      date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
      reservationType,
      numberOfPeople,
      isRoundTrip,
      hasLuggage,
      billingType,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <h2>予算自動仕訳処理</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>年度</Label>
          <Select defaultValue={year}>
            <option value={year}>{year}</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>予算編成区分</Label>
          <Select defaultValue={reservationType}>
            {/* Populate options based on available reservation types */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>回数</Label>
          <Input type="number" defaultValue={numberOfPeople} />
        </FormGroup>
        <FormGroup>
          <Checkbox type="checkbox" checked={isRoundTrip} />
          <Label>予算書どおり</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox type="checkbox" checked={hasLuggage} />
          <Label>調整額を初期化する</Label>
        </FormGroup>
        <FormGroup>
          <Label>金額種別</Label>
          <Select defaultValue={billingType}>
            <option value="perPerson">見積要求額</option>
            <option value="perGroup">査定額</option>
          </Select>
        </FormGroup>
        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const handleReservationSubmit = (formData: ReservationFormData) => {
    console.log('Reservation submitted:', formData);
  };

  return (
    <div>
      <h1>Reservation System</h1>
      <ReservationForm
        year={2023}
        month={6}
        day={25}
        branch="本社"
        reservationType="予算種別を選択"
        numberOfPeople={1}
        isRoundTrip={false}
        hasLuggage={false}
        billingType="perPerson"
        onSubmit={handleReservationSubmit}
      />
    </div>
  );
};

export default App;