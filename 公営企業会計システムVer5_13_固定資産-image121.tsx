import React from 'react';
import styled from 'styled-components';

interface FixedAssetsParams {
  code: string;
  name: string;
  depreciationMethod: '定額法' | '定率法';
  usefulLife: number;
  residualValue: number;
  acquisitionDate: string;
  depreciationPeriod: 'リース期間' | 'リース資産';
  accountingMethod: '仮勘定(減価償却終了せず)' | '仮勘定(減価償却終了済)';
  startDate: string;
  endDate: string;
  basePrice: number;
  quantity: number;
  memo: string;
}

const FixedAssets: React.FC<FixedAssetsParams> = ({ 
  code,
  name,
  depreciationMethod,
  usefulLife,
  residualValue, 
  acquisitionDate,
  depreciationPeriod,
  accountingMethod,
  startDate,
  endDate,
  basePrice,
  quantity,
  memo
}) => {

  return (
    <Container>
      <Title>固定資産節／明細マスタ</Title>
      <SubTitle>行政市水道事業会計</SubTitle>
      <FlexContainer>
        <div>
          <Label>節</Label>
          <Input value={code} readOnly />
        </div>
        <div>
          <Label>残存率</Label>
          <Input value={residualValue} readOnly />
        </div>
      </FlexContainer>
      <FlexContainer>
        <div>
          <Label>名称</Label>
          <Input value={name} readOnly />
        </div>
        <div>
          <Label>取得年度</Label>
          <Input value={acquisitionDate} readOnly />
        </div>
        <RadioButtonsContainer>
          <Label>土地</Label>
          <input type="radio" checked={depreciationPeriod === 'リース期間'} readOnly />
          <Label>土地資産</Label>
          <input type="radio" checked={depreciationPeriod === 'リース資産'} readOnly />
        </RadioButtonsContainer>
      </FlexContainer>
      <FlexContainer>
        <div>
          <Label>耐用年数</Label>
          <Input value={usefulLife} readOnly />
        </div>
        <RadioButtonsContainer>
          <Label>有形</Label>
          <input type="radio" checked={depreciationMethod === '定額法'} readOnly />
          <Label>無形/投資</Label>
          <input type="radio" checked={depreciationMethod === '定率法'} readOnly />
        </RadioButtonsContainer>
      </FlexContainer>
      <FlexContainer>  
        <RadioButtonsContainer>
          <Label>定額法</Label>
          <input type="radio" checked={accountingMethod === '仮勘定(減価償却終了せず)'} readOnly />
          <Label>定率法(月割)</Label>
          <input type="radio" checked={accountingMethod === '仮勘定(減価償却終了済)'} readOnly />
          <Label>定率法</Label>
          <input type="radio" readOnly />
          <Label>定率法(月割)</Label>
          <input type="radio" readOnly />
          <Label>リース期間定額法</Label>  
          <input type="radio" readOnly />
        </RadioButtonsContainer>
      </FlexContainer>
      <FlexContainer>
        <div>
          <Label>細節コード</Label>
          <Input value="0001" readOnly />
        </div>
        <div>  
          <Label>明細コード</Label>
          <Input value="0001" readOnly />
        </div>
        <div>
          <Label>減価償却開始</Label>     
          <Input value={startDate} readOnly />
        </div>
        <div>
          <Label>除却時仕訳</Label>
          <Input value={endDate} readOnly />
        </div>
        <div>  
          <Label>償却終了</Label>
          <Input value={endDate} readOnly />    
        </div>
      </FlexContainer>
      <FlexContainer>  
        <div>
          <Label>単価</Label>  
          <Input value={basePrice} readOnly />
        </div>
        <div>
          <Label>数量</Label>
          <Input value={quantity} readOnly />  
        </div>
      </FlexContainer>
      <Input value={memo} readOnly />
      <ButtonsContainer>
        <Button>OK</Button>  
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 14px;
  margin-bottom: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  margin-left: 8px;
  padding: 4px;
`;

const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
`;

// Usage example
const FixedAssetsPage: React.FC = () => {
  const fixedAsset: FixedAssetsParams = {
    code: "C61010101",
    name: "土地",
    depreciationMethod: "定額法",
    usefulLife: 10000,
    residualValue: 0.00,
    acquisitionDate: "平成29年09月12日",
    depreciationPeriod: "リース期間",
    accountingMethod: "仮勘定(減価償却終了せず)",
    startDate: "043001",
    endDate: "043001", 
    basePrice: 100000,
    quantity: 1,
    memo: "土地(会計)"
  };

  return <FixedAssets {...fixedAsset} />;
};

export default FixedAssetsPage;