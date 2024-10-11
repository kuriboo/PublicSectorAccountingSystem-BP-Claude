import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

type Reservation = {
  date: Date;
  adultCount: number;
  childCount: number;
  destination: string;
  name: string;
  phone: string;
};

type Props = {
  reservation: Reservation;
  onClose: () => void;
};

const ReservationForm: React.FC<Props> = ({ reservation, onClose }) => {
  // 現在の年月日を取得
  const currentDate = format(new Date(), 'yyyy/MM/dd');

  return (
    <Container>
      <Title>予約科目マスタ</Title>
      <DateInfo>{currentDate}の予約</DateInfo>
      
      <Form>
        <Row>
          <Label>年度</Label>
          <span>{format(reservation.date, 'yyyy')}年度</span>
        </Row>
        
        <Row>
          <Field>
            <Label>大人</Label>
            <span>{reservation.adultCount}名</span>
          </Field>
          <Field>
            <Label>子供</Label>
            <span>{reservation.childCount}名</span>
          </Field>
        </Row>

        <Row>
          <Label>行き先</Label>
          <span>{reservation.destination}</span>
        </Row>

        <Row>
          <Field>
            <Label>代表者</Label>
            <span>{reservation.name}</span>
          </Field>
          <Field>
            <Label>電話番号</Label> 
            <span>{reservation.phone}</span>
          </Field>
        </Row>
      </Form>

      <Footer>
        <Button onClick={onClose}>閉じる</Button>
      </Footer>
    </Container>
  );
};

// Usage example
const SampleReservation: Reservation = {
  date: new Date(),
  adultCount: 2,
  childCount: 1,
  destination: '東京ディズニーランド', 
  name: '山田太郎',
  phone: '090-1234-5678',
};

const App: React.FC = () => {
  return (
    <ReservationForm
      reservation={SampleReservation}
      onClose={() => console.log('Close button clicked')}
    />
  );  
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const DateInfo = styled.p`
  margin: 0 0 16px;
`;

const Form = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Field = styled.div`
  flex: 1;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Footer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #1e88e5;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

export default ReservationForm;