import React from 'react';
import styled from '@emotion/styled';

interface ReservationData {
  reservationNumber: string;
  departureCode: string;
  departureWaterway: string;
  arrivalCode: string;
  arrivalWaterway: string;
  departureDate: string;
  arrivalDate: string;
  shipCode: string;
  shipName: string;
  seatCode: string;
  seatName: string;
  fareCategory: string;
  totalFare: number;
  cancelFee: number;
  refundPercentage: number;
}

interface ReservationDetailProps {
  data: ReservationData;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const HeaderItem = styled.div`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterItem = styled.div`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationDetail: React.FC<ReservationDetailProps> = ({ data }) => {
  const {
    reservationNumber,
    departureCode,
    departureWaterway,
    arrivalCode,
    arrivalWaterway,
    departureDate,
    arrivalDate,
    shipCode,
    shipName,
    seatCode,
    seatName,
    fareCategory,
    totalFare,
    cancelFee,
    refundPercentage,
  } = data;

  return (
    <Container>
      <Header>
        <HeaderItem>予算数 001 公共下水道事業収</HeaderItem>
        <HeaderItem>予算節 01 公共下水道使用料</HeaderItem>
        <HeaderItem>予算項 01 営業収益</HeaderItem>
        <HeaderItem>予算細節 0010 公共下水道</HeaderItem>
        <HeaderItem>予算目 01 公共下水道使用料</HeaderItem>
        <HeaderItem>予算明細 0001 公共下水道</HeaderItem>
      </Header>
      <Table>
        <thead>
          <tr>
            <TableHeader>事業</TableHeader>
            <TableHeader>振替コード</TableHeader>
            <TableHeader>振替名</TableHeader>
            <TableHeader>性質コード</TableHeader>
            <TableHeader>性質名</TableHeader>
            <TableHeader>施設決済セグメント</TableHeader>
            <TableHeader>構成比率(%)</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>公共下水道</TableData>
            <TableData>171 01 001 001 0</TableData>
            <TableData>下水道使用料</TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData>按分</TableData>
            <TableData>100.00000</TableData>
          </tr>
        </tbody>
      </Table>
      <Footer>
        <FooterItem>
          <div>事業 171 公共下水道</div>
          <div>振替コード 171 01 001 001 0 下水道使用料</div>
          <div>性質コード</div>
        </FooterItem>
        <FooterItem>
          構成比率 100 %
        </FooterItem>
      </Footer>
      <Buttons>
        <Button>行確定</Button>
        <Button>行キャンセル</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </Buttons>
    </Container>
  );
};

// Sample data for display
const sampleData: ReservationData = {
  reservationNumber: '001',
  departureCode: '01',
  departureWaterway: '公共下水道',
  arrivalCode: '01',
  arrivalWaterway: '公共下水道使用料', 
  departureDate: '01',
  arrivalDate: '営業収益',
  shipCode: '0010',
  shipName: '公共下水道',
  seatCode: '01',
  seatName: '公共下水道使用料',
  fareCategory: '0001',
  totalFare: 100,
  cancelFee: 0,
  refundPercentage: 100,
};

const App: React.FC = () => (
  <ReservationDetail data={sampleData} />
);

export default App;