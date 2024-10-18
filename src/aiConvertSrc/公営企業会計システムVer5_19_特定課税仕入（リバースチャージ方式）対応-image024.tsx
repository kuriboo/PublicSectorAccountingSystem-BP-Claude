// FinancialStatementTable.tsx
import React from 'react';
import styled from '@emotion/styled';

interface FinancialStatementTableProps {
  data: {
    category: string;
    currentYear: number;
    previousYear: number;
    yearBeforePrevious: number;
    total: number;
  }[];
}

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

  tr:nth-child(even) {
    background-color: #f8f8f8;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const FinancialStatementTable: React.FC<FinancialStatementTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>項目</th>
          <th>当期(前々年)</th>
          <th>前期(前年)</th>
          <th>当期(今年)</th>
          <th>合計</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.category}</td>
            <td>{row.yearBeforePrevious.toLocaleString()}</td>
            <td>{row.previousYear.toLocaleString()}</td>
            <td>{row.currentYear.toLocaleString()}</td>
            <td>{row.total.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    category: '売上高',
    currentYear: 6895551259,
    previousYear: 7227473,
    yearBeforePrevious: 524941898,
    total: 6900500616,
  },
  {
    category: '売上原価',
    currentYear: 5663251550,
    previousYear: 200420,
    yearBeforePrevious: 1276646785,
    total: 6879690916,
  },
  // その他のデータ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Financial Statement</h1>
      <FinancialStatementTable data={sampleData} />
    </div>
  );
};

export default App;