以下は、Next.js + TypeScriptを使用して、与えられた画像を元にしたコンポーネントのコードです。

import React from 'react';
import styled from 'styled-components';

// テーブルのプロパティの型定義
interface TableProps {
  data: Array<Array<string | number>>;
}

// テーブルのスタイリング
const TableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

// テーブルコンポーネント
const MyTable: React.FC<TableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {data[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// サンプルデータ
const sampleData = [
  ['', '当年度', '当月累計', '当年度'],
  ['当年度合併区分', 0.00, 0.00, 0.00],
  ['当年度期間区分', 0.00, 0.00, 0.00],
  ['当月区分', 1.00, 1.00, 1.00],
  ['前年度合併区分', 7309903.60, 7309903.60, 7309903.60],
  ['前年度期間区分', 0.00, 0.00, 0.00],
];

// 使用例
const MyTableExample: React.FC = () => {
  return (
    <div>
      <h2>My Table Series</h2>
      <MyTable data={sampleData} />
    </div>
  );
};

export default MyTableExample;