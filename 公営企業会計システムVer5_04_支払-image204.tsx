import React from 'react';
import styled from '@emotion/styled';

type PredefinedItem = {
  label: string;
  name: string;
  price: number;
};

type TaxItem = {
  label: string;
  rate: number;
  amount: number;
};

interface PriceDetailProps {
  predefinedItems?: PredefinedItem[];
  taxItems?: TaxItem[];
  totalPrice?: number;
}

const PriceDetail: React.FC<PriceDetailProps> = ({
  predefinedItems = [],
  taxItems = [],
  totalPrice = 0,
}) => {
  // 税抜金額を計算
  const subtotal = predefinedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container>
      <h2>予定価格</h2>
      <Row>
        <Label>予定番号</Label>
        <Value>62</Value>
        <Label>変更回数</Label>
        <Value>0</Value>
      </Row>
      {predefinedItems.map((item, index) => (
        <Row key={index}>
          <Label>{item.label}</Label>
          <Value>{item.price.toLocaleString()}円</Value>
        </Row>
      ))}
      <Row>
        <Label>小計</Label>
        <Value>{subtotal.toLocaleString()}円</Value>
      </Row>
      {taxItems.map((item, index) => (
        <Row key={index}>
          <Label>{item.label}</Label>
          <Value>{item.amount.toLocaleString()}円</Value>
        </Row>
      ))}
      <TotalRow>
        <TotalLabel>合計予定額</TotalLabel>
        <TotalValue>{totalPrice.toLocaleString()}円</TotalValue>
      </TotalRow>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  border-top: 1px solid #ccc;
  padding-top: 8px;
`;

const TotalLabel = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const TotalValue = styled.div`
  font-size: 16px;
`;

// Usage example
const App: React.FC = () => {
  const predefinedItems = [
    { label: '項目1', name: 'item1', price: 1000 },
    { label: '項目2', name: 'item2', price: 2000 },
  ];

  const taxItems = [
    { label: '消費税', rate: 10, amount: 200 },
  ];

  const totalPrice = 3200;

  return (
    <div>
      <h1>Price Detail Example</h1>
      <PriceDetail
        predefinedItems={predefinedItems}
        taxItems={taxItems}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default App;