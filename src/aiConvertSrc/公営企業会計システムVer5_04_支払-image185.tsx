import React from 'react';
import styled from 'styled-components';

// 型定義
type Transaction = {
  date: string;
  no: number;
  code: string;
  amount: number;
  method: string;
  dateProcessed: string;
  note: string;
};

type Props = {
  transactions: Transaction[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
    }

    tr {
      border-bottom: 2px solid #ddd;
    }
  }
`;

// 取引履歴テーブルコンポーネント
const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>支払予定日</th>
          <th>決定番号</th>
          <th>支払先</th>
          <th>支払額</th>
          <th>支払方法</th>
          <th>処理日</th>
          <th>摘要</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, index) => (
          <tr key={index}>
            <td>{tx.date}</td>
            <td>{tx.no}</td>
            <td>{tx.code}</td>
            <td>{tx.amount.toLocaleString()} 前払金</td>
            <td>{tx.method}</td>
            <td>{tx.dateProcessed}</td>
            <td>{tx.note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleTransactions: Transaction[] = [
  {
    date: '29/04/08',
    no: 1,
    code: '0000005001-MN',
    amount: 7400000,
    method: '前払金',
    dateProcessed: '2017-1-MM',
    note: '',
  },
  {
    date: '29/04/08',
    no: 2, 
    code: '0000006151-MN',
    amount: 5520000,
    method: '前払金',  
    dateProcessed: '2017-2-MM',
    note: '',
  },
  // 他のサンプルデータ...
];

// 使用例
const TransactionTableExample: React.FC = () => {
  return (
    <div>
      <h2>支払済データ照会</h2>
      <TransactionTable transactions={sampleTransactions} />
    </div>
  );  
};

export default TransactionTableExample;