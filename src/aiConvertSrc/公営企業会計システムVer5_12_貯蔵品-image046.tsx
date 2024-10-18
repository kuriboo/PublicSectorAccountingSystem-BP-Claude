import React from 'react';
import styled from '@emotion/styled';

interface MonthlyReservationData {
  month: string;
  incomingAmount: number;
  outgoingAmount: number;
  balance: number;
  cumulativeBalance: number;
}

interface MonthlyReservationProps {
  data: MonthlyReservationData[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const MonthlyReservation: React.FC<MonthlyReservationProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>年月</th>
          <th>入庫数</th>
          <th>入庫金額</th>
          <th>出庫数</th>
          <th>仮出庫数</th>
          <th>出庫金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.month}</td>
            <td>{item.incomingAmount.toLocaleString()}</td>
            <td>{item.outgoingAmount.toLocaleString()}</td>
            <td>{item.balance.toLocaleString()}</td>
            <td>{item.cumulativeBalance.toLocaleString()}</td>
            <td>{item.cumulativeBalance.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: MonthlyReservationData[] = [
    {
      month: '6 2023',
      incomingAmount: 0,
      outgoingAmount: 0, 
      balance: 0,
      cumulativeBalance: 0,
    },
  ];

  return (
    <div>
      <h1>Monthly Reservation</h1>
      <MonthlyReservation data={sampleData} />
    </div>
  );
};

export default App;