import React from 'react';
import styled from '@emotion/styled';

type ReservationChecklistProps = {
  reservation: {
    date: string;
    startTime: string;
    endTime: string;
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ReservationInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const ReservationChecklist: React.FC<ReservationChecklistProps> = ({ reservation }) => {
  // Format date string (e.g., "2023年09月04日")
  const formattedDate = reservation.date.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1/$2/$3');

  return (
    <Container>
      <Title>予算残額チェックリスト作成</Title>
      <ReservationInfo>
        <InfoRow>
          <Label>範囲指定</Label>
        </InfoRow>
        <InfoRow>
          <Label>作成年月</Label>
          <Value>{formattedDate}</Value>
        </InfoRow>
        <InfoRow>
          <Label>予算科目</Label>
          <Value>{reservation.startTime || 'N/A'} 〜 {reservation.endTime || 'N/A'}</Value>
        </InfoRow>
      </ReservationInfo>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ReservationChecklist;

// Usage example
const App: React.FC = () => {
  const reservationData = {
    date: '2029年09月04日',
    startTime: '000000000',
    endTime: '999999999',
  };

  return (
    <div>
      <h1>Reservation Checklist Example</h1>
      <ReservationChecklist reservation={reservationData} />
    </div>
  );
};