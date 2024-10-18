import React from 'react';
import styled from '@emotion/styled';

interface ProductFormProps {
  productName: string;
  productSize: string;
  price: number;
  listPrice: number;
  stock: number;
  salesStart: string;
  salesEnd: string;
  onSubmit: () => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  productName,
  productSize,
  price,
  listPrice,
  stock,
  salesStart,
  salesEnd,
  onSubmit,
  onCancel,
}) => {
  return (
    <FormContainer>
      <FormTitle>商品予定新規登録編集</FormTitle>
      <FormField>
        <Label>品名</Label>
        <Input type="text" value={productName} />
      </FormField>
      <FormField>
        <Label>規格</Label>
        <Input type="text" value={productSize} />
      </FormField>
      <PriceField>
        <PriceLabel>単価</PriceLabel>
        <PriceInput type="number" value={price} />
      </PriceField>
      <PriceField>
        <PriceLabel>金額</PriceLabel>
        <PriceInput type="number" value={listPrice} readOnly />
      </PriceField>
      <FormField>
        <Label>数量</Label>
        <Input type="number" value={stock} />
      </FormField>
      <FormField>
        <Label>現在庫数</Label>
        <Input type="number" value={10.0} readOnly />
      </FormField>
      <FormField>
        <Label>現在庫数</Label>
        <Input type="number" value={13.0} readOnly />
      </FormField>
      <RadioField>
        <RadioLabel>完了区分</RadioLabel>
        <RadioInput type="radio" id="done" name="status" checked />
        <RadioLabel htmlFor="done">完了する</RadioLabel>
        <RadioInput type="radio" id="notDone" name="status" />
        <RadioLabel htmlFor="notDone">完了しない</RadioLabel>
      </RadioField>
      <FormField>
        <Label>次回出庫予定日</Label>
        <Input type="text" value={salesStart} />
      </FormField>

      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// Sample data for testing
const sampleData: ProductFormProps = {
  productName: '洗剤',
  productSize: 'φ200mm',
  price: 1.0,
  listPrice: 2828798.0,
  stock: 29,
  salesStart: '平成29年08月15日',
  salesEnd: '',
  onSubmit: () => alert('Submitted'),
  onCancel: () => alert('Canceled'),
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Product Form Sample</h1>
      <ProductForm {...sampleData} />
    </div>
  );
};

export default App;

// Styles
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  width: 120px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PriceField = styled(FormField)`
  input {
    text-align: right;
  }
`;

const PriceLabel = styled(Label)`
  width: 60px;
`;

const PriceInput = styled(Input)`
  width: 120px;
`;

const RadioField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;