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
  {
    year: 2018,
    '予算コード': '001',
    '仕訳コード': '001',
    '日コード': '0101',
    '細目コード': '0001',
    '明細コード': '01',
    '名称': '一般会計',
    '次年度繰越コード': '002',
    '次年度目コード': '01',
    '次年度節コード': '001',
    '次年度款コード': '01',
    '次年度項細コード': '0001'
  },
  {
    year: 2019,
    '予算コード': '002',
    '仕訳コード': '002',
    '日コード': '0102',
    '細目コード': '0002',
    '明細コード': '02',
    '名称': '特別会計',
    '次年度繰越コード': '003',
    '次年度目コード': '02',
    '次年度節コード': '002',
    '次年度款コード': '02',
    '次年度項細コード': '0002'
  },
  {
    year: 2020,
    '予算コード': '003',
    '仕訳コード': '003',
    '日コード': '0103',
    '細目コード': '0003',
    '明細コード': '03',
    '名称': '企業会計',
    '次年度繰越コード': '004',
    '次年度目コード': '03',
    '次年度節コード': '003',
    '次年度款コード': '03',
    '次年度項細コード': '0003'
  }
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