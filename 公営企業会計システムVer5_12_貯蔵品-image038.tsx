import React from 'react';
import styled from 'styled-components';

// 型定義
type OutgoingOrderProps = {
  orderId: string;
  orderDate: string;
  dueDate: string;
  productCode: string;
  productName: string;
  taxCategory: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  taxAmount: number;
  amount: number;
};

// スタイル定義
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
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

// コンポーネント定義
const OutgoingOrder: React.FC<OutgoingOrderProps> = ({
  orderId,
  orderDate,
  dueDate,
  productCode,
  productName,
  taxCategory,
  quantity,
  unitPrice,
  taxRate,
  taxAmount,
  amount,
}) => {
  return (
    <Container>
      <h2>出庫予定入力</h2>
      <p>
        総出庫: {quantity} 予算・会計担当 ぎょうせい太郎<br />
        平成29年09月19日
      </p>
      <p>
        処理年月日: {orderDate} 年度: {dueDate}
      </p>
      <p>所属: 排出水及び浄生工分所測定業務委託 排出水及び浄生工分所</p>
      <p>
        明細編集: <button>行削除</button>
      </p>
      <Table>
        <thead>
          <tr>
            <TableHeader>品番</TableHeader>
            <TableHeader>品名</TableHeader>
            <TableHeader>規格</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>出庫予定日</TableHeader>
            <TableHeader>単価</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>{productCode}</TableCell>
            <TableCell>{productName}</TableCell>
            <TableCell>{taxCategory}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>本</TableCell>
            <TableCell>{dueDate}</TableCell>
            <TableCell>{unitPrice.toLocaleString()}</TableCell>
            <TableCell>{amount.toLocaleString()}</TableCell>
          </tr>
        </tbody>
      </Table>
      <p>
        小計: {amount.toLocaleString()} 税率: {taxRate}% 消費税等: {taxAmount.toLocaleString()} 合計金額: {(amount + taxAmount).toLocaleString()}
      </p>
    </Container>
  );
};

// サンプルデータ
const sampleData: OutgoingOrderProps = {
  orderId: '001037',
  orderDate: '平成29年09月19日',
  dueDate: '平成29',
  productCode: '100001',
  productName: 'DJP(A1)',
  taxCategory: 'φ75',
  quantity: 1,
  unitPrice: 13230,
  taxRate: 8,
  taxAmount: 1058,
  amount: 13230,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>発注書</h1>
      <OutgoingOrder {...sampleData} />
    </div>
  );
};

export default App;