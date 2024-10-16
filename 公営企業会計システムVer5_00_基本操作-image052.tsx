// ResultTable.tsx
import React from 'react';
import styled from '@emotion/styled';

type ResultTableProps = {
  data: string[][];
};

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

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  // 表のヘッダー行を生成
  const headerRow = data[0].map((header, index) => <th key={index}>{header}</th>);

  // 表のデータ行を生成
  const dataRows = data.slice(1).map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>{dataRows}</tbody>
    </Table>
  );
};

// サンプルデータを使用した ResultTable コンポーネントの使用例
const SampleData = [
  ['年', '月', '日', 'TFRRI', '水道', '食', 'ガス', '前年比'],
  ['2018', '子年', '00', '-', '01', '01', '01', '-'],
  ['2018', '子年', '00', '-', '01', '01', '0', '-'],
  ['2018', '子年', '00', '-', '01', '01', '01', '0001'],
  ['2018', '子年', '00', '-', '01', '01', '01', '0001']
];

const App: React.FC = () => {
  return (
    <div>
      <h1>結果テーブル</h1>
      <ResultTable data={SampleData} />
    </div>
  );
};

export default App;