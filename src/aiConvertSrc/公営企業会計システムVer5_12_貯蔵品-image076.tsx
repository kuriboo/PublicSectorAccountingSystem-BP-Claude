以下は、画像を元に生成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface OrderDetail {
  id: string;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  discountCode: string;
  discountAmount: number;
}

interface BillingDetailProps {
  orderDate: string;
  dueDate: string;
  billingPeriod: string;
  total: number;
  subtotal: number;
  tax: number;
  orderDetails: OrderDetail[];
  paymentMethod: '全品番' | '指定品番';
}

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// コンポーネント
const BillingDetail: React.FC<BillingDetailProps> = ({
  orderDate,
  dueDate,
  billingPeriod,
  total,
  subtotal,
  tax,
  orderDetails,
  paymentMethod,
}) => {
  return (
    <Container>
      <h2>御請求書</h2>
      <p>発行日: {orderDate}</p>
      <p>締日: {dueDate}</p>
      <p>請求期間: {billingPeriod}</p>
      
      <Table>
        <thead>
          <tr>
            <th>品番</th>
            <th>品名</th>
            <th>数量</th>
            <th>単価</th>
            <th>小計</th>
            <th>値引コード</th>
            <th>値引</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map(detail => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.name}</td>
              <td>{detail.quantity}</td>
              <td>{detail.price.toLocaleString()}</td>
              <td>{detail.subtotal.toLocaleString()}</td>
              <td>{detail.discountCode}</td>
              <td>{detail.discountAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p>明細合計: {subtotal.toLocaleString()}</p> 
      <p>消費税: {tax.toLocaleString()}</p>
      <p>御請求金額: {total.toLocaleString()}</p>
      <p>明細書: {paymentMethod === '全品番' ? '全品番' : '指定品番'}</p>
    </Container>
  );
};

export default BillingDetail;

// 使用例
const sampleData: BillingDetailProps = {
  orderDate: '平成29年06月25日',
  dueDate: '平成29年06月15日',
  billingPeriod: '000001',
  total: 1234575.0,
  subtotal: 1234575.0,
  tax: 98766.0,
  orderDetails: [
    {
      id: '0000701001',
      name: '国水糊芸',
      quantity: 200,
      price: 1.0,
      subtotal: 1.0,
      discountCode: '000001',
      discountAmount: 0.0,
    },
    // 他のオーダー詳細...
  ],
  paymentMethod: '全品番',
};

const BillingDetailExample = () => (
  <BillingDetail {...sampleData} />  
);