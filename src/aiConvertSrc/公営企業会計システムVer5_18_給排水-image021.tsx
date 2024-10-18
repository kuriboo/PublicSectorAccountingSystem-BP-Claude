以下は、指定された要件に基づいて生成されたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

interface RowData {
  id: number;
  name: string;
  values: (string | number)[];
}

interface TableProps {
  data: RowData[];
  headers: string[];
}

const Table: React.FC<TableProps> = ({ data, headers }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            {row.values.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;

  th {
    padding: 10px;
    text-align: left;
    font-weight: bold;
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
`;

// サンプルデータとコンポーネントの使用例
const sampleData: RowData[] = [
  { id: 1, name: '行番号', values: [1, '行番号', 1, '表示する', 80] },
  { id: 2, name: 'ステータス', values: [2, 'ステータス', 1, '表示する', 80] },
  { id: 3, name: '受付年度', values: [3, '受付年度', 1, '表示する', 80] },
  { id: 4, name: '受付番号', values: [4, '受付番号', 1, '表示する', 80] },
  { id: 5, name: '会計区分', values: [5, '会計区分', 1, '表示する', 80] },
];

const SampleTableComponent: React.FC = () => {
  const headers = ['列CD', '列名', '出力列(画面)', '項目名', '表示', '列幅', '出力列(CSV)', '項目名(CSV)', '表示(CSV)'];

  return (
    <div>
      <h2>給排水データ出力制御マスタ</h2>
      <Table data={sampleData} headers={headers} />
    </div>
  );
};

export default SampleTableComponent;