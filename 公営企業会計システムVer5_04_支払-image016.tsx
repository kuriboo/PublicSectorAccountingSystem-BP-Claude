import React from 'react';
import styled from '@emotion/styled';

type ProductInfoProps = {
  productName: string;
  productCode: string;
  productUnit: string;
  productUnitPrice: number;
  productQuantity: number;
  productTax: number;
  productTaxRate: number;
  productTotalPrice: number;
  productTotalPriceWithTax: number;
  orderDate: string;
  paymentDeadline: string;
  deliveryDate: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productName,
  productCode,
  productUnit,
  productUnitPrice,
  productQuantity,
  productTax,
  productTaxRate,
  productTotalPrice,
  productTotalPriceWithTax,
  orderDate,
  paymentDeadline,
  deliveryDate,
}) => {
  // 値が空の場合のデフォルト値を設定
  const defaultProductName = productName || '商品名がありません';
  const defaultProductCode = productCode || 'コードがありません';
  const defaultProductUnit = productUnit || '単位がありません';
  const defaultProductUnitPrice = productUnitPrice || 0;
  const defaultProductQuantity = productQuantity || 0;
  const defaultProductTax = productTax || 0;
  const defaultProductTotalPrice = productTotalPrice || 0;
  const defaultProductTotalPriceWithTax = productTotalPriceWithTax || 0;
  const defaultOrderDate = orderDate || 'YYYY/MM/DD';
  const defaultPaymentDeadline = paymentDeadline || 'YYYY/MM/DD';
  const defaultDeliveryDate = deliveryDate || 'YYYY/MM/DD';

  return (
    <Container>
      <Title>支出決定入力(物品・負担有)</Title>
      <Form>
        <Label>
          <LabelText>支出負担</LabelText>
          <Select defaultValue="令和0年度">
            <option>令和元年</option>
            <option>令和2年</option>
            <option>令和3年</option>
          </Select>
        </Label>
        <Label>
          <LabelText>支出日</LabelText>
          <DateInput type="date" defaultValue={defaultOrderDate} />
        </Label>
        <Label>
          <LabelText>請求書日</LabelText>
          <DateInput type="date" defaultValue={defaultPaymentDeadline} />
        </Label>
        <Label>
          <LabelText>検収日</LabelText>
          <DateInput type="date" defaultValue={defaultDeliveryDate} />
        </Label>
        <Label>
          <LabelText>契約先</LabelText>
          <Input type="text" defaultValue="ぎょうせい(事務所)" />
        </Label>
        <Label>
          <LabelText>-時価情報</LabelText>
        </Label>
        <Label>
          <LabelText>品名</LabelText>
          <Input type="text" defaultValue={defaultProductName} />
        </Label>  
        <Label>
          <LabelText>取引区分</LabelText>
          <SelectSmall defaultValue="通常仕入">
            <option>特別仕入</option>
          </SelectSmall>
        </Label>
        <Label>
          <LabelText>予算科目</LabelText>
          <SelectSmall defaultValue="消耗品費">
            <option>備品</option>
          </SelectSmall>
        </Label>
        <Label>
          <LabelText>数量</LabelText>
          <InputSmall type="number" defaultValue={defaultProductQuantity} />
        </Label>
        <Label>      
          <LabelText>単位</LabelText>
          <InputSmall type="text" defaultValue={defaultProductUnit} />
        </Label>
        <Label>
          <LabelText>単価</LabelText>
          <InputMedium type="number" defaultValue={defaultProductUnitPrice} />
        </Label>
        <Label>
          <LabelText>税区分</LabelText>
          <SelectSmall defaultValue="課税10%">
            <option>非課税</option>
            <option>不課税</option>
          </SelectSmall>
        </Label>
        <TaxInfo>
          <div>契約金額: {defaultProductTotalPrice.toLocaleString()}円</div>
          <div>契約税額: {defaultProductTax.toLocaleString()}円</div>
          <div>契約合計額: {defaultProductTotalPriceWithTax.toLocaleString()}円</div>
          <div>税率: {productTaxRate}%</div>
        </TaxInfo>
      </Form>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: ProductInfoProps = {
  productName: '商品A',
  productCode: 'A001',  
  productUnit: '個',
  productUnitPrice: 1000,
  productQuantity: 10,
  productTax: 1000,
  productTaxRate: 10,
  productTotalPrice: 10000,
  productTotalPriceWithTax: 11000,
  orderDate: '2022/12/01',
  paymentDeadline: '2022/12/15', 
  deliveryDate: '2022/12/10',
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>商品情報入力サンプル</h2>
      <ProductInfo {...sampleData} />
    </div>
  );  
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  padding: 20px 0;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LabelText = styled.span`
  min-width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const InputSmall = styled(Input)`
  width: 80px;
`;

const InputMedium = styled(Input)`
  width: 120px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const SelectSmall = styled(Select)`
  width: 120px;  
`;

const DateInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 150px;
`;

const TaxInfo = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: space-between; 
  gap: 20px;
  background-color: #f0f0f0; 
  padding: 10px;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ProductInfo;