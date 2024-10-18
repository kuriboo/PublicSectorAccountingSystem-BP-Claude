import React, { useState } from 'react';
import styled from '@emotion/styled';

// 型定義
interface ReservationFormProps {
  onSubmit: (data: { date: Date; isAllDay: boolean }) => void;
}

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [isAllDay, setIsAllDay] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, isAllDay });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date">予約日:</Label>
          <Input
            type="date"
            id="date"
            value={date.toISOString().split('T')[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              type="radio"
              checked={isAllDay}
              onChange={() => setIsAllDay(true)}
            />
            終日
          </Label>
          <Label>
            <Input
              type="radio"
              checked={!isAllDay}
              onChange={() => setIsAllDay(false)}
            />
            実払確定済のみ
          </Label>
        </FormGroup>
        <Button type="submit">検索</Button>
      </form>
    </FormContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const handleReservationSubmit = (data: {
    date: Date;
    isAllDay: boolean;
  }) => {
    console.log('予約データ:', data);
  };

  return (
    <div>
      <h1>予約検索フォーム</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;