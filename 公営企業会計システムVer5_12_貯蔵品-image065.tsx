import React from 'react';
import styled from '@emotion/styled';

type ProductOrderFormProps = {
  productName: string;
  productCode: string;
  productPrice: number;
  productTaxPrice: number;
  orderMonth: string;
};

const ProductOrderForm: React.FC<ProductOrderFormProps> = ({
  productName,
  productCode,
  productPrice,
  productTaxPrice,
  orderMonth,
}) => {
  return (
    <FormWrapper>
      <FormTitle>貯蔵品月次集計表作成</FormTitle>
      <FormGroup>
        <Label>決裁区分</Label>
        <Input value={productName} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>税管場所</Label>
        <Input value={productCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>～</Label>
      </FormGroup>
      <FormGroup>
        <Label>税管場所</Label>
        <Input value={productPrice.toLocaleString()} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>品番</Label>
        <Input value={productTaxPrice.toLocaleString()} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>～</Label>
      </FormGroup>
      <FormGroup>
        <Label>品番</Label>
        <Input value={productTaxPrice.toLocaleString()} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>作業月</Label>
        <Input value={orderMonth} readOnly />
      </FormGroup>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;

  &:read-only {
    background-color: #f7f7f7;
  }
`;

// Usage example
const ProductOrderFormExample: React.FC = () => {
  const sampleData: ProductOrderFormProps = {
    productName: '決裁',
    productCode: '000000',
    productPrice: 999999,
    productTaxPrice: 9999999999,
    orderMonth: '平成28年06月',
  };

  return (
    <div>
      <h1>Product Order Form Example</h1>
      <ProductOrderForm {...sampleData} />
    </div>
  );
};

export default ProductOrderFormExample;