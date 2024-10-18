import React from 'react';
import styled from '@emotion/styled';

interface WaterSupplyProps {
  date: string;
  years: number;
  months: number;
  paymentMethod: string;
  previousReading: number;
  currentReading: number;
  usageAmount: number;
  remarks: string;
  subject: string;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Value = styled.span`
  margin-right: 20px;
`;

const Remarks = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: right;
`;

const WaterSupply: React.FC<WaterSupplyProps> = ({
  date,
  years,
  months,
  paymentMethod,
  previousReading,
  currentReading,
  usageAmount,
  remarks,
  subject,
}) => {
  return (
    <Container>
      <h2>{subject}</h2>
      <div>
        <Label>入出庫日:</Label>
        <Value>{date}</Value>
        <Label>年度:</Label>
        <Value>{years}</Value>
        <Label>年度:</Label>
        <Value>{months}</Value>
      </div>
      <div>
        <Label>伝票番号:</Label>
        <Value>{paymentMethod}</Value>
      </div>
      <div>
        <Label>前回:</Label>
        <Value>{previousReading}</Value>
        <Label>今回:</Label>
        <Value>{currentReading}</Value>
        <Label>伝票番号:</Label>
        <Value>{usageAmount}</Value>
      </div>
      {remarks && (
        <Remarks>
          <Label>摘要:</Label>
          {remarks}
        </Remarks>
      )}
      <Table>
        <thead>
          <tr>
            <TableHeader>品番</TableHeader>
            <TableHeader>品名</TableHeader>
            <TableHeader>規格</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>単価</TableHeader>
            <TableHeader>金額</TableHeader>
            <TableHeader>保管庫</TableHeader>
            <TableHeader>保管場所</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>0000701015</TableCell>
            <TableCell>瀬戸棚</TableCell>
            <TableCell>φ200㎜</TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>m</TableCell>
            <TableCell>2,828,788.00</TableCell>
            <TableCell>0.00</TableCell>
            <TableCell>3.00</TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <WaterSupply
      date="令30年06月25日"
      years={1}
      months={1}
      paymentMethod="予算"
      previousReading={0}
      currentReading={0}
      usageAmount={1}
      remarks="野蔵品戻し"
      subject="戻し出庫入力(移動平均)"
    />
  );
};

export default App;