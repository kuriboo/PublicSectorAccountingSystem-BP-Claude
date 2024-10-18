import React from 'react';
import styled from '@emotion/styled';

type Order = {
  id: string;
  date: string;
  customer: string;
  total: number;
};

type OrderTableProps = {
  orders: Order[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>注文情報</th>
          <th>単価</th>
          <th>単位</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customer}</td>
            <td>{order.total}</td>
            <td>0001</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const SampleOrderTable: React.FC = () => {
  const sampleOrders: Order[] = [
    { id: '00201011', date: '2020/10/11', customer: '原沢 康浩株式会社', total: 1 }
  ];

  return (
    <div>
      <h2>注文表</h2>
      {sampleOrders.length > 0 ? (
        <OrderTable orders={sampleOrders} />
      ) : (
        <p>注文データがありません。</p>
      )}
    </div>
  );
};

export default SampleOrderTable;