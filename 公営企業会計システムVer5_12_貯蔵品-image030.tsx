import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type ProductProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  deliveryDate: string;
};

const ProductForm = ({ id, name, price, quantity, deliveryDate }: ProductProps) => {
  const [count, setCount] = useState(quantity);

  // 数量変更ハンドラ
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Number(e.target.value);
    setCount(newCount);
  };

  return (
    <FormWrapper>
      <FormRow>
        <Label>品番</Label>
        <span>{id}</span>
      </FormRow>
      <FormRow>
        <Label>品名</Label>
        <span>{name}</span>
      </FormRow>
      <FormRow>
        <Label>数量</Label>
        <QuantityInput
          type="number"
          value={count}
          min={1}
          onChange={handleQuantityChange}
        />
      </FormRow>
      <FormRow>
        <Label>単価</Label>
        <span>{price.toLocaleString()}</span>
      </FormRow>
      <FormRow>
        <Label>出庫予定日</Label>
        <span>{deliveryDate}</span>
      </FormRow>
      <AmountRow>
        <Label>金額</Label>
        <Amount>{(price * count).toLocaleString()}</Amount>
      </AmountRow>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonRow>
    </FormWrapper>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleProductForm = () => {
  const sampleData: ProductProps = {
    id: '000999000',
    name: 'DIF(A1)精鋭費',
    price: 13230,
    quantity: 1,
    deliveryDate: '平成30年6月28日',
  };

  return <ProductForm {...sampleData} />;
};

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.span`
  width: 100px;
  font-weight: bold;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 4px;
`;

const AmountRow = styled(FormRow)`
  justify-content: flex-end;
  margin-top: 16px;
`;

const Amount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #a71d2a;
  }
`;

export default ProductForm;