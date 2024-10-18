import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';

// 型定義
type Item = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  price: number;
};

type Props = {
  items: Item[];
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const TotalPrice = styled.div`
  margin-top: 16px;
  text-align: right;
  font-weight: bold;
`;

// コンポーネント定義
const OrderTable: React.FC<Props> = ({ items }) => {
  // 合計金額を計算
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container>
      <Title>取り消し確認</Title>
      <Table>
        <thead>
          <tr>
            <th>行No</th>
            <th>構成内容</th>
            <th>数量</th>
            <th>単価</th>
            <th>取消金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TotalPrice>取得金額計: {totalPrice}</TotalPrice>
    </Container>
  );
};

// サンプルデータ
const sampleItems: Item[] = [
  { id: 1, name: 'ポンプ', unitPrice: 2.0, quantity: 1, price: 12345 },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <OrderTable items={sampleItems} />
    </div>
  );
};

export default App;