import React from 'react';
import styled from 'styled-components';

// 商品情報の型定義
type ProductInfo = {
  code: string;
  name: string;
  spec: string;
  evaluation1: number;
  purchasePrice: number;
  inventoryAmount: number;
  unit: string;
  price: number;
  goldAmount: number;
  salesAmount: number;
};

// コンポーネントのProps型定義
type ProductInfoFormProps = {
  productInfo: ProductInfo;
  onOk?: () => void;
  onCancel?: () => void;
};

// スタイル定義
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.div`
  width: 120px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const FormValue = styled.div`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 4px 16px;
  margin-left: 8px;
`;

// 商品情報入力フォームコンポーネント
const ProductInfoForm: React.FC<ProductInfoFormProps> = ({ productInfo, onOk, onCancel }) => {
  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>品番</FormLabel>
        <FormValue>{productInfo.code}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>規格</FormLabel>
        <FormValue>{productInfo.spec}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>評価方法区分</FormLabel>
        <FormValue>{productInfo.evaluation1}</FormValue>
        <FormLabel>先入先出</FormLabel>
      </FormRow>
      <FormRow>
        <FormLabel>現在在庫数</FormLabel>
        <FormValue>{productInfo.inventoryAmount}</FormValue>
        <FormLabel>調整高</FormLabel>
        <FormValue>{productInfo.purchasePrice}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>単位</FormLabel>
        <FormValue>{productInfo.unit || '-'}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>単価</FormLabel>
        <FormValue>{productInfo.price}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>金額</FormLabel>
        <FormValue>{productInfo.goldAmount}</FormValue>
        <FormLabel>調整金額</FormLabel>
        <FormValue>{productInfo.salesAmount}</FormValue>
      </FormRow>
      
      <ButtonWrapper>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: ProductInfo = {
  code: '000001',
  name: '商品A',
  spec: '規格A',
  evaluation1: 1,
  purchasePrice: 250.00,
  inventoryAmount: 1120.00,
  unit: '本',
  price: 280.00,
  goldAmount: 280000,
  salesAmount: 0,
};

// サンプル表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>商品情報入力フォーム</h1>
      <ProductInfoForm
        productInfo={sampleData}
        onOk={() => console.log('OK clicked')}
        onCancel={() => console.log('Cancel clicked')}
      />
    </div>
  );
};

export default App;