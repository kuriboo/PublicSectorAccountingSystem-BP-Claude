import React from 'react';
import styled from '@emotion/styled';

type PaymentInfo = {
  date: string;
  account: string;
  amount: number;
  tax: number;
};

type PaymentDetailsProps = {
  paymentInfo: PaymentInfo;
};

const PaymentDetailsWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const PaymentDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const PaymentBreakdownTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ paymentInfo }) => {
  // 支払情報が存在しない場合は空のコンポーネントを返す
  if (!paymentInfo) {
    return null;
  }

  const { date, account, amount, tax } = paymentInfo;

  return (
    <PaymentDetailsWrapper>
      <PaymentDetailsTable>
        <tbody>
          <tr>
            <th>調定日</th>
            <td>{date}</td>
            <th>収納日</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>納入期限</th>
            <td>{date}</td>
            <th>収納日</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td>他会計振付金利息</td>
          </tr>
          <tr>
            <th>債務者</th>
            <td>{account}</td>
            <th>株式会社 ざぶらい</th>
            <td></td>
          </tr>
        </tbody>
      </PaymentDetailsTable>
      <PaymentBreakdownTable>
        <thead>
          <tr>
            <th>調定科目</th>
            <th>調定細節</th>
            <th>調定理由</th>
            <th>税</th>
            <th>調定金額</th>
            <th>内消費税額</th>
            <th>特定収入</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>他会計振付金利息</td>
            <td>他会計振付金利息0</td>
            <td>他会計振付金利息0</td>
            <td>非</td>
            <td>{amount.toLocaleString()}</td>
            <td>{tax.toLocaleString()}</td>
            <td>0</td>
          </tr>
        </tbody>
      </PaymentBreakdownTable>
    </PaymentDetailsWrapper>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const samplePaymentInfo: PaymentInfo = {
    date: '平成29年05月30日',
    account: '0000000000',
    amount: 1000,
    tax: 0,
  };

  return (
    <div>
      <h1>Payment Details Example</h1>
      <PaymentDetails paymentInfo={samplePaymentInfo} />
    </div>
  );
};

export default App;