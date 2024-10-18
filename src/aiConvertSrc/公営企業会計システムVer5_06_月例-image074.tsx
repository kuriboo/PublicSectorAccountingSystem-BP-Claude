import React, { useState } from 'react';
import styled from '@emotion/styled';

interface ConsumptionTaxCalculatorProps {
  defaultStartDate?: string;
  defaultEndDate?: string;
  defaultPriceFrom?: number;
  defaultPriceTo?: number;
  defaultIncludeTax?: boolean;
  defaultIncludeReducedTax?: boolean;
  defaultIncludeFreeTax?: boolean;
  defaultTaxRate?: number;
}

const ConsumptionTaxCalculator: React.FC<ConsumptionTaxCalculatorProps> = ({
  defaultStartDate = '',
  defaultEndDate = '',
  defaultPriceFrom = 0,
  defaultPriceTo = 999999999,
  defaultIncludeTax = true,
  defaultIncludeReducedTax = false,
  defaultIncludeFreeTax = false, 
  defaultTaxRate = 0,
}) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [priceFrom, setPriceFrom] = useState(defaultPriceFrom);
  const [priceTo, setPriceTo] = useState(defaultPriceTo);
  const [includeTax, setIncludeTax] = useState(defaultIncludeTax);
  const [includeReducedTax, setIncludeReducedTax] = useState(defaultIncludeReducedTax);
  const [includeFreeTax, setIncludeFreeTax] = useState(defaultIncludeFreeTax);
  const [taxRate, setTaxRate] = useState(defaultTaxRate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Title>消費税計算明細書作成</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          期間指定
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          &nbsp;〜&nbsp;
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Label>
        <Label>
          予算科目
          <Input type="number" value={priceFrom} onChange={(e) => setPriceFrom(Number(e.target.value))} />
          &nbsp;〜&nbsp; 
          <Input type="number" value={priceTo} onChange={(e) => setPriceTo(Number(e.target.value))} />
        </Label>
        <Label>
          <Input type="checkbox" checked={includeTax} onChange={(e) => setIncludeTax(e.target.checked)} />
          指定しない
        </Label>
        <Label>
          <Input type="checkbox" checked={includeReducedTax} onChange={(e) => setIncludeReducedTax(e.target.checked)} /> 
          軽減税率の品目のみの伝票を出力する 
        </Label>
        <Label>  
          <Input type="checkbox" checked={includeFreeTax} onChange={(e) => setIncludeFreeTax(e.target.checked)} />
          課税請求書発行事業者のみの伝票を出力する
        </Label>
        <Label>
          <Input type="checkbox" />
          課税請求書発行事業者以外のみの伝票を出力する
          <Input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
          %
        </Label>
        <ButtonContainer>
          <SubmitButton type="submit">OK</SubmitButton>
          <ClearButton type="reset">クリア</ClearButton>
          <CloseButton type="button">終了</CloseButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  
  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const ClearButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;  
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// Usage example
const App: React.FC = () => {
  return (
    <ConsumptionTaxCalculator 
      defaultStartDate="2023-07-01"
      defaultEndDate="2023-07-31"
      defaultTaxRate={10}
    />
  );
};

export default App;