import React from 'react';
import styled from '@emotion/styled';

interface ProductPurchaseProps {
  productNumber: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  currentInput: number;
  totalAmount: number;
  totalQuantity: number;
  taxAmount: number;
}

const ProductPurchase: React.FC<ProductPurchaseProps> = ({
  productNumber,
  productName,
  unitPrice,
  quantity,
  totalPrice,
  currentInput,
  totalAmount,
  totalQuantity,
  taxAmount,
}) => {
  return (
    <Container>
      <Title>商品購入画面（確認平均）</Title>
      <InnerContainer>
        <Field>
          <Label>品番</Label>
          <Value>{productNumber || '-'}</Value>
        </Field>
        <Field>
          <Label>品名</Label>
          <Value>{productName || '-'}</Value>
        </Field>
        <Field>
          <Label>規格</Label>
          <Value>φ200㎜</Value>
        </Field>
        <Field>
          <Label>現在庫数量</Label>
          <Value>{quantity.toLocaleString() || 0}</Value>
          <Unit>現在庫金額</Unit>
          <Value>{totalPrice.toLocaleString() || 0}</Value>
          <Unit>平均単価</Unit>
          <Value>{(totalPrice / quantity).toLocaleString() || 0}</Value>
        </Field>
        <Field>
          <Label>当初入庫年度</Label>
          <Value>平成23</Value>
          <Unit>年度</Unit>
          <Value>当初入庫番号</Value>
          <Value>63</Value>
        </Field>
        <Field>
          <Label>数量</Label>
          <Value>{currentInput.toLocaleString() || 0}</Value>
          <Unit>m</Unit>
          <Value>単価</Value>
          <Value>{unitPrice.toLocaleString() || 0}</Value>
        </Field>
        <Field>
          <Label>金額</Label>
          <Value>{totalAmount.toLocaleString() || 0}</Value>
        </Field>
      </InnerContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SampleProductPurchase: React.FC = () => {
  return (
    <ProductPurchase
      productNumber="0000701015"
      productName="ポリ管"
      unitPrice={3.00}
      quantity={6000.000}
      totalPrice={2205949.50}
      currentInput={1.00}
      totalAmount={2500.00}
      totalQuantity={2500}
      taxAmount={200.00}
    />
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  background-color: #f0f0f0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 8px;
  }  
`;

const Title = styled.h2`
  margin: 0 0 16px;
  text-align: center;
`;

const InnerContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 8px;
  min-width: 120px;

  @media (max-width: 600px) {
    min-width: 100%;
    margin-bottom: 4px;
  }
`;

const Value = styled.div`
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 8px;
    margin-bottom: 4px;
  }  
`;

const Unit = styled.div`
  margin-right: 8px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #1976d2;
  color: white;
  margin: 0 8px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

export default ProductPurchase;