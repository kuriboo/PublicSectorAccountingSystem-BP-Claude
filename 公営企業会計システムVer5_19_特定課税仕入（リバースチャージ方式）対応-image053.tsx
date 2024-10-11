import React from 'react';
import styled from 'styled-components';

type TaxCalculatorProps = {
  price: number;
  taxRate: number;
  serviceCharge?: number;
  otherCharge?: number;
};

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  price,
  taxRate,
  serviceCharge = 0,
  otherCharge = 0,
}) => {
  // 消費税額を計算
  const taxAmount = Math.floor(price * (taxRate / 100));

  return (
    <TaxCalculatorWrapper>
      <Row>
        <Label>決定額</Label>
        <Value>{price.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>税抜額</Label>
        <Value>{price.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Value>{taxRate}%</Value>
      </Row>
      <Row>
        <Label>消費税額</Label>
        <Value>{taxAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>他税率</Label>
        <Value>{otherCharge}%</Value>
      </Row>
      <Row>
        <Label>他税額</Label>
        <Value>{otherCharge.toLocaleString()}</Value>
      </Row>
      <SubmitButton>摘要</SubmitButton>
    </TaxCalculatorWrapper>
  );
};

// スタイリング
const TaxCalculatorWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

// サンプルデータを使用した表示用コンポーネント
const TaxCalculatorExample: React.FC = () => {
  const sampleData = {
    price: 1000000,
    taxRate: 10,
    serviceCharge: 0,
    otherCharge: 0,
  };

  return (
    <div>
      <h2>Tax Calculator Example</h2>
      <TaxCalculator {...sampleData} />
    </div>
  );
};

export default TaxCalculatorExample;