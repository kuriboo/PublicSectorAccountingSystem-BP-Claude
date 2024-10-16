import React from 'react';
import styled from 'styled-components';

// 確定申告画面のプロパティ型定義
interface TaxReturnProps {
  year: number;
  lossCarryForward?: number;
  incomeAmount: number;
  description: string;
  taxBeforeCredit: number;
  taxCredit: number;
  taxTotal: number;
  percentageDeduction: number;
  deductionAmount: number;
  taxableIncome: number;
  taxAmount: number;
}

// 確定申告画面のコンポーネント
const TaxReturn: React.FC<TaxReturnProps> = ({
  year,
  lossCarryForward = 0,
  incomeAmount,
  description,
  taxBeforeCredit,
  taxCredit,
  taxTotal,
  percentageDeduction,
  deductionAmount,
  taxableIncome,
  taxAmount,
}) => {
  return (
    <TaxReturnWrapper>
      <Title>確定申告</Title>
      <Line />
      <DetailRow>
        <Label>年度</Label>
        <Value>{year}</Value>
        <Label>繰越損失</Label>
        <Value>{lossCarryForward.toLocaleString()}</Value>
      </DetailRow>
      <DetailRow>
        <Label>所得金額</Label>
        <Value>{incomeAmount.toLocaleString()}</Value>
      </DetailRow>
      <DetailRow>
        <Label>摘要</Label>
        <Value>{description}</Value>
      </DetailRow>
      <SummarySection>
        <SummaryLabel>税引前</SummaryLabel>
        <SummaryValue>{taxBeforeCredit.toLocaleString()}</SummaryValue>
        <SummaryLabel>税引後</SummaryLabel>
        <SummaryValue>{taxTotal.toLocaleString()}</SummaryValue>
      </SummarySection>
      <CreditSection>
        <Label>税額控除</Label>
        <Value>{taxCredit.toLocaleString()}</Value>
      </CreditSection>
      <DeductionSection>
        <Label>控除率</Label>
        <Value>{percentageDeduction}%</Value>
        <Label>控除金額</Label>
        <Value>{deductionAmount.toLocaleString()}</Value>
      </DeductionSection>
      <TaxSection>
        <Label>課税所得</Label>
        <Value>{taxableIncome.toLocaleString()}</Value>
        <Label>消費税額</Label>
        <Value>{taxAmount.toLocaleString()}</Value>
      </TaxSection>
    </TaxReturnWrapper>
  );
};

// スタイリング
const TaxReturnWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const DetailRow = styled.div`
  display: flex; 
  margin-bottom: 5px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;

  @media (max-width: 400px) {
    width: 80px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

const SummarySection = styled.div`
  display: flex;
  justify-content: space-between; 
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
`;

const SummaryLabel = styled.div`
  font-weight: bold;
`;

const SummaryValue = styled.div`
  width: 120px;
  text-align: right;
`;

const CreditSection = styled.div`
  margin-bottom: 10px;
`;

const DeductionSection = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TaxSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

// サンプルデータを使用した表示用コンポーネント
const TaxReturnExample = () => {
  const taxReturnData: TaxReturnProps = {
    year: 2023,
    lossCarryForward: 10000,
    incomeAmount: 5000000,
    description: '全給与所得者の源泉徴収票',
    taxBeforeCredit: 1256320,
    taxCredit: 0,
    taxTotal: 1256320,
    percentageDeduction: 0,
    deductionAmount: 0,
    taxableIncome: 82954972,
    taxAmount: 0,  
  };

  return <TaxReturn {...taxReturnData} />;
};

export default TaxReturnExample;