// ElectronicSubscriptionTable.tsx
import React from 'react';
import styled from '@emotion/styled';

type Subscription = {
  name: string;
  category: string;
  contractDate: string;
  paymentCycle: string;
  targetArea: string;
  guarantee: string;
  price: number;
  paymentMethod: string;
  remarks: string;
};

type Props = {
  subscriptions: Subscription[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

const ElectronicSubscriptionTable: React.FC<Props> = ({ subscriptions }) => {
  if (!subscriptions || subscriptions.length === 0) {
    return <p>No subscriptions data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>電子決裁状況</th>
          <th>所属</th>
          <th>振替日</th>
          <th>種別</th>
          <th>依頼区分</th>
          <th>伝票No</th>
          <th>摘要</th>
          <th>締め</th>
          <th>発注</th>
          <th>人力額</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription, index) => (
          <tr key={index}>
            <td>{subscription.name}</td>
            <td>{subscription.category}</td>
            <td>{subscription.contractDate}</td>
            <td>{subscription.paymentCycle}</td>
            <td>{subscription.targetArea}</td>
            <td>{subscription.guarantee}</td>
            <td>{subscription.price}</td>
            <td>{subscription.paymentMethod}</td>
            <td>{subscription.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const subscriptionData: Subscription[] = [
  {
    name: '決裁完了',
    category: '予算権限',
    contractDate: '02/03/12',
    paymentCycle: '10人',
    targetArea: '関西圏内',
    guarantee: '129',
    price: 129000,
    paymentMethod: '済',
    remarks: '未',
  },
  // Add more subscription data...
];

const App: React.FC = () => {
  return (
    <div>
      <h2>Electronic Subscription Table</h2>
      <ElectronicSubscriptionTable subscriptions={subscriptionData} />
    </div>
  );
};

export default App;