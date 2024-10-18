import React from 'react';
import styled from 'styled-components';

// 消費税マスタの型定義
type TaxMasterProps = {
  data: {
    consumptionTaxCode: string;
    applicationStartDate: string;
    consumptionTaxRate: number;
    localConsumptionTaxRate: number;
    lightTax: number;
    lightTaxRate: number;
  }[];
};

// スタイル定義
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
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;

// 消費税マスタコンポーネント
const TaxMaster: React.FC<TaxMasterProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>消費税コード</th>
          <th>適用開始年月日</th>
          <th>消費税率及び地方消費税率</th>
          <th>地方消費税率</th>
          <th>軽減税率</th>
          <th>軽減税率対象記号</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.consumptionTaxCode}</td>
            <td>{item.applicationStartDate}</td>
            <td>{item.consumptionTaxRate.toFixed(2)}%</td>
            <td>{item.localConsumptionTaxRate.toFixed(2)}%</td>
            <td>{item.lightTax ? '軽減税率' : ''}</td>
            <td>{item.lightTaxRate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    consumptionTaxCode: '08',
    applicationStartDate: '昭和63年04月01日',
    consumptionTaxRate: 3,
    localConsumptionTaxRate: 0,
    lightTax: 0,
    lightTaxRate: 0,
  },
  {
    consumptionTaxCode: '08',
    applicationStartDate: '平成09年04月01日',
    consumptionTaxRate: 5,
    localConsumptionTaxRate: 1,
    lightTax: 0,
    lightTaxRate: 0,
  },
  // 以下サンプルデータ省略
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>消費税マスタ</h1>
      <TaxMaster data={sampleData} />
    </div>
  );
};

export default App;