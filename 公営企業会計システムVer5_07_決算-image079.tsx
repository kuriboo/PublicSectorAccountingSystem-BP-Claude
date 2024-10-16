import React from 'react';
import styled from '@emotion/styled';

type ReceiptData = {
  receiptId: string;
  division: string;
  registrationDate: string;
  customerId: string;
  paymentDate: string;
  amount: number;
};

type Props = {
  data: ReceiptData[];
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

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ReceiptTable: React.FC<Props> = ({ data }) => {
  // データが空の場合は空のテーブルを表示
  if (!data || data.length === 0) {
    return <Table><tbody><tr><td>No data</td></tr></tbody></Table>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>収入区分</th>
          <th>収入区分(修正前)</th>
          <th>伝票区分</th>
          <th>決定番号</th>
          <th>明細番号</th>
          <th>予算科目コード</th>
          <th>予算科目名称</th>
        </tr>
      </thead>
      <tbody>
        {data.map((receipt, index) => (
          <tr key={index}>
            <td>{receipt.receiptId}</td>
            <td>{receipt.division}</td>
            <td>{receipt.registrationDate}</td>
            <td>{receipt.customerId}</td>
            <td>{receipt.paymentDate}</td>
            <td>{receipt.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const SampleData: ReceiptData[] = [
  {
    receiptId: '課税',
    division: '決定',
    registrationDate: '16653',
    customerId: '1',
    paymentDate: '0020101131010...',
    amount: 99999,
  },
  // 他のサンプルデータを追加...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>収入区分一覧表示</h1>
      <ReceiptTable data={SampleData} />
    </div>
  );
};

export default App;