import React from 'react';
import styled from 'styled-components';

// 契約内容を表す型定義
type ContractDetail = {
  設計: number;
  契約: number;
  契約変更: number;
  予定・負担番号: string;
  本体金額: number;
  税抜金額: number;
  消費税額: number;
  完了予定日: string;
  処理年月日: string;
};

// 支払内容を表す型定義
type Payment = {
  支払済額: number;
  内前払額: number;
  未払払額: number;
};

// コンポーネントのプロパティを表す型定義
type ContractSummaryProps = {
  contractDetails: ContractDetail[];
  payments: Payment[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// ボタンのスタイル定義
const Button = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

// 契約内容サマリーコンポーネント
const ContractSummary: React.FC<ContractSummaryProps> = ({ contractDetails, payments }) => {
  // 契約内容がない場合は空の配列を使用
  const details = contractDetails.length > 0 ? contractDetails : [
    {
      設計: 0,
      契約: 0,
      契約変更: 0,
      予定・負担番号: '',
      本体金額: 0,
      税抜金額: 0,    
      消費税額: 0,
      完了予定日: '',
      処理年月日: '',
    },
  ];

  // 支払内容がない場合は空のオブジェクトを使用
  const payment = payments.length > 0 ? payments[0] : {
    支払済額: 0,
    内前払額: 0,  
    未払払額: 0,
  };

  return (
    <div>
      <h2>契約内容</h2>
      <Table>
        <thead>
          <tr>
            <th>設計</th>
            <th>契約</th>
            <th>契約変更</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.設計}</td>
              <td>{detail.契約}</td>
              <td>{detail.契約変更}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>予定・負担番号</th>
            <td>{details[0].予定・負担番号}</td>
          </tr>
          <tr>
            <th>本体金額</th>
            <td>{details[0].本体金額}</td>
          </tr>
          <tr>
            <th>税抜金額</th>
            <td>{details[0].税抜金額}</td>
          </tr>
          <tr>
            <th>消費税額</th>
            <td>{details[0].消費税額}</td>
          </tr>
          <tr>
            <th>完了予定日</th>
            <td>{details[0].完了予定日}</td>
          </tr>
          <tr>
            <th>処理年月日</th>
            <td>{details[0].処理年月日}</td>
          </tr>
        </tbody>
      </Table>

      <h2>支払済額</h2>  
      <p>支払済額: {payment.支払済額}</p>
      <p>内前払額: {payment.内前払額}</p>
      <p>未払払額: {payment.未払払額}</p>

      <Button>キャンセル</Button>
    </div>
  );
};

// サンプルデータ
const sampleContractDetails: ContractDetail[] = [
  {
    設計: 100,
    契約: 200,
    契約変更: 0,
    予定・負担番号: 'ABC123',
    本体金額: 1000000,
    税抜金額: 900000,
    消費税額: 100000,
    完了予定日: '2023年12月31日',
    処理年月日: '2023年06月01日',
  },
];

const samplePayments: Payment[] = [
  {
    支払済額: 500000,
    内前払額: 200000,  
    未払払額: 300000,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>契約内容サマリー</h1>
      <ContractSummary
        contractDetails={sampleContractDetails}
        payments={samplePayments}
      />
    </div>
  );
};

export default App;