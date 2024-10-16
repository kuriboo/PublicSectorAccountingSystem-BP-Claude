import React from 'react';
import styled from 'styled-components';

// 税金計算フォームの型定義
interface TaxFormProps {
  unitPrice?: number; // 単価
  quantity?: number; // 数量
  taxRate?: number; // 税率
  date?: string; // 適用開始日
  memo?: string; // 備考
}

// 税金計算フォームのコンポーネント
const TaxForm: React.FC<TaxFormProps> = ({
  unitPrice = 0,
  quantity = 1,
  taxRate = 0,
  date = '',
  memo = '',
}) => {
  // 金額の計算
  const amount = unitPrice * quantity;
  const tax = amount * (taxRate / 100);
  const total = amount + tax;

  return (
    <Container>
      <Title>税金計算フォーム</Title>
      <FormGroup>
        <Label>単価</Label>
        <Input type="number" defaultValue={unitPrice} />
      </FormGroup>
      <FormGroup>
        <Label>数量</Label>
        <Input type="number" defaultValue={quantity} />
      </FormGroup>
      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="taxType" defaultChecked /> 外税
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="taxType" /> 内税
        </RadioLabel>
      </RadioGroup>
      <FormGroup>
        <Label>適用開始日</Label>
        <Input type="date" defaultValue={date} />
      </FormGroup>
      <FormGroup>
        <Label>税率</Label>
        <Input type="number" defaultValue={taxRate} />
      </FormGroup>
      <FormGroup>
        <Label>備考</Label>
        <Input type="text" defaultValue={memo} />
      </FormGroup>
      <ResultGroup>
        <ResultItem>
          <ResultLabel>金額</ResultLabel>
          <ResultValue>{amount.toLocaleString()}</ResultValue>
        </ResultItem>
        <ResultItem>
          <ResultLabel>税額</ResultLabel>
          <ResultValue>{tax.toLocaleString()}</ResultValue>
        </ResultItem>
        <ResultItem>
          <ResultLabel>合計</ResultLabel>
          <ResultValue>{total.toLocaleString()}</ResultValue>
        </ResultItem>
      </ResultGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const TaxFormExample: React.FC = () => {
  return (
    <TaxForm
      unitPrice={10000}
      quantity={5}
      taxRate={10}
      date="2023-01-01"
      memo="Sample memo"
    />
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
  margin-bottom: 15px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const ResultGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ResultItem = styled.div`
  flex: 1;
  text-align: center;
`;

const ResultLabel = styled.div`
  font-weight: bold;
`;

const ResultValue = styled.div`
  font-size: 18px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TaxForm;