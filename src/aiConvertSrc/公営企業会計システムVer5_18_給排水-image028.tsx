import React from 'react';
import styled from '@emotion/styled';

// 負担金一覧テーブルの型定義
type ExpenseTableProps = {
  expenses: {
    no: number;
    date: string;
    store: string;
    item: string;
    price: number;
    quantity: number;
    subtotal: number;
    personalExpense: number;
    groupExpense: number;
    note: string;
  }[];
};

// 負担金一覧テーブルコンポーネント
const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>番号</th>
            <th>日付</th>
            <th>店名</th>
            <th>品名</th>
            <th>単価</th>
            <th>数量</th>
            <th>金額</th>
            <th>個人負担金額</th>
            <th>団体負担金額</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.no}</td>
              <td>{expense.date}</td>
              <td>{expense.store}</td>
              <td>{expense.item}</td>
              <td>{expense.price.toLocaleString()}</td>
              <td>{expense.quantity}</td>
              <td>{expense.subtotal.toLocaleString()}</td>
              <td>{expense.personalExpense.toLocaleString()}</td>
              <td>{expense.groupExpense.toLocaleString()}</td>
              <td>{expense.note}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th,
    td {
      font-size: 12px;
      padding: 4px;
    }
  }
`;

// サンプルデータ
const sampleExpenses = [
  {
    no: 1,
    date: '26.5.26',
    store: '株式会社A商店',
    item: '弁当類一式',
    price: 135000,
    quantity: 1,
    subtotal: 135000,
    personalExpense: 1000,
    groupExpense: 3000,
    note: '',
  },
  // 他のデータを追加...
];

// 使用例
const ExpenseTableExample: React.FC = () => {
  return (
    <div>
      <h2>加入負担金等調定簿</h2>
      <ExpenseTable expenses={sampleExpenses} />
    </div>
  );
};

export default ExpenseTableExample;