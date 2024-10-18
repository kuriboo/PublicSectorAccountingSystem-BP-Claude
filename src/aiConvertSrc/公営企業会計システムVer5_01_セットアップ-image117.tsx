import React from 'react';
import styled from 'styled-components';

// 費用構成表の行を表すコンポーネントの型定義
type ExpenseItemProps = {
  expenseName: string;
  expenseAmount: number;
};

// 費用構成表の行を表すコンポーネント
const ExpenseItem: React.FC<ExpenseItemProps> = ({ expenseName, expenseAmount }) => {
  return (
    <ExpenseItemWrapper>
      <ExpenseName>{expenseName}</ExpenseName>
      <ExpenseAmount>{expenseAmount}円</ExpenseAmount>
    </ExpenseItemWrapper>
  );
};

// 費用構成表コンポーネントの型定義
type ExpenseSummaryProps = {
  expenses: ExpenseItemProps[];
};

// 費用構成表コンポーネント
const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  return (
    <ExpenseSummaryWrapper>
      <Title>費用構成表</Title>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expenseName={expense.expenseName} expenseAmount={expense.expenseAmount} />
      ))}
    </ExpenseSummaryWrapper>
  );
};

// スタイリング
const ExpenseSummaryWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ExpenseItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ExpenseName = styled.span`
  font-weight: bold;
`;

const ExpenseAmount = styled.span`
  color: #666;
`;

// 使用例
const App: React.FC = () => {
  const expenses: ExpenseItemProps[] = [
    { expenseName: '運用構成業務費', expenseAmount: 1 },
    { expenseName: '運用構成委託費', expenseAmount: 2 },
    { expenseName: '合計明細区分', expenseAmount: 0 },
    { expenseName: '合計明細区分', expenseAmount: 0 },
  ];

  return (
    <div>
      <ExpenseSummary expenses={expenses} />
    </div>
  );
};

export default App;