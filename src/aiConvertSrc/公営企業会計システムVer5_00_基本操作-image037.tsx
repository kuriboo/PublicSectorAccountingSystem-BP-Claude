import React from 'react';
import styled from '@emotion/styled';

type ReservationSearchProps = {
  startDate?: string;
  endDate?: string;
  reservationNumber?: string;
  guestName?: string;
  guestNameKana?: string;
  telephoneNumber?: string;
  reservations?: Reservation[];
};

type Reservation = {
  date: string;
  roomNumber: string;
  guestName: string;
  reservationNumber: string;
  status: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 150px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f0f0f0;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ReservationSearch: React.FC<ReservationSearchProps> = ({
  startDate = '',
  endDate = '',
  reservationNumber = '',
  guestName = '',
  guestNameKana = '',
  telephoneNumber = '',
  reservations = [],
}) => {
  return (
    <Container>
      <InputGroup>
        <Label>予約番号：</Label>
        <Input type="text" defaultValue={reservationNumber} />
      </InputGroup>
      <InputGroup>
        <Label>宿泊日：</Label>
        <Input type="date" defaultValue={startDate} />
        <Label>～</Label>
        <Input type="date" defaultValue={endDate} />
      </InputGroup>
      <InputGroup>
        <Label>氏名：</Label>
        <Input type="text" defaultValue={guestName} />
      </InputGroup>
      <InputGroup>
        <Label>氏名カナ：</Label>
        <Input type="text" defaultValue={guestNameKana} />
      </InputGroup>
      <InputGroup>
        <Label>電話番号：</Label>
        <Input type="tel" defaultValue={telephoneNumber} />
      </InputGroup>
      <Button>検索</Button>
      <ReservationTable>
        <thead>
          <tr>
            <TableHeader>処理日</TableHeader>
            <TableHeader>宿泊番号</TableHeader>
            <TableHeader>予約種別</TableHeader>
            <TableHeader>宿泊額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <TableData>{reservation.date}</TableData>
              <TableData>{reservation.roomNumber}</TableData>
              <TableData>{reservation.guestName}</TableData>
              <TableData>{reservation.reservationNumber}</TableData>
              <TableData>{reservation.status}</TableData>
            </tr>
          ))}
        </tbody>
      </ReservationTable>
    </Container>
  );
};

// Sample data for demonstration
const sampleReservations: Reservation[] = [
  {
    date: '29/07/19',
    roomNumber: '59 1階西',
    guestName: 'テスト',
    reservationNumber: '11,250',
    status: '',
  },
  {
    date: '29/07/19',
    roomNumber: '60 1 事',
    guestName: '2017-1-0-SIMI',
    reservationNumber: '18,684,000',
    status: '',
  },
  // Add more sample reservations...
];

const App: React.FC = () => {
  return (
    <ReservationSearch
      startDate="000000"
      endDate="9999999"
      reservations={sampleReservations}
    />
  );
};

export default App;