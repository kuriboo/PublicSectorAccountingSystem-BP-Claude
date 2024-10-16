import React from 'react';
import styled from 'styled-components';

// 発注データの型定義
interface Order {
  date: string;
  slip: number;
  quantity: number;
  price: number;
  discount: number;
  paymentAmount: number;
  status: string;
}

// 発注照会コンポーネントのプロパティ型定義
interface OrderInquiryProps {
  orders: Order[];
}

// 発注照会コンポーネント
const OrderInquiry: React.FC<OrderInquiryProps> = ({ orders }) => {
  return (
    <Container>
      <Title>発注照会画面</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>起案日</HeaderCell>
            <HeaderCell>伝票№</HeaderCell>
            <HeaderCell>伝票数量</HeaderCell>
            <HeaderCell>収納金額</HeaderCell>
            <HeaderCell>見出金額</HeaderCell>
            <HeaderCell>摘要</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <Cell>{order.date}</Cell>
              <Cell>{order.slip}</Cell>
              <Cell>{order.quantity}</Cell>
              <Cell>{order.price}</Cell>
              <Cell>{order.discount}</Cell>
              <Cell>{order.status}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>再発行</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleOrders: Order[] = [
  {
    date: '06/02/02',
    slip: 14,
    quantity: 74100,
    price: 0,
    discount: 0,
    paymentAmount: 0,
    status: '集合収納(通年便) №3',
  },
];

// 発注照会コンポーネントの使用例
const App: React.FC = () => {
  return (
    <div>
      <OrderInquiry orders={sampleOrders} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
`;