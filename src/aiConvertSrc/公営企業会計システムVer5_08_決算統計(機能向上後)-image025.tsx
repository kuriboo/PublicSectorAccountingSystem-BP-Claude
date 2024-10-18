import React from 'react';
import styled from 'styled-components';

// 予算執行データの型定義
type BudgetExecutionData = {
  code: string;
  name: string;
  budget: number;
  budgetExecuted: number;
  budgetRemaining: number;
  budgetExecutionRate: number;
  budgetCarryoverAmount: number;
  budgetCarryoverRate: number;
  amountPaid: number;
  unpaidAmount: number;
};

// コンポーネントのプロパティの型定義
type BudgetExecutionTableProps = {
  data: BudgetExecutionData[];
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 予算執行テーブルコンポーネント
const BudgetExecutionTable: React.FC<BudgetExecutionTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>予算執行コード</th>
          <th>予算執行名称</th>
          <th>予算額(円)</th>
          <th>消費税額(円)</th>
          <th>税込額(円)</th>
          <th>税抜額(千円)</th>
          <th>消費税額(千円)</th>
          <th>税込額(千円)</th>
          <th>支払未済額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.budget.toLocaleString()}</td>
            <td>{item.budgetExecuted.toLocaleString()}</td>
            <td>{item.budgetRemaining.toLocaleString()}</td>
            <td>{(item.budget / 1000).toLocaleString()}</td>
            <td>{(item.budgetExecuted / 1000).toLocaleString()}</td>
            <td>{(item.budgetRemaining / 1000).toLocaleString()}</td>
            <td>{item.unpaidAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: BudgetExecutionData[] = [
  {
    code: '001',
    name: '公共下水道事業収益',
    budget: 866624415,
    budgetExecuted: 20687544,
    budgetRemaining: 907311959,
    budgetExecutionRate: 0,
    budgetCarryoverAmount: 0,
    budgetCarryoverRate: 0,
    amountPaid: 907311959,
    unpaidAmount: 0,
  },
  {
    code: '002',
    name: '特定公共下水道事業収益',
    budget: 133931261,
    budgetExecuted: 4718362,
    budgetRemaining: 138649623,
    budgetExecutionRate: 0,
    budgetCarryoverAmount: 0,
    budgetCarryoverRate: 0,
    amountPaid: 138649623,
    unpaidAmount: 0,
  },
  // 他のサンプルデータ...
];

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  return (
    <div>
      <h2>予算執行データ</h2>
      <BudgetExecutionTable data={sampleData} />
    </div>
  );
};

export default UsageExample;