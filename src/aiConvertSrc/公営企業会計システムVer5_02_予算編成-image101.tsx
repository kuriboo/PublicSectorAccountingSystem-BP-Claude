import React from 'react';
import styled from 'styled-components';

// CSVデータの型定義
type CsvData = {
  [key: string]: string;
}[];

// CSVTableコンポーネントのプロパティ型定義
interface CsvTableProps {
  data: CsvData;
}

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// CSVTableコンポーネント
const CsvTable: React.FC<CsvTableProps> = ({ data }) => {
  // ヘッダー行の取得
  const headerRow = data[0];

  // データ行の取得
  const dataRows = data.slice(1);

  return (
    <Table>
      <thead>
        <tr>
          {/* ヘッダー行のセル */}
          {Object.values(headerRow).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* データ行のセル */}
        {dataRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: CsvData = [
  { A: 'CSV取込', B: 'クリア', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  // ... 省略
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>CSVテーブル</h1>
      <CsvTable data={sampleData} />
    </div>
  );
};

export default App;