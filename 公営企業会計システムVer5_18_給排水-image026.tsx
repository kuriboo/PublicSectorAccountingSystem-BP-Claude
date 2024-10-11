import React from 'react';
import styled from 'styled-components';

// 型定義
interface Division {
  id: number;
  fiscalYear: number;
  name: string;
  code: string;
  standard: string;
  unitPrice: number;
  accountCode: string;
}

interface Props {
  divisions: Division[];
}

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
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
      margin-bottom: 16px;
    }
  }
`;

// コンポーネント定義
const DivisionTable: React.FC<Props> = ({ divisions }) => {
  // 例外処理
  if (!divisions || divisions.length === 0) {
    return <div>表示するデータがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>年度</th>
          <th>納付分類区分</th>
          <th>納付分類区分名</th>
          <th>単価コード</th>
          <th>単価名称</th>
          <th>標準表示額</th>
          <th>集計表コード</th>
        </tr>
      </thead>
      <tbody>
        {divisions.map(division => (
          <tr key={division.id}>
            <td>{division.fiscalYear}</td>
            <td>{division.code}</td>
            <td>{division.name}</td>
            <td>{division.unitPrice}</td>
            <td>{division.standard}</td>
            <td>{division.unitPrice.toLocaleString()}円</td>
            <td>{division.accountCode}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DivisionTable;

// 使用例
const sampleData: Division[] = [
  {
    id: 1,
    fiscalYear: 2017,
    name: '臨時給水納付金',
    code: '20',
    standard: '20mm(2か月)',
    unitPrice: 3012,
    accountCode: 'P20mm(2か月)'
  },
  {
    id: 2,
    fiscalYear: 2017,
    name: '検査手数料',
    code: '30',
    standard: '30mm(か月)',
    unitPrice: 3001,
    accountCode: 'P30mm(か月)'
  },
  // ...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>納付分類単価マスタ</h1>
      <DivisionTable divisions={sampleData} />
    </div>
  );  
};