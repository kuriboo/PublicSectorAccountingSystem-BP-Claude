import React from 'react';
import styled from 'styled-components';

// 振替収納履歴の型定義
type TransferHistory = {
  date: string;
  summary: string;
  amount: number;
  collectedAmount: number;
  uncollectedAmount: number;
  note: string;
};

// 振替収納履歴コンポーネントのProps型定義
type TransferHistoryTableProps = {
  data: TransferHistory[];
};

// テーブルのスタイル定義
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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// 振替収納履歴コンポーネント
const TransferHistoryTable: React.FC<TransferHistoryTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>起案日</th>
          <th>摘要</th>
          <th>伝票No</th>
          <th>収納金額</th>
          <th>未収金額</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.summary}</td>
            <td>{item.amount}</td>
            <td>{item.collectedAmount}</td>
            <td>{item.uncollectedAmount}</td>
            <td>{item.note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: TransferHistory[] = [
  {
    date: '06/02/02',
    summary: '集合収納',
    amount: 14,
    collectedAmount: 74100,
    uncollectedAmount: 0,
    note: '集合収納(通年度) No3',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>振替収納履歴</h2>
      <TransferHistoryTable data={sampleData} />
    </div>
  );
};

export default App;