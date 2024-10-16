import React from 'react';
import styled from 'styled-components';

// 型定義
interface TableProps {
  headers: string[];
  rows: string[][];
}

// スタイル定義
const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;
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

// コンポーネント定義
const DataTable: React.FC<TableProps> = ({ headers, rows }) => {
  // ヘッダーが空の場合は空配列をデフォルト値として設定
  const tableHeaders = headers.length > 0 ? headers : [];
  
  // 行データが空の場合は空配列をデフォルト値として設定  
  const tableRows = rows.length > 0 ? rows : [];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, rowIndex) => (
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

export default DataTable;

// 使用例
const SampleDataTable: React.FC = () => {
  const headers = ['Name', 'Age', 'City'];
  const rows = [
    ['John Doe', '28', 'New York'],
    ['Jane Smith', '35', 'London'],
    ['Mike Johnson', '42', 'Paris']
  ];

  return (
    <div>
      <h2>Sample Data Table</h2>
      <DataTable headers={headers} rows={rows} />
    </div>
  );
};