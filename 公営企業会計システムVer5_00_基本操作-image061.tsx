import React from 'react';
import styled from 'styled-components';

// 会計年度の型定義
type FiscalYear = {
  year: number;
  [key: string]: string | number | undefined;
};

// ExcelSheetコンポーネントのプロパティ型定義
type ExcelSheetProps = {
  data: FiscalYear[];
};

// ExcelSheetコンポーネント
const ExcelSheet: React.FC<ExcelSheetProps> = ({ data }) => {
  // ヘッダー行を生成
  const headerRow = Object.keys(data[0]).map((key) => <th key={key}>{key}</th>);

  // データ行を生成
  const dataRows = data.map((row, index) => (
    <tr key={index}>
      {Object.values(row).map((value, i) => (
        <td key={i}>{value}</td>
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

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    th,
    td {
      display: block;
      width: 100%;
    }

    th {
      text-align: center;
    }
  }
`;

// サンプルデータ
const sampleData: FiscalYear[] = [
  { '会計年度（半角西暦）': 2018 },
  { '予算': '', 'また': '', 'は': '001', '仕訳': '001' },
  { 'コード': '' },
  { 'コード': '' },
  { '日コード': '' },
  { '細目コード': '' },
  { '明細コード': '' },
  { '名称': '' },
  { '次年度繰越コード': '' },
  { '次年度繰越コード': '' },
  { '次年度目コード': '' },
  { '次年度節コード': '' },
  { '次年度款コード': '' },
  { '次年度項細コード': '' },
];

// サンプル表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>Excelシートサンプル</h1>
      <ExcelSheet data={sampleData} />
    </div>
  );
};

export default App;