import React from 'react';
import styled from 'styled-components';

type CompanyMasterListProps = {
  title: string;
  reservationDate: string;
  reservationDetails: string;
};

const CompanyMasterList: React.FC<CompanyMasterListProps> = ({
  title,
  reservationDate,
  reservationDetails,
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ReservationDate>{reservationDate}</ReservationDate>
      </Header>
      <ReservationDetails>{reservationDetails}</ReservationDetails>
      <Footer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const ReservationDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const ReservationDetails = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
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

// Sample usage
const App: React.FC = () => {
  const sampleData: CompanyMasterListProps = {
    title: '資金計画書マスタリスト作成',
    reservationDate: '平成29年09月04日',
    reservationDetails: '行政市水道事業会計 予算・会計担当 ぎょうせい太郎',
  };

  return (
    <div>
      <CompanyMasterList {...sampleData} />
    </div>
  );
};

export default App;