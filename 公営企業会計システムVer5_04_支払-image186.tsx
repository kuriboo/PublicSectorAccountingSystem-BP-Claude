import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  date: string;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  consumption: number;
};

type ReservationSummaryProps = {
  reservationData: ReservationData[];
  totalAmount: number;
  taxAmount: number;
  totalPrice: number;
};

const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  reservationData,
  totalAmount,
  taxAmount,
  totalPrice,
}) => {
  return (
    <Container>
      <Title>支出予算差引簿データ照会</Title>
      <SummaryContainer>
        <SummaryLabel>所属</SummaryLabel>
        <SummaryValue>000000</SummaryValue>
        <SummaryLabel>所属</SummaryLabel>
        <SummaryValue>9999999</SummaryValue>
        <SummaryLabel>総務課</SummaryLabel>
        <SummaryLabel>予算・会計担当 ぎょうせい太郎</SummaryLabel>
        <SummaryLabel>平成29年06月29日</SummaryLabel>
      </SummaryContainer>
      <PriceContainer>
        <PriceLabel>予算</PriceLabel>
        <PriceValue>0000000</PriceValue>
        <PriceLabel>前節</PriceLabel>
        <PriceValue>0020/0101 原本納付</PriceValue>
        <PriceLabel>節</PriceLabel>
        <PriceValue>0001 給料</PriceValue>
        <PriceLabel>明細</PriceLabel>
        <PriceValue>0001 給料</PriceValue>
      </PriceContainer>
      <TableContainer>
        <TableHeader>
          <HeaderCell>日</HeaderCell>
          <HeaderCell>処理</HeaderCell>
          <HeaderCell>摘要</HeaderCell>
          <HeaderCell>資担番号</HeaderCell>
          <HeaderCell>資担額</HeaderCell>
          <HeaderCell>執行番号</HeaderCell>
          <HeaderCell>執行額</HeaderCell>
          <HeaderCell>消費税額</HeaderCell>
        </TableHeader>
        <TableBody>
          {reservationData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.unitPrice}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.totalPrice}</TableCell>
              <TableCell>{data.consumption}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <TotalContainer>
        <TotalLabel>合計負担額</TotalLabel>
        <TotalValue>{totalAmount}</TotalValue>
        <TotalLabel>合計執行額</TotalLabel>
        <TotalValue>{totalPrice}</TotalValue>
        <TotalLabel>合計消費税</TotalLabel>
        <TotalValue>{taxAmount}</TotalValue>
      </TotalContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.span`
  font-weight: bold;
`;

const SummaryValue = styled.span``;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PriceLabel = styled.span`
  font-weight: bold;
`;

const PriceValue = styled.span``;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const TotalLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const TotalValue = styled.span``;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const sampleData: ReservationData[] = [
    {
      date: '17',
      name: '負担確定',
      unitPrice: 149,
      quantity: 1,
      totalPrice: 431,000,
      consumption: 0,
    },
    {
      date: '17',
      name: '負担確定',
      unitPrice: 150,
      quantity: 1,
      totalPrice: 1,000,
      consumption: 0,
    },
  ];

  return (
    <ReservationSummary
      reservationData={sampleData}
      totalAmount={3777366}
      taxAmount={0}
      totalPrice={-3777366}
    />
  );
};

export default App;