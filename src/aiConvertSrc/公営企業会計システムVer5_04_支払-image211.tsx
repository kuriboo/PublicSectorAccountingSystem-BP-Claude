import React from 'react';
import styled from 'styled-components';

// 見積書の型定義
type EstimateType = {
  date: string;
  items: Array<{
    category: string;
    description: string;
    unitPrice: number;
    quantity: number;
    amount: number;
  }>;
  subTotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
};

// 見積書コンポーネント
const Estimate: React.FC<{ estimate: EstimateType }> = ({ estimate }) => {
  return (
    <EstimateWrapper>
      <EstimateHeader>
        <h2>御見積書</h2>
        <p>No. 201</p>
        <p>日付: {estimate.date}</p>
      </EstimateHeader>
      
      <EstimateTable>
        <thead>
          <tr>
            <th>区分</th>
            <th>品名</th>
            <th>単価</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {estimate.items.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.unitPrice.toLocaleString()}円</td>
              <td>{item.quantity}</td>
              <td>{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </EstimateTable>

      <EstimateSummary>
        <div>
          <span>小計</span>
          <span>{estimate.subTotal.toLocaleString()}円</span>
        </div>
        <div>
          <span>消費税率</span>
          <span>{estimate.taxRate}%</span>
        </div>
        <div>
          <span>消費税額</span>
          <span>{estimate.taxAmount.toLocaleString()}円</span>
        </div>
        <div>
          <span>御見積合計金額</span>  
          <span>{estimate.totalAmount.toLocaleString()}円</span>
        </div>
      </EstimateSummary>
      
    </EstimateWrapper>
  );
};

// スタイリング
const EstimateWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const EstimateHeader = styled.header`
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    text-align: right;
    margin-bottom: 0.5rem;
  }
`;

const EstimateTable = styled.table`
  width: 100%;
  margin-bottom: 2rem;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const EstimateSummary = styled.section`
  text-align: right;

  div {
    margin-bottom: 0.5rem;

    span:first-child {
      margin-right: 1rem;
    }    
  }
`;

// サンプルデータを使った表示用コンポーネント
const SampleEstimate = () => {
  const sampleData: EstimateType = {
    date: "令和5年4月20日",
    items: [
      { category: "工事", description: "水道事業収益", unitPrice: 488000, quantity: 1, amount: 488000 },
      { category: "工事", description: "下水道事業収益", unitPrice: 536800, quantity: 1, amount: 536800 },    
    ],
    subTotal: 1024800,
    taxRate: 10,
    taxAmount: 102480,
    totalAmount: 1127280,
  };

  return <Estimate estimate={sampleData} />;
};

export default SampleEstimate;