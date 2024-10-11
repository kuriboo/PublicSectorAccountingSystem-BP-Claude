import React from 'react';
import styled from 'styled-components';

// 表のスタイリング
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
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 12px;
    
    th, td {
      padding: 6px;
    }
  }
`;

// テーブルのヘッダー
const TableHeader = styled.tr`
  font-weight: bold;
`;

// テーブルの行
const TableRow = styled.tr``;

// テーブルのセル
const TableCell = styled.td``;

// テーブルのプロパティの型定義
interface TableProps {
  data: any[][]; // テーブルのデータ
  headers: string[]; // テーブルのヘッダー
}

// テーブルコンポーネント
const CustomTable: React.FC<TableProps> = ({ data, headers }) => {
  // ヘッダーが指定されていない場合のデフォルトヘッダー
  const defaultHeaders = headers.length === 0 ? [...Array(data[0].length)].map((_, i) => `Column ${i + 1}`) : headers;
  
  return (
    <Table>
      <thead>
        <TableHeader>
          {defaultHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </TableHeader>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [    
  ['買掛金', '繰越', '当期発生', '当期消費'],
  ['買掛金', '6,101.19', '66,774,173', '66,769,174.80'],
  ['未払金', '6,101.19', '66,774,173', '56,769,174.80']
];

const sampleHeaders = ['科目', '繰越', '当期発生', '当期消費'];

// サンプルコンポーネント
const SampleTableComponent: React.FC = () => {
  return (
    <div>
      <h2>取引先元帳</h2>
      <CustomTable data={sampleData} headers={sampleHeaders} />
    </div>
  );
};

export default SampleTableComponent;