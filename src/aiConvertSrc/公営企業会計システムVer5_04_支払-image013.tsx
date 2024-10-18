import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

type TaxInputProps = {
  rate: number;
  onChange: (value: number) => void;
};

const TaxInput: React.FC<TaxInputProps> = ({ rate, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setError('数値を入力してください');
      onChange(0);
    } else if (value < 0) {
      setError('0以上の値を入力してください');
      onChange(0);
    } else if (value > 100) {
      setError('100以下の値を入力してください');
      onChange(100);
    } else {
      setError(null);
      onChange(value);
    }
  }, [onChange]);

  return (
    <InputWrapper>
      <Label>税率</Label>
      <Input 
        type="number" 
        value={rate} 
        onChange={handleChange} 
        min="0" 
        max="100" 
        step="0.1"
      />
      <Suffix>%</Suffix>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Suffix = styled.span`
  margin-left: 4px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-left: 8px;
`;

type TaxCalcProps = {
  price: number;
  taxRate: number;
  quantity: number;
};

const TaxCalculator: React.FC<TaxCalcProps> = ({ price, taxRate, quantity }) => {
  const subtotal = price * quantity;
  const tax = Math.floor(subtotal * (taxRate / 100));
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
        <Value>{taxRate.toFixed(1)}</Value>
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

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Value = styled.span`
  margin: 0 4px;
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

const App: React.FC = () => {
  const [price, setPrice] = useState<number>(13230);
  const [taxRate, setTaxRate] = useState<number>(10);
  const [quantity, setQuantity] = useState<number>(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateInput = useCallback((name: string, value: number) => {
    if (isNaN(value)) {
      return '数値を入力してください';
    }
    switch (name) {
      case 'price':
        return value < 0 ? '0以上の値を入力してください' : null;
      case 'taxRate':
        return value < 0 || value > 100 ? '0から100の間の値を入力してください' : null;
      case 'quantity':
        return value <= 0 ? '1以上の値を入力してください' : null;
      default:
        return null;
    }
  }, []);

  const handleInputChange = useCallback((name: string, value: number) => {
    const error = validateInput(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    if (!error) {
      switch (name) {
        case 'price':
          setPrice(value);
          break;
        case 'taxRate':
          setTaxRate(value);
          break;
        case 'quantity':
          setQuantity(value);
          break;
      }
    }
  }, [validateInput]);

  return (
    <div>
      <h2>税込計算</h2>
      <InputGroup>
        <Label>価格</Label>
        <Input
          type="number"
          value={price}
          onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
          min="0"
          step="1"
        />
        {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
      </InputGroup>
      <InputGroup>
        <TaxInput rate={taxRate} onChange={(value) => handleInputChange('taxRate', value)} />
      </InputGroup>
      <InputGroup>
        <Label>数量</Label>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => handleInputChange('quantity', parseFloat(e.target.value))}
          min="1"
          step="1"
        />
        {errors.quantity && <ErrorMessage>{errors.quantity}</ErrorMessage>}
      </InputGroup>
      <TaxCalculator 
        price={price}
        taxRate={taxRate}
        quantity={quantity}
      />
    </div>
  );
};

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export default App;