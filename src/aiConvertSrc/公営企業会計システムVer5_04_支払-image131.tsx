import React from 'react';
import styled from '@emotion/styled';

type TransactionData = {
  date: string;
  description: string;
  amount: number;
  paymentDate: string;
};

type Props = {
  fromDate: string;
  toDate: string;
  transactions: TransactionData[];
};

const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TransactionList: React.FC<Props> = ({ fromDate, toDate, transactions }) => {
  return (
    <Container>
      <Header>
        <Label>振替伝票決裁確定解除入力</Label>
        <div>
          <Label>取引期間</Label>
          <span>{fromDate} 〜 {toDate}</span>
        </div>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>決定番号</th>
            <th>摘要</th>
            <th>決定額</th>
            <th>支払日</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.amount.toLocaleString()}</td>
              <td>{tx.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを使った使用例
const sampleData = [
  {
    date: '29/05/31',
    description: 'ぎょうせい運送 月分手当等',
    amount: 100000,
    paymentDate: '29/05/31',
  },
  {
    date: '29/05/31',
    description: '月分給料',
    amount: 150000,
    paymentDate: '29/05/31',
  },
  // 以下略
];

const TransactionListExample: React.FC = () => {
  return (
    <TransactionList 
      fromDate="平成29年04月17日"
      toDate="平成29年06月17日"
      transactions={sampleData}
    />
  );
}

export default TransactionListExample;