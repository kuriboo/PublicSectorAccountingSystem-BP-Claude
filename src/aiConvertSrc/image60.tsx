import React from 'react';
import styled from 'styled-components';

// 型定義
type TaxProjectionTableProps = {
  data: {
    year: number;
    incomeBeforeTax: number;
    corporateTax: number;
    enterpriseTax: number;
    specialLocalCorporateTax: number;
    corporateTaxTotal: number;
    corporateInhabitantsTax: number;
    beforeTaxProfit: number;
    incomeTaxes: number;
    netIncome: number;
  }[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th,
    td {
      padding: 6px;
    }
  }
`;

const TaxProjectionTable: React.FC<TaxProjectionTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>予算区分</th>
          {data.map((item) => (
            <th key={item.year}>{item.year}年度</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>課税売上</td>
          {data.map((item) => (
            <td key={item.year}>{item.incomeBeforeTax.toLocaleString() || '-'}</td>
          ))}
        </tr>
        <tr>
          <td>特定課税仕入返還</td>
          {data.map((item) => (
            <td key={item.year}>{item.corporateTax.toLocaleString() || '-'}</td>
          ))}
        </tr>
        <tr>
          <td>課税売上</td>
          {data.map((item) => (
            <td key={item.year}>{item.enterpriseTax.toLocaleString() || '-'}</td>
          ))}
        </tr>
        {/* 省略 */}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    year: 3,
    incomeBeforeTax: 6315983815,
    corporateTax: 24000,
    enterpriseTax: 0,
    specialLocalCorporateTax: 0,
    corporateTaxTotal: 8000,
    corporateInhabitantsTax: 0,
    beforeTaxProfit: 1514544235,
    incomeTaxes: 0,
    netIncome: 3606575138,
  },
  // 他のデータ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予算表</h1>
      <TaxProjectionTable data={sampleData} />
    </div>
  );
};

export default App;
