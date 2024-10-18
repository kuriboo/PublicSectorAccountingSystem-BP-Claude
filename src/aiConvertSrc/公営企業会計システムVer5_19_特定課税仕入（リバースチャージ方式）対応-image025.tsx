import React from 'react';
import styled from 'styled-components';

// 型定義
interface FinancialStatementProps {
  data: {
    year: number;
    sales: number;
    operatingIncome: number;
    ordinaryIncome: number;
    netIncome: number;
  }[];
}

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

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// コンポーネント定義
const FinancialStatement: React.FC<FinancialStatementProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>年度</th>
          <th>売上高</th>
          <th>営業利益</th>
          <th>経常利益</th>
          <th>当期純利益</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.year}</td>
            <td>{item.sales.toLocaleString()}</td>
            <td>{item.operatingIncome.toLocaleString()}</td>
            <td>{item.ordinaryIncome.toLocaleString()}</td>
            <td>{item.netIncome.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  { year: 2022, sales: 1000000, operatingIncome: 100000, ordinaryIncome: 90000, netIncome: 70000 },
  { year: 2021, sales: 900000, operatingIncome: 80000, ordinaryIncome: 75000, netIncome: 60000 },
  { year: 2020, sales: 800000, operatingIncome: 70000, ordinaryIncome: 65000, netIncome: 50000 },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Financial Statement</h1>
      <FinancialStatement data={sampleData} />
    </div>
  );
};

export default App;