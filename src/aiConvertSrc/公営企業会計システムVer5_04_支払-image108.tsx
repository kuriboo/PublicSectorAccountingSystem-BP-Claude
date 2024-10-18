import React from 'react';
import styled from '@emotion/styled';

type ExpenseItem = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

type ExpenseTableProps = {
  items: ExpenseItem[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const Container = styled.div`
  overflow-x: auto;
`;

const ExpenseTable: React.FC<ExpenseTableProps> = ({ items }) => {
  if (!items.length) {
    return <p>No expense items.</p>;
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>選択</th>
            <th>電子決裁状況</th>
            <th>支払先</th>
            <th>摘要</th>
            <th>決定額</th>
            <th>支払日</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /></td>
              <td>電子決裁済</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const expenseItems: ExpenseItem[] = [
    { id: 1, name: 'テストシナリオ17', amount: 17000, date: '03/09/20 03/10/01' },  
    { id: 2, name: 'テストシナリオ22(前払い)', amount: 22000, date: '03/09/20 03/10/01' },
    { id: 3, name: '撮らシナリオ30', amount: 30000, date: '03/09/20 03/10/01' },
    { id: 4, name: '撮らシナリオ30', amount: 30000, date: '03/09/20 03/10/01' },
  ];

  return (
    <div>
      <h1>振替伝票決裁確定</h1>
      <ExpenseTable items={expenseItems} />
    </div>
  );
};

export default App;