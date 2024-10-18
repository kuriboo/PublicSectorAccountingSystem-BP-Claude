// TaxReturnTable.tsx
import React from 'react';
import styled from '@emotion/styled';

// 型定義
type TaxReturnData = {
  category: string;
  currentPeriodAmount: number;
  previousPeriodAmount: number;
  increasedAmount: number;
  increasedPercentage: number;
};

type TaxReturnTableProps = {
  data: TaxReturnData[];
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// TaxReturnTableコンポーネント
const TaxReturnTable: React.FC<TaxReturnTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>課税の範囲</th>
          <th>当期金額</th>
          <th>前期金額</th>
          <th>増加金額</th>
          <th>伸び率</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.currentPeriodAmount.toLocaleString()}</td>
            <td>{item.previousPeriodAmount.toLocaleString()}</td>
            <td>{item.increasedAmount.toLocaleString()}</td>
            <td>{item.increasedPercentage.toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータとコンポーネントの使用例
const sampleData: TaxReturnData[] = [
  {
    category: '給与所得',
    currentPeriodAmount: 6900506346,
    previousPeriodAmount: 6005339690,
    increasedAmount: 895166656,
    increasedPercentage: 14.9,
  },
  // ... 他のデータを追加
];

const TaxReturnTableExample: React.FC = () => {
  return (
    <div>
      <h2>Tax Return Table</h2>
      <TaxReturnTable data={sampleData} />
    </div>
  );
};

export default TaxReturnTableExample;