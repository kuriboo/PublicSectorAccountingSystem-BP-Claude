import React from 'react';
import styled from '@emotion/styled';

type MaintenanceHistoryItemProps = {
  date: string;
  type: string;
  detail: string;
  amount: number;
};

type MaintenanceHistoryProps = {
  items: MaintenanceHistoryItemProps[];
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
    background-color: #f2f2f2;
  }
`;

const MaintenanceHistoryItem: React.FC<MaintenanceHistoryItemProps> = ({ date, type, detail, amount }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{type}</td>
      <td>{detail}</td>
      <td>{amount.toLocaleString()}</td>
    </tr>
  );
};

const MaintenanceHistory: React.FC<MaintenanceHistoryProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>修繕日</th>
          <th>修繕種別</th>
          <th>修繕内容</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <MaintenanceHistoryItem key={index} {...item} />
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const MaintenanceHistoryExample: React.FC = () => {
  const sampleData: MaintenanceHistoryProps = {
    items: [
      { date: '2022/07/25', type: '半年点検', detail: '昇降機点検', amount: 60500 },
    ]
  };

  return (
    <div>
      <h2>修繕履歴</h2>
      <MaintenanceHistory items={sampleData.items} />
    </div>
  );
};

export default MaintenanceHistoryExample;