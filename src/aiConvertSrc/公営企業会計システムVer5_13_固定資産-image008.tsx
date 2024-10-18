import React from 'react';
import styled from 'styled-components';

// 負担情報を表す型定義
type BurdenInfo = {
  code: string;
  name: string;
  amount: number;
  amountUnit: string;
};

// BurdenTableコンポーネントのProps型定義
type BurdenTableProps = {
  data: BurdenInfo[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

// BurdenTableコンポーネント
const BurdenTable: React.FC<BurdenTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>番号</th>
          <th>負担科目コード</th>
          <th>摘要</th>
          <th>摘要2</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{`${item.amount}${item.amountUnit}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: BurdenInfo[] = [
  { code: '45,297', name: '負担科目金額', amount: 174, amountUnit: '億円' },
];

// サンプル用のコンポーネント
const SampleComponent: React.FC = () => {
  return (
    <div>
      <h2>負担情報明細</h2>
      <BurdenTable data={sampleData} />
    </div>
  );
};

export default SampleComponent;