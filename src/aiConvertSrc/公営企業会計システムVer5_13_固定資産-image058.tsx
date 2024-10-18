import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface ReservationFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  date: string;
  time: string;
  numberOfPeople: number;
  seatingPreference: string;
  tablePreference: string;
  partyComposition: string;
  reservationName: string;
  reservationNumber: string;
}

// Define styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define the ReservationForm component
const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      date: form.date.value,
      time: form.time.value,
      numberOfPeople: parseInt(form.numberOfPeople.value, 10),
      seatingPreference: form.seatingPreference.value,
      tablePreference: form.tablePreference.value,
      partyComposition: form.partyComposition.value,
      reservationName: form.reservationName.value,
      reservationNumber: form.reservationNumber.value,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="date">予約年月日</Label>
      <Input type="date" id="date" name="date" required />

      <Label htmlFor="time">予約開始年度</Label>
      <Input type="time" id="time" name="time" required />

      <Label htmlFor="numberOfPeople">予約年数</Label>
      <Input type="number" id="numberOfPeople" name="numberOfPeople" min="1" required />

      <Label htmlFor="seatingPreference">登録区分</Label>
      <Select id="seatingPreference" name="seatingPreference" required>
        <option value="">選択してください</option>
        <option value="location1">抽出分のみ</option>
        <option value="location2">予測分のみ</option>
        <option value="location3">すべて</option>
      </Select>

      <Label htmlFor="tablePreference">作表区分</Label>
      <Select id="tablePreference" name="tablePreference" required>
        <option value="">選択してください</option>
        <option value="table1">節</option>
        <option value="table2">細節</option>
        <option value="table3">明細</option>
      </Select>

      <Label htmlFor="partyComposition">書式区分</Label>
      <Select id="partyComposition" name="partyComposition" required>
        <option value="">選択してください</option>
        <option value="composition1">有形</option>
        <option value="composition2">無形</option>
      </Select>

      <Label htmlFor="reservationName">範囲指定</Label>
      <div>
        <Select id="reservationCode" name="reservationCode">
          <option value="00">予測用</option>
        </Select>
        〜
        <Select id="reservationNumber" name="reservationNumber">
          <option value="99">予測用</option>
        </Select>
      </div>

      <Button type="submit">絞り込み</Button>
    </Form>
  );
};

// Example usage
const ExampleReservationForm: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
    // Perform submission logic here
  };

  return (
    <div>
      <h2>会計別予測固定資産明細表作成</h2>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleReservationForm;