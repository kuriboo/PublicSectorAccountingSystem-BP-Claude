import React from 'react';
import styled from '@emotion/styled';

// 財源集計インターフェース
interface IFinancialResource {
  column1: string;
  financialCode: string;
  basicBudget: number;
  carryOverBalance: number;
  monthlyBudget: number;
  annualBudget: number;
  temporaryBudget: number;
  reserveBudget: number;
  compensatoryBudget: number;
  totalBudget: number;
}

// プロパティインターフェース 
interface IProps {
  data: IFinancialResource[];
}

// スタイル付きコンポーネント
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ddd;
  }
  th {
    background: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    tr:nth-child(even) {
      background: #f2f2f2;
    }
  }
`;

// 財源集計コンポーネント
const FinancialResourceTable: React.FC<IProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>行</th>
          <th>財源コード</th>
          <th>当初予算</th>
          <th>繰越残高</th>
          <th>月別収支増加額</th>
          <th>年間増減額</th>
          <th>臨時予算</th>
          <th>予備費</th>
          <th>補正予算</th>
          <th>累計金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.column1}</td>
            <td>{row.financialCode}</td>
            <td>{row.basicBudget.toLocaleString()}</td>
            <td>{row.carryOverBalance.toLocaleString()}</td>
            <td>{row.monthlyBudget.toLocaleString()}</td>
            <td>{row.annualBudget.toLocaleString()}</td>
            <td>{row.temporaryBudget.toLocaleString()}</td>
            <td>{row.reserveBudget.toLocaleString()}</td>
            <td>{row.compensatoryBudget.toLocaleString()}</td>
            <td>{row.totalBudget.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: IFinancialResource[] = [
  {
    column1: '01',
    financialCode: '自己財源',
    basicBudget: 5000000,
    carryOverBalance: 0,
    monthlyBudget: 0,
    annualBudget: 0,
    temporaryBudget: 0,
    reserveBudget: 0, 
    compensatoryBudget: 0,
    totalBudget: 5000000,
  },
  {
    column1: '02',
    financialCode: '目的税',
    basicBudget: 3000000,
    carryOverBalance: 100000,
    monthlyBudget: 50000,
    annualBudget: 600000,
    temporaryBudget: 0,
    reserveBudget: 200000,
    compensatoryBudget: 0, 
    totalBudget: 3950000,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>財源集計</h1>
      <FinancialResourceTable data={sampleData} />
    </div>
  );
};

export default App;