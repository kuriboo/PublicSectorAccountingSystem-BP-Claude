import React from 'react';
import styled from 'styled-components';

// 型定義
type TaxCalculatorProps = {
  taxRate?: number; // 税率（オプショナル）
  price?: number; // 単価（オプショナル）
  quantity?: number; // 数量（オプショナル）
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ResultGroup = styled.div`
  margin-top: 20px;
`;

const Result = styled.p`
  margin: 5px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  taxRate = 0,
  price = 0,
  quantity = 0,
}) => {
  // 状態管理
  const [taxRateValue, setTaxRateValue] = React.useState(taxRate);
  const [priceValue, setPriceValue] = React.useState(price);
  const [quantityValue, setQuantityValue] = React.useState(quantity);

  // 税込金額計算
  const calculateTotalPrice = () => {
    return Math.floor(priceValue * quantityValue * (1 + taxRateValue / 100));
  };

  // レンダリング
  return (
    <Container>
      <Title>税金計算プログラム</Title>
      <InputGroup>
        <Label>単価：</Label>
        <Input
          type="number"
          value={priceValue}
          onChange={(e) => setPriceValue(Number(e.target.value))}
        />
      </InputGroup>
      <InputGroup>
        <Label>数量：</Label>
        <Input
          type="number"
          value={quantityValue}
          onChange={(e) => setQuantityValue(Number(e.target.value))}
        />
      </InputGroup>
      <InputGroup>
        <Label>税率：</Label>
        <Input
          type="number"
          value={taxRateValue}
          onChange={(e) => setTaxRateValue(Number(e.target.value))}
        />
      </InputGroup>
      <ResultGroup>
        <Result>税抜金額：{priceValue * quantityValue}円</Result>
        <Result>税額：{Math.floor(priceValue * quantityValue * (taxRateValue / 100))}円</Result>
        <Result>税込金額：{calculateTotalPrice()}円</Result>
      </ResultGroup>
      <div>
        <Button onClick={() => console.log('OKがクリックされました')}>OK</Button>
        <Button onClick={() => console.log('クリアがクリックされました')}>クリア</Button>
        <Button onClick={() => console.log('キャンセルがクリックされました')}>キャンセル</Button>
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  taxRate: 8,
  price: 1000,
  quantity: 5,
};

// 使用例
const TaxCalculatorExample = () => {
  return (
    <div>
      <h1>税金計算プログラム使用例</h1>
      <TaxCalculator {...sampleData} />
    </div>
  );
};

export default TaxCalculator;