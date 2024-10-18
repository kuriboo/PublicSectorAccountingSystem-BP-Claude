import React from 'react';
import styled from '@emotion/styled';

// 表の1行を表すコンポーネントの型定義
type RowProps = {
  data: (string | number)[];
};

// 表の1セルを表すコンポーネントの型定義
type CellProps = {
  children: React.ReactNode;
  isHeader?: boolean;
  align?: string;
};

// 表のコンポーネントの型定義
type TableProps = {
  data: (string | number)[][];
  headerRow?: string[];
};

// 表の1セルを表すコンポーネント
const Cell = styled.td<CellProps>`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ isHeader }) => (isHeader ? 'bold' : 'normal')};
`;

// 表の1行を表すコンポーネント
const Row: React.FC<RowProps> = ({ data }) => (
  <tr>
    {data.map((cell, index) => (
      <Cell key={index}>{cell}</Cell>
    ))}
  </tr>
);

// 表のコンポーネント
const Table: React.FC<TableProps> = ({ data, headerRow }) => (
  <TableWrapper>
    <StyledTable>
      {headerRow && (
        <thead>
          <Row data={headerRow} />
        </thead>
      )}
      <tbody>
        {data.map((row, rowIndex) => (
          <Row key={rowIndex} data={row} />
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

// 表のスタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleData = [
  ['', '', '', '', '', '', '適応値使用', '2100000', '0', '2100000', '0', '2000000', '100000'],
  ['', '', '', '', '', '', '通知配備率', '2100000', '0', '2100000', '0', '2000000', '100000'],
  ['', '', '', '1', '', '1', '給与率', '2000000', '0', '2000000', '0', '2000000', '0'],
  ['', '', '', '1', '1', '1', '所得率', '2000000', '0', '2000000', '0', '2000000', '0'],
  ['', '', '', '1', '3', '1', '源泉率', '100000', '0', '100000', '0', '0', '100000'],
  ['', '', '', '', '', '', '総消費配付', '100000', '0', '100000', '0', '', '100000'],
  ['2', '', '', '', '', '', '特定課税仕入', '', '', '', '', '', ''],
  ['2', '1', '', '', '', '', '事業専用', '1000', '0', '1000', '1000', '0', '0'],
  ['2', '1', '1', '13', '', '', '共通', '1000', '0', '1000', '1000', '0', '0'],
  ['2', '1', '1', '13', '1', '', '印刷製本費', '1000', '0', '1000', '1000', '0', '0'],
  ['2', '1', '1', '13', '1', '1', '電子帳簿', '1000', '0', '1000', '1000', '0', '0'],
  ['', '', '', '', '', '', '（租円すた消費税額）', '80', '', '', '', '', ''],
];

const headerRow = ['', '', '', '', '', '', '', '金額', '', '課税標準額', '消費税額', '地方消費税額', '不課税'];

// サンプルデータを使用して表示
const SampleTable: React.FC = () => <Table data={sampleData} headerRow={headerRow} />;

export default SampleTable;