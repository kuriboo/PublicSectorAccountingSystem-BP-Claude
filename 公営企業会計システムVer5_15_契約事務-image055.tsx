import React from 'react';
import styled from 'styled-components';

// 支払明細の型定義
type PaymentDetail = {
  date: string;
  paymentMethod: string;
  change: number;
  consumptionTax: number;
  subtotal: number;
  total: number;
};

// 支払明細コンポーネントのプロパティ型定義
type PaymentDetailsProps = {
  details: PaymentDetail[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

// 支払明細コンポーネント
const PaymentDetails: React.FC<PaymentDetailsProps> = ({ details }) => {
  // 支払明細がない場合の処理
  if (!details || details.length === 0) {
    return <p>支払明細がありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>支払日</th>
          <th>支払回数</th>
          <th>支払内容</th>
          <th>消費税率</th>
          <th>税計額(税抜)</th>
          <th>税計額(税込)</th>
          <th>支払額(税抜)</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index}>
            <td>{detail.date}</td>
            <td>{index + 1}</td>
            <td>{detail.paymentMethod}</td>
            <td>{detail.change}</td>
            <td>{detail.subtotal.toLocaleString()}</td>
            <td>{(detail.subtotal + detail.consumptionTax).toLocaleString()}</td>
            <td>{detail.total.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleDetails: PaymentDetail[] = [
  {
    date: '平成29年09月08日',
    paymentMethod: '当初',
    change: 8,
    consumptionTax: 3218200,
    subtotal: 2979817,
    total: 2777778,
  },
  {
    date: '平成29年09月08日',
    paymentMethod: '変更変更',
    change: 8,
    consumptionTax: 4164480,
    subtotal: 3856000,
    total: 3584524,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>支払明細</h2>
      <PaymentDetails details={sampleDetails} />
    </div>
  );
};

export default App;