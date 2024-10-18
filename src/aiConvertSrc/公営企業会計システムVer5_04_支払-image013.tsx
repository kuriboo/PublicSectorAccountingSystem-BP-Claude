import React from 'react';
import styled from 'styled-components';

// 税率入力欄のプロパティ型定義
type TaxInputProps = {
  rate: number;
  onChange: (value: number) => void;
};

// 税率入力欄コンポーネント
const TaxInput: React.FC<TaxInputProps> = ({ rate, onChange }) => {
  // 税率変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onChange(isNaN(value) ? 0 : value);
  };

  return (
    <InputWrapper>
      <Label>税率</Label>
      <Input type="number" value={rate} onChange={handleChange} />
      <Suffix>%</Suffix>
    </InputWrapper>
  );
};

// スタイリング
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  width: 60px;
  padding: 4px;
`;

const Suffix = styled.span`
  margin-left: 4px;
`;

// 税込計算のプロパティ型定義
type TaxCalcProps = {
  price: number;
  taxRate: number;
  quantity: number;
};

// 税込計算コンポーネント 
const TaxCalculator: React.FC<TaxCalcProps> = ({ price, taxRate, quantity }) => {
  // 小計計算
  const subtotal = price * quantity;
  // 税額計算
  const tax = Math.floor(subtotal * (taxRate / 100));
  // 合計計算
  const total = subtotal + tax;

  return (
    <div>
      <Row>
        <Label>税抜き</Label>
        <Value>{price.toLocaleString()}</Value>
        <Multiply>×</Multiply>
        <Value>{quantity.toLocaleString()}</Value>
        <Equal>=</Equal>
        <Value>{subtotal.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>税率</Label>
        <Value>{taxRate.toLocaleString()}</Value>
        <Percent>%</Percent>
        <Label>税額</Label>
        <Value>{tax.toLocaleString()}</Value>
      </Row>
      <Divider />
      <Row>
        <Label>合計</Label>
        <Total>{total.toLocaleString()}</Total>
      </Row>
    </div>
  );
};

// スタイリング
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Multiply = styled.span`
  margin: 0 8px;
`;

const Equal = styled.span`
  margin: 0 8px;
`;

const Percent = styled.span`
  margin-left: 4px;
`;

const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const Total = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

// サンプルデータ
const sampleData = {
  price: 13230,
  taxRate: 10,
  quantity: 1,
};

// 使用例
const App: React.FC = () => {
  const [taxRate, setTaxRate] = React.useState(sampleData.taxRate);

  return (
    <div>
      <h2>税込計算</h2>
      <TaxInput rate={taxRate} onChange={setTaxRate} />
      <TaxCalculator 
        price={sampleData.price}
        taxRate={taxRate}
        quantity={sampleData.quantity}
      />
    </div>
  );
};

export default App;