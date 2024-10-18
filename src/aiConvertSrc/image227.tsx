import React from 'react';
import styled from '@emotion/styled';

// 商品明細の型定義
type Item = {
  no: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

// コンポーネントのプロパティの型定義
type OrderDetailProps = {
  date: string;
  items: Item[];
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

// コンポーネントのスタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 400px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DateText = styled.div`
  font-size: 14px;
`;

const TotalText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ItemTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const ItemTableHeader = styled.th`
  padding: 4px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const ItemTableCell = styled.td`
  padding: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 商品明細コンポーネントの実装
const OrderDetail: React.FC<OrderDetailProps> = ({
  date,
  items,
  onOk,
  onClear,
  onCancel,
}) => {
  // 合計金額を計算
  const totalPrice = items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );

  return (
    <Container>
      <Header>
        <DateText>予算編成区分：{date}</DateText>
        <TotalText>合計金額：{totalPrice.toLocaleString()}円</TotalText>
      </Header>
      <ItemTable>
        <thead>
          <tr>
            <ItemTableHeader>行No.</ItemTableHeader>
            <ItemTableHeader>積算基礎</ItemTableHeader>
            <ItemTableHeader>単価</ItemTableHeader>
            <ItemTableHeader>数量</ItemTableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.no}>
              <ItemTableCell>{item.no}</ItemTableCell>
              <ItemTableCell>{item.name}</ItemTableCell>
              <ItemTableCell>{item.unitPrice.toLocaleString()}円</ItemTableCell>
              <ItemTableCell>{item.quantity}</ItemTableCell>
            </tr>
          ))}
        </tbody>
      </ItemTable>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: OrderDetailProps = {
  date: '当初予算',
  items: [
    { no: '1', name: '原津 備消耗品費', unitPrice: 1, quantity: 10001 },
    { no: '2', name: '原津 備消耗品費', unitPrice: 1, quantity: 10001 },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>商品明細</h1>
      <OrderDetail {...sampleData} />
    </div>
  );
};

export default App;