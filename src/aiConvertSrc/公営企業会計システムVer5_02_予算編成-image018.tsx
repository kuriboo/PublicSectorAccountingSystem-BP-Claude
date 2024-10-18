import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  forecastDivision: number;
  period: number;
  targetSerialNo: string;
  startDate: string;
  endDate: string;
  dayOfWeek: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Label = styled.label`
  min-width: 100px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Collect form data and call onSubmit with the data
    const data: ReservationData = {
      forecastDivision: 1,
      period: 2,
      targetSerialNo: '1',
      startDate: '0000000',
      endDate: '9999999',
      dayOfWeek: '日',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>予算区分:</Label>
          <Select>
            <option value="1">当初予算</option>
            {/* Add more options */}
          </Select>
        </Row>
        <Row>
          <Label>回数:</Label>
          <Input type="number" min="1" defaultValue="2" />
        </Row>
        <Row>
          <Label>確定番号:</Label>
          <Select>
            <option value="1">最終番号</option>
            {/* Add more options */}
          </Select>
        </Row>
        <Row>
          <Label>科目レベル:</Label>
          {/* Add radio buttons for 日, 節, 細節, and 明細 */}
        </Row>
        <Row>
          <Label>範囲指定:</Label>
          <Input type="text" defaultValue="0000000" />
          <span>〜</span>
          <Input type="text" defaultValue="9999999" />
        </Row>
        <Row>
          <Button type="submit">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </Row>
      </form>
    </Container>
  );
};

export default ReservationForm;

// Usage example:
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data:', data);
    // Handle reservation data submission
  };

  return (
    <div>
      <h1>Reservation Form Example</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};