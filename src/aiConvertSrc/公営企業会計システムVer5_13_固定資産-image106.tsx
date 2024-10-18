import React from 'react';
import styled from 'styled-components';

// 取引データの型定義
type Transaction = {
  date: string;
  detail: string;
  amount: number;
  balance: number;
  memo: string;
  tax: number;
};

// コンポーネントのプロパティの型定義
type TransactionTableProps = {
  transactions: Transaction[];
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

// 取引明細テーブルコンポーネント
const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  // 取引データが空の場合の処理
  if (!transactions.length) {
    return <p>No transaction data.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>異動年月日</th>
          <th>異動区分</th>
          <th>異動金額</th>
          <th>異動金額(貸方)</th>
          <th>異動金額(借方)</th>
          <th>摘要</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, i) => (
          <tr key={i}>
            <td>{t.date}</td>
            <td>{t.detail}</td>
            <td>{t.amount}</td>
            <td>{t.balance}</td>
            <td>{t.tax}</td>
            <td>{t.memo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: Transaction[] = [
  {
    date: '2013-03-31',
    detail: '振替',
    amount: 750000,
    balance: 750000,
    memo: '',
    tax: 0,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Bank Statement</h1>
      <TransactionTable transactions={sampleData} />
    </div>
  );
};

export default App;