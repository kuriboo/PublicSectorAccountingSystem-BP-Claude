import React from 'react';
import styled from 'styled-components';

// 予算区分の型定義
type BudgetCategory = {
  id: number;
  name: string;
  lastYearResult?: number;
  currentYearBudget?: number;
  currentYearExpected?: number;
  nextYearBudget?: number;
  yearAfterNextBudget?: number;
  finalYearBudget?: number;
};

// テーブルのセル用コンポーネント
const TableCell = styled.td<{ align?: 'left' | 'right' }>`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: ${({ align }) => align || 'right'};
`;

// テーブルのヘッダー用コンポーネント
const TableHeader = styled.th<{ align?: 'left' | 'right' }>`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: ${({ align }) => align || 'left'};
  background-color: #f2f2f2;
  font-weight: bold;
`;

// 予算区分テーブルコンポーネント
const BudgetTable: React.FC<{ data: BudgetCategory[] }> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader>予算区分</TableHeader>
          <TableHeader>項目</TableHeader>
          <TableHeader>前年度実績</TableHeader>
          <TableHeader>当年度予算</TableHeader>
          <TableHeader>当年度予想</TableHeader>
          <TableHeader>翌年度予算</TableHeader>
          <TableHeader>翌々年度予算</TableHeader>
          <TableHeader>最終年度予算</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((category) => (
          <tr key={category.id}>
            <TableCell align="left">{category.name}</TableCell>
            <TableCell>{category.lastYearResult || '-'}</TableCell>
            <TableCell>{category.currentYearBudget || 0}</TableCell>
            <TableCell>{category.currentYearExpected || 0}</TableCell>
            <TableCell>{category.nextYearBudget || 0}</TableCell>
            <TableCell>{category.yearAfterNextBudget || 0}</TableCell>
            <TableCell>{category.finalYearBudget || 0}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// サンプルデータ
const sampleData: BudgetCategory[] = [
  {
    id: 1,
    name: '3条特別販売費',
    lastYearResult: 196114,
    currentYearBudget: 0,
    currentYearExpected: 0,
    nextYearBudget: 9786,
    yearAfterNextBudget: 0,
    finalYearBudget: 6315383815,
  },
  {
    id: 2,
    name: '4条特別販売費',
    lastYearResult: 148231247,
    currentYearBudget: 0,
    currentYearExpected: 0,
    nextYearBudget: 0,
    yearAfterNextBudget: 0,
    finalYearBudget: 148231247,
  },
  // ... その他のデータ
];

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>予算区分・項目別表</h2>
      <BudgetTable data={sampleData} />
    </div>
  );
};

export default App;