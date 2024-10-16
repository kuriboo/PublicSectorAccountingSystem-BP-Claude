import React from 'react';
import styled from '@emotion/styled';

type TransactionData = {
  date: string;
  type: string;
  amount: number;
  balance: number;
  receivedAmount: number;
  unreceivedAmount: number;
  returnedAmount: number;
  description: string;
};

type Props = {
  data: TransactionData[];
};

const TransactionTable: React.FC<Props> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>記録日</TableHeader>
            <TableHeader>種別</TableHeader>
            <TableHeader>伝票No</TableHeader>
            <TableHeader>調定金額</TableHeader>
            <TableHeader>収納金額</TableHeader>
            <TableHeader>未収金額</TableHeader>
            <TableHeader>戻出金額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell>{row.receivedAmount}</TableCell>
              <TableCell>{row.unreceivedAmount}</TableCell>
              <TableCell>{row.returnedAmount}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// スタイリング
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  font-weight: bold;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

// サンプルデータを用いた使用例
const sampleData: TransactionData[] = [
  {
    date: '06/01/31',
    type: '個別調定',
    amount: 27,
    balance: 10000,
    receivedAmount: 10000,
    unreceivedAmount: 0,
    returnedAmount: 0,
    description: '軽自・平成29年度本収金入力用仕訳',
  },
  {
    date: '06/01/31',
    type: '収納',
    amount: 27,
    balance: 10000,
    receivedAmount: 0,
    unreceivedAmount: 0,
    returnedAmount: 10000,
    description: '軽自・平成29年度本収金入力用仕訳',  
  },
  {
    date: '06/01/31',
    type: '戻出',
    amount: 136,
    balance: 10000,
    receivedAmount: 0,
    unreceivedAmount: 0,
    returnedAmount: 10000,
    description: '軽自・平成29年度本収金入力用仕訳',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>取引履歴</h1>
      <TransactionTable data={sampleData} />
    </div>
  );
};

export default App;