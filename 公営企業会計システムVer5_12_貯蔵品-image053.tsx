```typescript
import React from 'react';
import styled from 'styled-components';

// 商品情報の型定義
type ProductInfo = {
  productCode: string;
  productName: string;
  price: number;
  taxRate: number;
  quantity: number;
  unit: string;
  discountRate: number;
  discountPrice: number;
};

// 商品情報のコンポーネント
const ProductInfoComponent: React.FC<{ info: ProductInfo }> = ({ info }) => {
  // 値が空の場合は"-"を表示
  const displayValue = (value: any) => {
    return value ? value : "-";
  };

  return (
    <ProductInfoWrapper>
      <Row>
        <Label>品番：</Label>
        <Value>{displayValue(info.productCode)}</Value>
      </Row>
      <Row>
        <Label>商品名 販売単</Label>
        <Value>{displayValue(info.productName)}</Value>
      </Row>
      <Row>
        <Label>価格：</Label>
        <Value>{displayValue(info.price)}</Value>
      </Row>
      <Row>
        <Label>入庫数量：</Label>
        <Value>{displayValue(info.quantity)}{displayValue(info.unit)}</Value>
      </Row>
      <Row>
        <Label>小計：</Label>
        <Value>
          {displayValue(info.price * info.quantity * (1 - info.discountRate))}
          {displayValue((info.price * info.quantity * info.taxRate).toFixed(0))}
        </Value>
      </Row>
      <Row>
        <Label>値引率：</Label>
        <Value>{displayValue((info.discountRate * 100).toFixed(1))}%</Value>
      </Row>
      <Row>
        <Label>値引単価：</Label>
        <Value>{displayValue(info.discountPrice)}</Value>
      </Row>
    </ProductInfoWrapper>
  );
};

// スタイリング
const ProductInfoWrapper = styled.div`
  display: grid;
  grid-row-gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

// サンプルデータ
const sampleData: ProductInfo = {
  productCode: "○○製品",
  productName: "○△□※",
  price: 999999,
  taxRate: 0.1,
  quantity: 999,
  unit: "個",
  discountRate: 0.1, 
  discountPrice: 899999,
};

// サンプル表示用コンポーネント
const SampleProductInfo: React.FC = () => {
  return (
    <div>
      <h2>商品情報</h2>
      <ProductInfoComponent info={sampleData} />
    </div>
  );
};

export default SampleProductInfo;