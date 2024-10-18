import React from 'react';
import styled from 'styled-components';

// 課税標準と税額の型定義
type TaxData = {
  taxableIncome: number;
  taxAmount: number;
};

// コンポーネントのプロパティの型定義
type TaxCalculatorProps = {
  data: TaxData[];
};

// スタイル定義
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
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 税額計算コンポーネント
const TaxCalculator: React.FC<TaxCalculatorProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>課税標準</th>
          <th>税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.taxableIncome.toLocaleString()}</td>
            <td>{item.taxAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// 使用例
const sampleData: TaxData[] = [
  { taxableIncome: 1000000, taxAmount: 50000 },
  { taxableIncome: 2000000, taxAmount: 150000 },
  { taxableIncome: 3000000, taxAmount: 300000 },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>税額計算表</h2>
      <TaxCalculator data={sampleData} />
    </div>
  );
};

export default sampleData;