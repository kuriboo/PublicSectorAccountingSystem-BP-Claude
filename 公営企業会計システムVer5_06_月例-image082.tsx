以下は、指定された要件に基づいて生成されたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 仕入税額控除判定要件取引別修正入力のプロパティ型
type TaxDeductionCriteriaProps = {
  taxRate: number;
  from: string;
  to: string;
  reason: string;
  paymentMethod: string;
  transactionDetails: Array<{
    id: number;
    date: string;
    account: string;
    description: string;
    amount: number;
  }>;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

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

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 仕入税額控除判定要件取引別修正入力コンポーネント
const TaxDeductionCriteria: React.FC<TaxDeductionCriteriaProps> = ({
  taxRate,
  from,
  to,
  reason,
  paymentMethod,
  transactionDetails,
}) => {
  return (
    <Container>
      <h2>仕入税額控除判定要件取引別修正入力</h2>
      <p>
        税率: {taxRate}％<br />
        伝票日付: {from} ～ {to}<br /> 
        摘要検索: {reason}<br />
        支払方法: {paymentMethod}
      </p>
      <Table>
        <thead>
          <tr>
            <th>通番</th>
            <th>勘定科目</th>
            <th>摘要</th>
            <th>伝票日付</th>
            <th>相手先</th>
            <th>税込金額</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map((detail) => (
            <Row key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.account}</td>
              <td>{detail.description}</td>
              <td>{detail.date}</td>
              <td>ぎょうせい書籍</td>
              <td>{detail.amount.toLocaleString()}円</td>
            </Row>
          ))}
        </tbody>
      </Table>
      <p>
        <label>
          相手先検索 <Input type="text" placeholder="検索キーワードを入力" />
        </label>
        <Button>検索</Button>
      </p>
    </Container>
  );
};

export default TaxDeductionCriteria;

// 使用例
const SampleData: TaxDeductionCriteriaProps = {
  taxRate: 80,
  from: '令和05年10月01日',
  to: '令和05年10月30日',
  reason: '交通費',
  paymentMethod: '現金',
  transactionDetails: [
    {
      id: 1, 
      date: '2023/10/30',
      account: 'ぎょうせい書籍',
      description: '10,000書籍用品の購入',
      amount: 10000,    
    },
    {
      id: 2,
      date: '2023/10/02',
      account: 'ぎょうせい日用品',
      description: '10,000書籍用品の購入',  
      amount: 10000,
    },
    {
      id: 3,
      date: '2023/10/02', 
      account: 'ぎょうせい工務品',
      description: '1,100,000配水管布設工事', 
      amount: 1100000,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>仕入税額控除判定要件取引別修正入力 サンプル</h1>
      <TaxDeductionCriteria {...SampleData} />
    </div>
  );  
};