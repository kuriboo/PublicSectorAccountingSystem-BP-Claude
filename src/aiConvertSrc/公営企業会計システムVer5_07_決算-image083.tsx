import React from 'react';
import styled from '@emotion/styled';

// 特定収入情報のプロパティ型定義
type SpecificIncomeProps = {
  annualIncome: number;
  grade3Income: number;
  grade4Income: number;
  otherIncome: number;
};

// 課税仕入情報のプロパティ型定義
type TaxablePurchasesProps = {
  taxRates: number[];
  purchases: number[];
  totalPurchases: number;
};

// 特定収入入力コンポーネント
const SpecificIncome: React.FC<SpecificIncomeProps> = ({
  annualIncome,
  grade3Income,
  grade4Income,
  otherIncome,
}) => {
  return (
    <SpecificIncomeContainer>
      <SpecificIncomeTitle>特定収入項目名称：補助金・交付金等</SpecificIncomeTitle>
      <SpecificIncomeAmount>特定収入額：{annualIncome.toLocaleString()} 円</SpecificIncomeAmount>
      <SpecificIncomeBreakdown>
        <BreakdownItem>3条：{grade3Income.toLocaleString()} 円</BreakdownItem>
        <BreakdownItem>4条：{grade4Income.toLocaleString()} 円</BreakdownItem>
        <BreakdownItem>その他：{otherIncome.toLocaleString()} 円</BreakdownItem>
      </SpecificIncomeBreakdown>
    </SpecificIncomeContainer>
  );
};

// 課税仕入コンポーネント
const TaxablePurchases: React.FC<TaxablePurchasesProps> = ({ taxRates, purchases, totalPurchases }) => {
  return (
    <TaxablePurchasesContainer>
      <TaxablePurchasesTitle>消費税率及び地方消費税率</TaxablePurchasesTitle>
      <TaxablePurchasesList>
        {taxRates.map((rate, index) => (
          <TaxablePurchasesItem key={index}>
            <TaxRateLabel>{rate.toFixed(2)}%({rate.toFixed(1)}%)</TaxRateLabel>
            <TaxPurchaseInput type="number" defaultValue={purchases[index]} /> 円
          </TaxablePurchasesItem>
        ))}
      </TaxablePurchasesList>
      <TaxablePurchasesTotal>
        <TotalLabel>合計</TotalLabel>
        <TotalAmount>{totalPurchases} 円</TotalAmount>
      </TaxablePurchasesTotal>
    </TaxablePurchasesContainer>
  );
};

// メインコンポーネント
const TaxCalculator: React.FC = () => {
  // サンプルデータ
  const specificIncomeData: SpecificIncomeProps = {
    annualIncome: 12845000,
    grade3Income: 10873000, 
    grade4Income: 1952000,
    otherIncome: 20000,
  };

  const taxablePurchasesData: TaxablePurchasesProps = {
    taxRates: [10.00, 8.00, 8.00, 5.00, 3.00],
    purchases: [220, 176, 170, 100, 0],
    totalPurchases: 10873000,
  };

  return (
    <CalculatorContainer>
      <SpecificIncome {...specificIncomeData} />
      <PreferenceContainer>
        <PreferenceItem>
          <PreferenceLabel>6条</PreferenceLabel>
          <PreferenceInput type="radio" name="preference" />
        </PreferenceItem>
        <PreferenceItem>
          <PreferenceLabel>4条</PreferenceLabel>
          <PreferenceInput type="radio" name="preference" />
        </PreferenceItem>
        <PreferenceItem>
          <PreferenceLabel>その他</PreferenceLabel>
          <PreferenceInput type="radio" name="preference" />
        </PreferenceItem>
      </PreferenceContainer>
      <TaxablePurchases {...taxablePurchasesData} />
      <ActionContainer>
        <ActionButton>OK</ActionButton>
        <ActionButton>クリア</ActionButton>
        <ActionButton>キャンセル</ActionButton>
      </ActionContainer>
    </CalculatorContainer>
  );
};

export default TaxCalculator;

// スタイリング
const CalculatorContainer = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const SpecificIncomeContainer = styled.div`
  margin-bottom: 20px;
`;

const SpecificIncomeTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SpecificIncomeAmount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SpecificIncomeBreakdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreakdownItem = styled.span`
  margin-bottom: 5px;
`;

const PreferenceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const PreferenceItem = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const PreferenceLabel = styled.span`
  margin-right: 5px;
`;

const PreferenceInput = styled.input`
  cursor: pointer;
`;

const TaxablePurchasesContainer = styled.div`
  margin-bottom: 20px;
`;

const TaxablePurchasesTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TaxablePurchasesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
`;

const TaxablePurchasesItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const TaxRateLabel = styled.span`
  margin-right: 10px;
`;

const TaxPurchaseInput = styled.input`
  width: 100px;
  margin-right: 5px;
`;

const TaxablePurchasesTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const TotalLabel = styled.span`
  margin-right: 10px;
`;

const TotalAmount = styled.span``;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ActionButton = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;