import React from 'react';
import styled from '@emotion/styled';

interface TaxCalculatorProps {
  price: number;
  taxRate: number;
  consumptionTax: number;
  discountRate: number;
  discountAmount: number;
  otherRate: number;
  otherAmount: number;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  price = 0,
  taxRate = 10,
  consumptionTax = 0,
  discountRate = 0,
  discountAmount = 0,
  otherRate = 0,
  otherAmount = 0,
}) => {
  // 消費税額の計算
  const calculatedConsumptionTax = Math.floor(price * (taxRate / 100));

  // 値引額の計算
  const calculatedDiscountAmount = discountRate > 0
    ? Math.floor(price * (discountRate / 100))
    : discountAmount;

  // その他額の計算  
  const calculatedOtherAmount = otherRate > 0
    ? Math.floor(price * (otherRate / 100))
    : otherAmount;

  // 最終的な税込額の計算
  const totalAmount = price + calculatedConsumptionTax - calculatedDiscountAmount + calculatedOtherAmount;

  return (
    <Wrapper>
      <Row>
        <Label>決定額</Label>
        <Value>{price.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>税抜額</Label>
        <Value>{price.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>
          消費税率
          <Input type="number" value={taxRate} disabled />
          %
        </Label>
        <Value>{calculatedConsumptionTax.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>
          値税率
          <Input type="number" value={discountRate} disabled /> 
          %
        </Label>
        <Value>{calculatedDiscountAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>
          他税率
          <Input type="number" value={otherRate} disabled />
          %  
        </Label>
        <Value>{calculatedOtherAmount.toLocaleString()}</Value>
      </Row>
      <Divider />
      <Row>
        <Label>請求</Label>
        <Value>{totalAmount.toLocaleString()}</Value>  
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  font-size: 18px;
`;

const Input = styled.input`
  width: 60px;
  margin: 0 4px;
  text-align: right;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 16px 0;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>税込計算機</h1>
      <TaxCalculator 
        price={1000000}
        taxRate={10}
        consumptionTax={0} 
        discountRate={0}
        discountAmount={0}
        otherRate={0}
        otherAmount={0}
      />
    </div>
  );  
};

export default App;