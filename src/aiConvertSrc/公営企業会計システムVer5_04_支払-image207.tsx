import React from 'react';
import styled from '@emotion/styled';

interface DealConfirmationData {
  date: string;
  customerName: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  deposit: number;
  tax: number;
  memo: string;
  paymentMethod: string;
  paymentDate: string;
}

interface DealConfirmationProps {
  data: DealConfirmationData;
}

const DealConfirmationWrapper = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
    }

    th {
      background-color: #f0f0f0;
      text-align: left;
    }
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .auto-setting {
    white-space: pre-line;
  }

  .price-summary {
    margin-top: 20px;
    text-align: right;

    p {
      margin: 5px 0;
    }
  }
`;

const DealConfirmation: React.FC<DealConfirmationProps> = ({ data }) => {
  const {
    date,
    customerName,
    productName,
    unitPrice,
    quantity,
    totalPrice,
    deposit,
    tax,
    memo,
    paymentMethod,
    paymentDate,
  } = data;

  return (
    <DealConfirmationWrapper>
      <h2>令和0年度</h2>
      <div className="content-wrapper">
        <table>
          <tbody>
            <tr>
              <th>前払金処理日</th>
              <td>{date}</td>
            </tr>
            <tr>
              <th>起案所属</th>
              <td>料金課001</td>
            </tr>
            <tr>
              <th>起案者</th>
              <td>龍貞□</td>
            </tr>
            <tr>
              <th>摘要</th>
              <td>{memo}</td>
            </tr>
            <tr>
              <th>相手先</th>
              <td>{customerName}</td>
            </tr>
          </tbody>
        </table>
        <div className="auto-setting">
          自由設定内容
          自設定1
          自設定2
          ああああ
          ああああ
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>仕訳節</th>
            <th>営業節抜き</th>
            <th>仕訳細節</th>
            <th>仕訳明細</th>
            <th>資金前渡額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>営業前払金</td>
            <td>営業前払金</td>
            <td>営業前払金</td>
            <td>営業前払金</td>
            <td>¥{deposit.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="price-summary">
        <p>資金前渡額: ¥{deposit.toLocaleString()}</p>
      </div>
    </DealConfirmationWrapper>
  );
};

// Usage example
const sampleData: DealConfirmationData = {
  date: '令和0年02月01日',
  customerName: '株式 太郎',
  productName: '商品名',
  unitPrice: 1000,
  quantity: 10,
  totalPrice: 10000,
  deposit: 91000,
  tax: 10,
  memo: '資金前渡依頼 資金前渡依頼 No2',
  paymentMethod: '現金',
  paymentDate: '令和 太郎',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Deal Confirmation</h1>
      <DealConfirmation data={sampleData} />
    </div>
  );
};

export default App;