import React from 'react';
import styled from 'styled-components';

// 表のデータ型定義
type TableData = {
  category: string;
  previousYearAmount: number;
  previousYearRatio: number;
  currentYearAmount: number;
  currentYearRatio: number;
}[];

// コンポーネントのプロパティ型定義
type Props = {
  title: string;
  tableData: TableData;
};

// 表のスタイル定義
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

  td:first-child {
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// 金額表示のフォーマット
const formatAmount = (amount: number) => {
  return amount.toLocaleString('ja-JP');
};

// コンポーネント定義
const FinancialStatement: React.FC<Props> = ({ title, tableData }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Table>
        <thead>
          <tr>
            <th>科目</th>
            <th>当期①</th>
            <th>対前年②</th>
            <th>前期③</th>
            <th>対前年⑩</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>{row.currentYearAmount ? formatAmount(row.currentYearAmount) : '-'}</td>
              <td>{row.currentYearRatio ? `${row.currentYearRatio}%` : '-'}</td>
              <td>{row.previousYearAmount ? formatAmount(row.previousYearAmount) : '-'}</td>
              <td>{row.previousYearRatio ? `${row.previousYearRatio}%` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータ
const sampleData: TableData = [
  {
    category: '売上高',
    previousYearAmount: 6465491000,
    previousYearRatio: 0,
    currentYearAmount: 6525023000,
    currentYearRatio: 0,
  },
  {
    category: '売上原価',
    previousYearAmount: 6465111176,
    previousYearRatio: 0,
    currentYearAmount: 6524951047,
    currentYearRatio: 0,
  },
  // ... 他のデータ ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>財務諸表</h1>
      <FinancialStatement 
        title="損益計算書" 
        tableData={sampleData} 
      />
    </div>
  );
};

export default App;