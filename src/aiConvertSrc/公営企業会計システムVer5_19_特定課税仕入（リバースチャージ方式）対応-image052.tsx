import React from 'react';
import styled from '@emotion/styled';

type TaxCalculatorProps = {
  price: number;
  taxRate: number;
  discountRate: number;
  discountAmount: number;
};

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  price,
  taxRate,
  discountRate,
  discountAmount,
}) => {
  // 税抜き額の計算
  const subtotal = price;

  // 税額の計算
  const taxAmount = Math.floor(subtotal * (taxRate / 100));

  // 消費税率の表示
  const formattedTaxRate = `${taxRate}%`;

  // 消費税額の表示
  const formattedTaxAmount = taxAmount.toLocaleString();

  // 割引率の表示
  const formattedDiscountRate = `${discountRate}%`;

  // 割引額の表示
  const formattedDiscountAmount = discountAmount.toLocaleString();

  // 合計額の計算
  const total = subtotal + taxAmount - discountAmount;

  return (
    <Container>
      <Table>
        <tbody>
          <Row>
            <Cell>決定額</Cell>
            <Cell>{subtotal.toLocaleString()}</Cell>
          </Row>
          <Row>
            <Cell>税抜額</Cell>
            <Cell>{subtotal.toLocaleString()}</Cell>
          </Row>
          <Row>
            <Cell>
              消費税率 <input type="text" value={formattedTaxRate} readOnly />%
            </Cell>
            <Cell>消費税額 {formattedTaxAmount}</Cell>
          </Row>
          <Row>
            <Cell>
              他税率 <input type="text" value={formattedDiscountRate} readOnly />%
            </Cell>
            <Cell>他税額 {formattedDiscountAmount}</Cell>
          </Row>
          <Row>
            <Cell colSpan={2}>
              <TotalLabel>摘要</TotalLabel>
              <TotalValue>{total.toLocaleString()}</TotalValue>
            </Cell>
          </Row>
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 400px;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const Cell = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;

  input {
    width: 50px;
    border: none;
    background: transparent;
    text-align: right;
  }
`;

const TotalLabel = styled.span`
  font-weight: bold;
`;

const TotalValue = styled.span`
  float: right;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Tax Calculator</h1>
      <TaxCalculator
        price={1000000}
        taxRate={10}
        discountRate={5}
        discountAmount={0}
      />
    </div>
  );
};

export default App;