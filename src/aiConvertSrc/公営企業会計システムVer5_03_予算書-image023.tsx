import React from 'react';
import styled from '@emotion/styled';

interface BookingFormProps {
  title: string;
  reservations: string[];
  onSubmit: (selectedReservation: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ReservationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ReservationItem = styled.li`
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BookingForm: React.FC<BookingFormProps> = ({ title, reservations, onSubmit }) => {
  const [selectedReservation, setSelectedReservation] = React.useState('');

  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReservation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedReservation);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <ReservationList>
          {reservations.map((reservation, index) => (
            <ReservationItem key={index}>
              <label>
                <input
                  type="radio"
                  value={reservation}
                  checked={selectedReservation === reservation}
                  onChange={handleReservationChange}
                />
                {reservation}
              </label>
            </ReservationItem>
          ))}
        </ReservationList>
        <SubmitButton type="submit">予約する</SubmitButton>
      </form>
    </Container>
  );
};

// 使用例
const SampleBookingForm = () => {
  const handleSubmit = (selectedReservation: string) => {
    console.log(`選択された予約: ${selectedReservation}`);
    // 予約処理を実装する
  };

  return (
    <BookingForm
      title="実施計画書情報閲覧録"
      reservations={['上水道', '下水道']}
      onSubmit={handleSubmit}
    />
  );
};

export default SampleBookingForm;