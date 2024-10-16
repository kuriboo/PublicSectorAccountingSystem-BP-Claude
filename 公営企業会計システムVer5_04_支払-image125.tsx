import React from 'react';
import styled from 'styled-components';

// 型定義
type BankStatementProps = {
  statement: {
    date: string;
    store: string;
    category: string;
    detail: string;
    amount: number;
    paymentDate: string;
    processingDate: string;
  }[];
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      margin-bottom: 16px;
    }
  }
`;

// コンポーネント
const BankStatement: React.FC<BankStatementProps> = ({ statement }) => {
  // 値が空の場合の処理
  if (!statement || statement.length === 0) {
    return <p>明細データがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>決定番号</th>
          <th>出金</th>
          <th>入金</th>
          <th>変更</th>
          <th>支払先</th>
          <th>摘要</th>
          <th>決定額</th>
          <th>支払確定日</th>
          <th>処理年月日</th>
        </tr>
      </thead>
      <tbody>
        {statement.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.store}</td>
            <td>{item.category}</td>
            <td>{item.detail}</td>
            <td>{item.amount}</td>
            <td>{item.paymentDate}</td>
            <td>{item.processingDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    date: '97',
    store: '0',
    category: '',
    detail: 'きょうせいコンサ',
    amount: 10000,
    paymentDate: '29/08/17',
    processingDate: '29/08/17',
  },
  {
    date: '98',
    store: '0',
    category: '',
    detail: '機器賃借料',
    amount: 25000,
    paymentDate: '29/08/17',
    processingDate: '29/08/17',
  },
  // 他のデータ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>銀行取引明細</h1>
      <BankStatement statement={sampleData} />
    </div>
  );
};

export default App;