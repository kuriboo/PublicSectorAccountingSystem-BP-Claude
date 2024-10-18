import React from 'react';
import styled from 'styled-components';

// テーブルのヘッダー部分の型定義
type TableHeaderProps = {
  headers: string[];
};

// テーブルのヘッダーコンポーネント
const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <TableHeaderRow>
      {headers.map((header, index) => (
        <TableHeaderCell key={index}>{header}</TableHeaderCell>
      ))}
    </TableHeaderRow>
  );
};

// テーブルの行の型定義
type TableRowProps = {
  data: (string | number)[];
};

// テーブルの行コンポーネント
const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <StyledTableRow>
      {data.map((cell, index) => (
        <TableCell key={index}>{cell}</TableCell>
      ))}
    </StyledTableRow>
  );
};

// テーブルコンポーネントの型定義
type TableProps = {
  headers: string[];
  data: (string | number)[][];
};

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <TableContainer>
      <TableHeader headers={headers} />
      <TableBody>
        {data.map((rowData, index) => (
          <TableRow key={index} data={rowData} />
        ))}
      </TableBody>
    </TableContainer>
  );
};

// スタイルコンポーネント
const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderRow = styled.tr`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

// サンプルデータ
const sampleHeaders = ['業者コード', '業者名', '住所', 'TEL', 'FAX', '通常請求書金額備考', '権限'];
const sampleData = [
  ['0000000011000', '株式会社さようせい建設本社', '東京都江東区新木場1丁目18-03-6892-1234', '03-66892-9876', '-', ''],
];

// 表示用コンポーネント
const TableExample: React.FC = () => {
  return (
    <div>
      <h1>顧客一覧</h1>
      <Table headers={sampleHeaders} data={sampleData} />
    </div>
  );
};

export default TableExample;