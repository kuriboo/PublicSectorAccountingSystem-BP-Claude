import React from 'react';
import styled from '@emotion/styled';

interface ProductPriceCalculatorProps {
  price: number;
  quantity: number;
  taxRate: number;
  shippingFee: number;
}

const ProductPriceCalculator: React.FC<ProductPriceCalculatorProps> = ({
  price,
  quantity,
  taxRate,
  shippingFee,
}) => {
  // Calculate subtotal, tax, and total
  const subtotal = price * quantity;
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax + shippingFee;

  return (
    <Container>
      <Title>商品税込価格計算</Title>
      <Form>
        <FormGroup>
          <Label>単価</Label>
          <Input type="number" value={price} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>適用開始日</Label>
          <Input type="text" value="平成31年09月01日" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>数量</Label>
          <Input type="number" value={quantity} readOnly />
        </FormGroup>
      </Form>
      <TaxRateGroup>
        <Label>単価税区分</Label>
        <TaxRateOption selected>税込</TaxRateOption>
        <TaxRateOption>税抜</TaxRateOption>
      </TaxRateGroup>
      <TaxRateInputGroup>
        <Label>消費税率</Label>
        <TaxRateInput value={`${taxRate}%`} readOnly />
      </TaxRateInputGroup>
      <ShippingFeeGroup>
        <Label>送料</Label>
        <ShippingFeeInput type="number" value={shippingFee} readOnly />
      </ShippingFeeGroup>
      <PriceSummary>
        <PriceSummaryItem>
          <PriceSummaryLabel>数量</PriceSummaryLabel>
          <PriceSummaryValue>
            {quantity.toLocaleString()}
            <PriceSummaryMultiply>×</PriceSummaryMultiply>
            単価
          </PriceSummaryValue>
          <PriceSummaryValue>
            {price.toLocaleString()}
            <PriceSummaryEqual>=</PriceSummaryEqual>
            小計
          </PriceSummaryValue>
          <PriceSummaryTotal>{subtotal.toLocaleString()}</PriceSummaryTotal>
        </PriceSummaryItem>
      </PriceSummary>
      <Divider />
      <Total>
        <TotalLabel>合計</TotalLabel>
        <TotalValue>{total.toLocaleString()}</TotalValue>
      </Total>
      <ButtonGroup>
        <CancelButton>クリア</CancelButton>
        <ConfirmButton>OK</ConfirmButton>
      </ButtonGroup>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <ProductPriceCalculator
      price={10000}
      quantity={1}
      taxRate={10}
      shippingFee={1000}
    />
  );
};

export default App;

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
  text-align: center;
`;

const Form = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TaxRateGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TaxRateOption = styled.div<{ selected?: boolean }>`
  margin-left: 10px;
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#f0f0f0')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
`;

const TaxRateInputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TaxRateInput = styled.input`
  margin-left: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
`;

const ShippingFeeGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ShippingFeeInput = styled.input`
  margin-left: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const PriceSummary = styled.div`
  margin-bottom: 20px;
`;

const PriceSummaryItem = styled.div`
  display: flex;
  align-items: center;
`;

const PriceSummaryLabel = styled.div`
  width: 40px;
  font-weight: bold;
`;

const PriceSummaryValue = styled.div`
  margin-left: 10px;
`;

const PriceSummaryMultiply = styled.span`
  margin: 0 5px;
`;

const PriceSummaryEqual = styled.span`
  margin: 0 5px;
`;

const PriceSummaryTotal = styled.div`
  margin-left: auto;
  font-weight: bold;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const TotalLabel = styled.div``;

const TotalValue = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #000;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;