import React from 'react';
import styled from '@emotion/styled';

interface BudgetData {
  date: string;
  department: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
}

interface BudgetTableProps {
  data: BudgetData[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const BudgetTable: React.FC<BudgetTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No budget data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>年度</th>
          <th>支出決定番号</th>
          <th>支出科目</th>
          <th>貨幣単位</th>
          <th>税抜</th>
          <th>消費税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.department}</td>
            <td>{row.amount.toLocaleString()}</td>
            <td>{row.taxAmount.toLocaleString()}</td>
            <td>{row.totalAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: BudgetData[] = [
  {
    date: '平成29',
    department: '潤設仮勘定',
    amount: 43000,
    taxAmount: 39297,
    totalAmount: 3703,
  },
  // Add more sample data...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Budget Table</h1>
      <BudgetTable data={sampleData} />
    </div>
  );
};

export default App;