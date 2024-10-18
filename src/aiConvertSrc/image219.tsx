import React from 'react';
import styled from '@emotion/styled';

// 支出履歴の型定義
type Expense = {
  date: string;
  time: string;
  category: string;
  price: number;
  payment: string;
  memo: string;
  storeName: string;
  address: string;
  pointUsed: number;
  deduction: number;
};

type ExpenseTableProps = {
  expenses: Expense[];
};

// テーブルコンポーネント
const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader>記録日</TableHeader>
            <TableHeader>種別</TableHeader>
            <TableHeader>伝票No</TableHeader>
            <TableHeader>予定額</TableHeader>
            <TableHeader>自担額</TableHeader>
            <TableHeader>前払金額</TableHeader>
            <TableHeader>戻入金額</TableHeader>
            <TableHeader>支出金額</TableHeader>
            <TableHeader>負担未払行額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.memo}</TableCell>
              <TableCell>{expense.price}</TableCell>
              <TableCell>{expense.payment}</TableCell>
              <TableCell></TableCell>
              <TableCell>{expense.pointUsed}</TableCell>
              <TableCell></TableCell>
              <TableCell>{expense.deduction}</TableCell>
              <TableCell>{expense.memo}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

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

const TableHeader = styled.th`
  white-space: nowrap;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  white-space: nowrap;
`;

// サンプルデータ
const sampleExpenses: Expense[] = [
  {
    date: '03/11/25',
    time: '予定',
    category: '',
    price: 50,
    payment: '100',
    memo: '指定',
    storeName: '',
    address: '',
    pointUsed: 100,
    deduction: 0,
  },
  {
    date: '03/11/25',
    time: '食費',
    category: '110',
    price: 100,
    payment: '',
    memo: '',
    storeName: '',
    address: '',
    pointUsed: 0,
    deduction: 100,
  },
  // 他のサンプルデータを追加
];

// 使用例
const ExpenseTableExample: React.FC = () => {
  return (
    <div>
      <h2>支出履歴</h2>
      <ExpenseTable expenses={sampleExpenses} />
    </div>
  );
};

export default ExpenseTableExample;