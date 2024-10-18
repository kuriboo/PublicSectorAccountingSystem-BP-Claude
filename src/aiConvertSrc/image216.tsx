import React from 'react';
import styled from 'styled-components';

// 個別振替情報の型定義
type TransferData = {
  date: string;
  type: string;
  year: number;
  income: number;
  expense: number;
  balance: number;
  detail: string;
};

// コンポーネントのプロパティの型定義
type TransferTableProps = {
  data: TransferData[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

/**
 * 個別振替情報を表示するコンポーネント
 */
const TransferTable: React.FC<TransferTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (data.length === 0) {
    return <p>個別振替情報がありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>起案日</th>
          <th>種別</th>
          <th>伝票No</th>
          <th>調定金額</th>
          <th>収納金額</th>
          <th>未収金額</th>
          <th>戻出金額</th>
          <th>摘要</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.type}</td>
            <td>{item.year}</td>
            <td>{item.income.toLocaleString()}</td>
            <td>{item.expense.toLocaleString()}</td>
            <td>{item.balance.toLocaleString()}</td>
            <td>{item.expense.toLocaleString()}</td>
            <td>{item.detail}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: TransferData[] = [
  {
    date: '06/01/31',
    type: '個別調定',
    year: 27,
    income: 10000,
    expense: 10000,
    balance: 0,
    detail: '平成29年度未収金入力用仕訳',
  },
  {
    date: '06/01/31',
    type: '収納',
    year: 27,
    income: 10000,
    expense: 0,
    balance: 0,
    detail: '平成29年度未収金入力用仕訳',
  },
  {
    date: '06/01/31',
    type: '戻出',
    year: 136,
    income: 0,
    expense: 0,
    balance: 10000,
    detail: '平成29年度未収金入力用仕訳',
  },
];

/**
 * コンポーネントの使用例
 */
const App: React.FC = () => {
  return (
    <div>
      <h2>個別振替情報</h2>
      <TransferTable data={sampleData} />
    </div>
  );
};

export default App;