import React from 'react';
import styled from '@emotion/styled';

interface ReservationPeriodProps {
  startDate: string;
  endDate: string;
  startNumber?: number;
  endNumber?: number;
  totalNumber?: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const DateLabel = styled.span`
  font-weight: bold;
`;

const NumberRange = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const NumberLabel = styled.span`
  font-weight: bold;
`;

const TotalNumber = styled.div`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationPeriod: React.FC<ReservationPeriodProps> = ({
  startDate,
  endDate,
  startNumber = 0,
  endNumber = 999999,
  totalNumber = 999999,
}) => {
  return (
    <Container>
      <Title>予算流用先用日締処理</Title>
      <DateRange>
        <DateLabel>流用先用・流用元と日</DateLabel>
        <div>
          {startDate} ～ {endDate}
        </div>
      </DateRange>
      <NumberRange>
        <NumberLabel>所属</NumberLabel>
        <div>
          {startNumber} ～ {endNumber}
        </div>
      </NumberRange>
      <TotalNumber>流用先用番号：{totalNumber}</TotalNumber>
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ReservationPeriod
        startDate="令和05年06月15日"
        endDate="令和05年08月15日"
        startNumber={0}
        endNumber={999999}
        totalNumber={0}
      />
    </div>
  );
};

export default App;