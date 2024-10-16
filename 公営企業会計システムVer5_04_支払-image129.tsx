import React from 'react';
import styled from '@emotion/styled';

type DivisionEntry = {
  branch: string;
  amount: number;
  remarks: string;
};

type Props = {
  date: string;
  fiscalYear: number;
  paymentDate: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  paymentAmount: number;
  divisionList: DivisionEntry[];
  totalAmount: number;
  bankCode: string;
  storeName: string;
  phoneNumber: string;
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;

  table {
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
  }

  .label {
    font-weight: bold;
  }
`;

const SupportPaymentDivision: React.FC<Props> = ({
  date,
  fiscalYear,
  paymentDate,
  bankName,
  accountType,
  accountNumber,
  paymentAmount,
  divisionList,
  totalAmount,
  bankCode,
  storeName,
  phoneNumber,
}) => {
  return (
    <Container>
      <h2>支払先分割入力</h2>
      <div>
        <span className="label">支払先:</span> {bankName}
      </div>
      <div>
        <span className="label">支払科目:</span> その他委託料-0006
      </div>
      <div>
        <span className="label">支払予定日:</span> {paymentDate}
      </div>
      <div>
        <span className="label">支払金額:</span> {paymentAmount.toLocaleString()}
      </div>
      <table>
        <thead>
          <tr>
            <th>番号</th>
            <th>分割支払先</th>
            <th>分割金額</th>
            <th>支払備考</th>
          </tr>
        </thead>
        <tbody>
          {divisionList.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.branch}</td>
              <td>{entry.amount.toLocaleString()}</td>
              <td>{entry.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <span className="label">合計:</span> {totalAmount.toLocaleString()}
      </div>
      <hr />
      <div>
        <span className="label">銀行名:</span> {bankName}
      </div>
      <div>
        <span className="label">支店名:</span> {storeName}
      </div>
      <div>
        <span className="label">預金種別:</span> {accountType}
      </div>
      <div>
        <span className="label">口座番号:</span> {accountNumber}
      </div>
      <div>
        <span className="label">名義人:</span> スズキイチロウ
      </div>
    </Container>
  );
};

// Usage example
const SampleData: Props = {
  date: '令和29年09月19日',
  fiscalYear: 28,
  paymentDate: '平成29年09月06日',
  bankName: '三菱東京UFJ銀行',
  accountType: '普通',
  accountNumber: '1111111',
  paymentAmount: 30000,
  divisionList: [
    { branch: '一郎', amount: 10000, remarks: '三菱東京UFJ銀行　新宿西口支店' },
    { branch: '次郎', amount: 10000, remarks: 'みずほ銀行　市ヶ谷駅前支店' },
    { branch: '三郎', amount: 10000, remarks: 'りそな銀行　代官町支店' },
  ],
  totalAmount: 30000,
  bankCode: '0005551',
  storeName: '新宿西口支店',
  phoneNumber: '111-1111',
};

const App: React.FC = () => {
  return <SupportPaymentDivision {...SampleData} />;
};

export default App;