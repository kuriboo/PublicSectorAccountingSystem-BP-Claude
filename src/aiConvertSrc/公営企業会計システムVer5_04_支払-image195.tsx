import React from 'react';
import styled from 'styled-components';

type Expense = {
  id: number;
  date: string;
  category: string;
  item: string;
  amount: number;
  paymentMethod: string;
  shop: string;
  memo: string;
};

type ExpenseTableProps = {
  expenses: Expense[];
};

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>日付</HeaderCell>
            <HeaderCell>支払先</HeaderCell>
            <HeaderCell>金額</HeaderCell>
            <HeaderCell>支払手段</HeaderCell>
            <HeaderCell>メモ</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.shop}</TableCell>
              <TableCell>{expense.amount.toLocaleString()}円</TableCell>
              <TableCell>{expense.paymentMethod}</TableCell>
              <TableCell>{expense.memo}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// Styling with CSS-in-JS
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const HeaderRow = styled.tr`
  background-color: #f2f2f2;
`;

const HeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
`;

// Sample data and usage
const sampleExpenses: Expense[] = [
  {
    id: 1,
    date: '02/09/12',
    category: '食費',
    item: '昼食',
    amount: 690,
    paymentMethod: '済 未 済',
    shop: '@高速埼玉',
    memo: '',
  },
  {
    id: 2,
    date: '02/09/12',
    category: '食費',
    item: '夕食',
    amount: 637,
    paymentMethod: '済 未',
    shop: '@新所沢',
    memo: '',
  },
  // Add more sample expenses...
];

const ExpenseTableExample: React.FC = () => {
  return (
    <div>
      <h2>Expense Table Example</h2>
      <ExpenseTable expenses={sampleExpenses} />
    </div>
  );
};

export default ExpenseTableExample;