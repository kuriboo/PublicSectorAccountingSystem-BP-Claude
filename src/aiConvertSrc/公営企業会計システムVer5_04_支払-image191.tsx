import React from 'react';
import styled from '@emotion/styled';

interface RevenueDataProps {
  date: string;
  time: string;
  amount: number;
  paymentMethod: string;
  note: string;
}

interface RevenueTableProps {
  data: RevenueDataProps[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    tr {
      border-bottom: 3px solid #ddd;
    }
  }
`;

const RevenueTable: React.FC<RevenueTableProps> = ({ data }) => {
  // 収支データの合計を計算
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Table>
      <thead>
        <tr>
          <th>日付</th>
          <th>時刻</th>
          <th>金額</th>
          <th>支払方法</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.amount}</td>
            <td>{item.paymentMethod}</td>
            <td>{item.note}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>合計金額</td>
          <td>{totalAmount}</td>
          <td colSpan={2}></td>
        </tr>
      </tfoot>
    </Table>
  );
};

// サンプルデータ
const sampleData: RevenueDataProps[] = [
  {
    date: '平成29年5月13日',
    time: '13:00',
    amount: 1000,
    paymentMethod: '他会計振替金利息',
    note: '',
  },
];

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>収支内容照会（明細）</h2>
      <RevenueTable data={sampleData} />
    </div>
  );
};

export default SampleUsage;