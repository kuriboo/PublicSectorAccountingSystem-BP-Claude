import React from 'react';
import styled from '@emotion/styled';

type PaymentAllocation = {
  no: string;
  paymentCode: string;
  amount: number;
  allocationNumber: number;
};

type PaymentAllocationTableProps = {
  data: PaymentAllocation[];
};

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

const PaymentAllocationTable: React.FC<PaymentAllocationTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>支付明细数据为空</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>受付区分</th>
          <th>所属コード</th>
          <th>所属</th>
          <th>受付番号</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.no}</td>
            <td>{item.paymentCode}</td>
            <td>{item.amount}</td>
            <td>{item.allocationNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleData: PaymentAllocation[] = [
    {
      no: '受託',
      paymentCode: '00000000',
      amount: 42820013,
      allocationNumber: 1,
    },
  ];

  return (
    <div>
      <h1>所属別受付番号付番管理</h1>
      <PaymentAllocationTable data={sampleData} />
    </div>
  );
};

export default App;