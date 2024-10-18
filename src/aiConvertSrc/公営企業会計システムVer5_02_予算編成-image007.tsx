import React from 'react';
import styled from '@emotion/styled';

interface ReservationData {
  date: string;
  startTime: string;
  endTime: string;
  usage: string;
  usageDetail: string;
}

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [usage, setUsage] = React.useState('');
  const [usageDetail, setUsageDetail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, startTime, endTime, usage, usageDetail });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>予約科目</Label>
          <Select value={usage} onChange={(e) => setUsage(e.target.value)} required>
            <option value="">選択してください</option>
            <option value="会議">会議</option>
            <option value="打ち合わせ">打ち合わせ</option>
          </Select>
        </Row>
        <Row>
          <Label>日付</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Row>
        <Row>
          <Label>開始</Label>
          <Input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <Label>終了</Label>
          <Input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </Row>
        <Row>
          <Label>事業</Label>
          <Input
            type="text"
            value={usageDetail}
            onChange={(e) => setUsageDetail(e.target.value)}
            required
          />
        </Row>
        <Button type="submit">予約</Button>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data:', data);
    // Perform further actions with the reservation data
  };

  return (
    <div>
      <h1>予約フォーム</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;