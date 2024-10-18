import React from 'react';
import styled from 'styled-components';

// 予算項目の型定義
type BudgetItem = {
  id: string;
  budgetCode: string;
  budgetName: string;
  deptCode: string;
  deptName: string;
  amount1: number;
  amount2: number;
};

// コンポーネントのプロパティの型定義
type BudgetAllocationSystemProps = {
  items: BudgetItem[];
};

// テーブルのスタイル定義
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
`;

// 予算配分金額の合計を計算する関数
const calculateTotalAmount = (items: BudgetItem[], key: 'amount1' | 'amount2'): number => {
  return items.reduce((sum, item) => sum + item[key], 0);
};

// 予算配分システムのコンポーネント
const BudgetAllocationSystem: React.FC<BudgetAllocationSystemProps> = ({ items }) => {
  // 予算配分金額の合計を計算
  const totalAmount1 = calculateTotalAmount(items, 'amount1');
  const totalAmount2 = calculateTotalAmount(items, 'amount2');

  return (
    <div>
      <h2>科目別事務費按分準備処理</h2>
      <Table>
        <thead>
          <tr>
            <th>予算コード</th>
            <th>予算名称</th>
            <th>予算項目</th>
            <th>事業コード</th>
            <th>事業名称</th>
            <th>金額1</th>
            <th>金額2</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.budgetCode}</td>
              <td>{item.budgetName}</td>
              <td>{item.deptCode}</td>
              <td>{item.deptName}</td>
              <td>{item.amount1.toLocaleString()}</td>
              <td>{item.amount2.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>
        金額1: {totalAmount1.toLocaleString()}
        <br />
        金額2: {totalAmount2.toLocaleString()}
      </p>
    </div>
  );
};

export default BudgetAllocationSystem;

// 使用例
const sampleData: BudgetItem[] = [
  {
    id: '1',
    budgetCode: '1A23',
    budgetName: '資本的支出',
    deptCode: '04',
    deptName: '建設改良費',
    amount1: 1329704,
    amount2: 0,
  },
  {
    id: '2',
    budgetCode: '1A23',
    budgetName: '資本的支出',
    deptCode: '50',
    deptName: '新橋築造',
    amount1: 185284727,
    amount2: 0,
  },
  // ...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>予算配分システム</h1>
      <BudgetAllocationSystem items={sampleData} />
    </div>
  );
};