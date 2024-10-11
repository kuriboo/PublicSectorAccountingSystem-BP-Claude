import React from 'react';
import styled from '@emotion/styled';

interface ProductionInputFormProps {
  productNumber: string;
  productName: string;
  registrationDate: string;
  reserveCategory: string;
  currentQuantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
  averageUnitPrice: number;
  totalAmount: number;
  currentAmount: number;
  evaluationAmount: number;
  instruction: string;
  transactionDetails: string;
}

const ProductionInputForm: React.FC<ProductionInputFormProps> = ({
  productNumber,
  productName,
  registrationDate,
  reserveCategory,
  currentQuantity,
  unit,
  unitPrice,
  totalPrice,
  averageUnitPrice,
  totalAmount,
  currentAmount,
  evaluationAmount,
  instruction,
  transactionDetails,
}) => {
  return (
    <FormContainer>
      <Title>たな卸資産価額入力(移動平均)</Title>
      <CompanyInfo>
        <span>総務課 予算・会計担当 きょうせい太郎</span>
        <span>平成30年06月25日</span>
      </CompanyInfo>
      <FormGroup>
        <Label>年月日</Label>
        <span>{registrationDate}</span>
      </FormGroup>
      <FormGroup>
        <Label>保管場所</Label>
        <span>{reserveCategory}</span>
      </FormGroup>
      <FormGroup>
        <Label>所属</Label>
        <span>{productNumber}</span>
      </FormGroup>
      <FormGroup>
        <Label>品番</Label>
        <span>{productName}</span>
      </FormGroup>
      <FormGroup>
        <Label>現在数量</Label>
        <span>{currentQuantity} {unit}</span>
      </FormGroup>
      <FormGroup>
        <Label>単価</Label>
        <span>{unitPrice.toLocaleString()}</span>
      </FormGroup>
      <PriceInfo>
        <div>
          <span>現在単価</span>
          <span>{averageUnitPrice.toLocaleString()}</span>
        </div>
        <div>
          <span>現在金額</span>
          <span>{currentAmount.toLocaleString()}</span>
        </div>
      </PriceInfo>
      <PriceInfo>
        <div>
          <span>平均単価</span>
          <span>{totalPrice.toLocaleString()}</span>  
        </div>
        <div>
          <span>評価金額</span>
          <span>{evaluationAmount.toLocaleString()}</span>
        </div>
      </PriceInfo>
      <div>
        <span>評価損</span>
        <span>{totalAmount.toLocaleString()}</span>
      </div>
      <FormGroup>
        <Label>指示仕訳</Label>
        <span>{instruction}</span>
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <span>{transactionDetails}</span>  
      </FormGroup>
    </FormContainer>
  );
};

// Sample usage
const SampleProductionInputForm = () => {
  return (
    <ProductionInputForm
      productNumber="999999"
      productName="部品"
      registrationDate="平成30年06月30日"
      reserveCategory="00007"
      currentQuantity={200}
      unit="m"
      unitPrice={1234577}  
      totalPrice={2500}
      averageUnitPrice={1234577}
      totalAmount={617298500}
      currentAmount={2469154000}
      evaluationAmount={3086442500}
      instruction="040008"
      transactionDetails="[会計]3棚卸評価"
    />
  );  
};

const FormContainer = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.span`
  width: 100px;
  font-weight: bold;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  > div {
    width: 48%;
  }
`;

export default ProductionInputForm;