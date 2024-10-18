import React from 'react';
import styled from '@emotion/styled';

interface TaxCalculatorProps {
  taxRate?: number;
  basePrice?: number;
  quantity?: number;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({ taxRate = 10, basePrice = 1500000, quantity = 2 }) => {
  // 税抜単価を計算
  const priceWithoutTax = basePrice / quantity;

  // 税込単価を計算
  const priceWithTax = Math.round(priceWithoutTax * (1 + taxRate / 100));

  // 消費税額を計算  
  const taxAmount = Math.round(priceWithoutTax * (taxRate / 100));

  // 合計金額を計算
  const totalPrice = priceWithTax * quantity;

  return (
    <Container>
      <Title>消費税説明書登録画面</Title>
      <TaxRateInput>
        <label>行番号</label>
        <input type="number" value={taxRate} readOnly />
      </TaxRateInput>
      <PriceInputs>
        <div>
          <label>単価</label>
          <PriceInput value={priceWithoutTax} readOnly />円
        </div>
        <div>
          <label>式番号</label>
          <input type="number" value={2} readOnly />  
        </div>
      </PriceInputs>
      <CalculationResults>
        <div>
          <label>税込</label>
          <input type="text" value={priceWithTax} readOnly />円
        </div>
        <div>
          <label>税抜</label>
          <input type="text" value={priceWithoutTax} readOnly />円  
        </div>
        <div>
          <label>消費税</label>
          <input type="text" value={taxAmount} readOnly />円
        </div>
        <div>  
          <label>金額(円)</label>
          <TotalPriceInput value={totalPrice} readOnly />円
        </div>
      </CalculationResults>
      <Buttons>
        <button>OK</button>  
        <button>クリア</button>
        <button>キャンセル</button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TaxRateInput = styled.div`
  margin-bottom: 10px;
  
  label {
    margin-right: 10px;
  }
`;

const PriceInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PriceInput = styled.input`
  width: 120px;
  padding: 5px;
  text-align: right;
`;

const CalculationResults = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  
  label {
    margin-right: 10px;
  }
  
  input {
    width: 120px;  
    padding: 5px;
    text-align: right;
  }
`;

const TotalPriceInput = styled(PriceInput)`
  font-weight: bold;
`;

const Buttons = styled.div`
  text-align: right;

  button {
    margin-left: 10px;
    padding: 5px 10px;
  }  
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Tax Calculator Example</h1>  
      <TaxCalculator />
    </div>
  );
}

export default App;