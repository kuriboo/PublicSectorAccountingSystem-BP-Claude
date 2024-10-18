import React from 'react';
import styled from 'styled-components';

type DateTableProps = {
  /** テーブルの行データ */
  rows: string[][];
};

/**
 * 日付テーブルコンポーネント
 */
const DateTable: React.FC<DateTableProps> = ({ rows }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell>次年度</HeaderCell>
          <HeaderCell>款</HeaderCell>
          <HeaderCell>項</HeaderCell>
          <HeaderCell>目</HeaderCell>
          <HeaderCell>節</HeaderCell>
          <HeaderCell>細節</HeaderCell>
          <HeaderCell>明細</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <DataCell key={cellIndex}>{cell}</DataCell>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const HeaderCell = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  text-align: center;
  font-weight: bold;
`;

const DataCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

// サンプルデータ
const sampleRows = [
  ['002', '01', '01', '13', '001', '001', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
];

/**
 * DateTableコンポーネントの使用例
 */
const DateTableExample: React.FC = () => {
  return (
    <div>
      <h2>日付テーブル</h2>
      <DateTable rows={sampleRows} />
    </div>
  );
};

export default DateTableExample;