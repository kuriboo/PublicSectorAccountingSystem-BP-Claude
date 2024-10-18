import React from 'react';
import styled from 'styled-components';

// テーブルのデータ型定義
type TableData = {
  year: number;
  accountCode: string;
  detailedAccountCode: string;
  name: string;
  amount: number;
  template: string;
}[];

// テーブルコンポーネントのプロパティ型定義
type TableProps = {
  data: TableData;
};

// テーブルのスタイル定義
const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      border-bottom: 2px solid #ddd;
    }
  }
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// テーブルコンポーネントの実装
const DataTable: React.FC<TableProps> = ({ data }) => {
  // テーブルヘッダーを生成
  const renderHeader = () => {
    if (data.length === 0) return null;

    const headers = Object.keys(data[0]);
    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  // テーブル行を生成
  const renderRows = () => {
    return data.map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((cell, index) => (
          <td key={index}>{cell}</td>
        ))}
      </tr>
    ));
  };

  return (
    <TableWrapper>
      <Table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderRows()}</tbody>
      </Table>
      <TableFooter>
        <Button>OK</Button>
        <Button>キャンセル</Button>
      </TableFooter>
    </TableWrapper>
  );
};

// サンプルデータ
const sampleData: TableData = [
  {
    year: 2023,
    accountCode: '1234',
    detailedAccountCode: 'ABCD',
    name: 'Sample Data',
    amount: 10000,
    template: 'Template 1',
  },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>データテーブル</h1>
      <DataTable data={sampleData} />
    </div>
  );
};

export default App;