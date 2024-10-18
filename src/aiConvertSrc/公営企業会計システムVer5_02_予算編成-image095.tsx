import React from 'react';
import styled from 'styled-components';

// 税金計算用の型定義
type TaxCalculationProps = {
  taxRate: number;
  beforeTax: number;
  incomeTax: number;
  residentTax: number;
  deductible: number;
};

// 税金計算用コンポーネント
const TaxCalculation: React.FC<TaxCalculationProps> = ({
  taxRate,
  beforeTax,
  incomeTax,
  residentTax,
  deductible,
}) => {
  // 消費税率のパーセント表示
  const taxRatePercent = `${taxRate} %`;

  // 税抜金額の計算
  const afterTax = beforeTax - incomeTax - residentTax - deductible;

  return (
    <TaxCalculationWrapper>
      <Title>消費税計算</Title>
      <TaxRateWrapper>
        <TaxRateLabel>消費税率</TaxRateLabel>
        <TaxRateValue>{taxRatePercent}</TaxRateValue>
      </TaxRateWrapper>
      <CalculationWrapper>
        <CalculationLabel>税抜金額</CalculationLabel>
        <CalculationValue>{afterTax.toLocaleString()}</CalculationValue>
      </CalculationWrapper>
      <CalculationTable>
        <TableRow>
          <TableHeader>消費税率</TableHeader>
          <TableHeader>前年度</TableHeader>
          <TableHeader>税込</TableHeader>
          <TableHeader>消費税</TableHeader>
          <TableHeader>比較</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>{taxRate.toLocaleString()}</TableData>
          <TableData>{beforeTax.toLocaleString()}</TableData>
          <TableData>{(beforeTax + incomeTax + residentTax).toLocaleString()}</TableData>
          <TableData>{(incomeTax + residentTax).toLocaleString()}</TableData>
          <TableData>{deductible.toLocaleString()}</TableData>
        </TableRow>
      </CalculationTable>
      <TaxBreakdownWrapper>
        <TaxBreakdownLabel>前年度税込</TaxBreakdownLabel>
        <TaxBreakdownValue>{beforeTax.toLocaleString()}</TaxBreakdownValue>
        
        <TaxBreakdownLabel>所得税</TaxBreakdownLabel>
        <TaxBreakdownValue>{incomeTax.toLocaleString()}</TaxBreakdownValue>
        
        <TaxBreakdownLabel>住民税</TaxBreakdownLabel>
        <TaxBreakdownValue>{residentTax.toLocaleString()}</TaxBreakdownValue>

        <TaxBreakdownLabel>消費税</TaxBreakdownLabel>
        <TaxBreakdownValue>{deductible.toLocaleString()}</TaxBreakdownValue>
      </TaxBreakdownWrapper>
    </TaxCalculationWrapper>
  );
};

// コンポーネントのスタイリング
const TaxCalculationWrapper = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const TaxRateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const TaxRateLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const TaxRateValue = styled.span`
  font-size: 18px;
`;

const CalculationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const CalculationLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const CalculationValue = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const CalculationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
`;

const TaxBreakdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
`;

const TaxBreakdownLabel = styled.span`
  font-weight: bold;
  text-align: left;
`;

const TaxBreakdownValue = styled.span`
  text-align: right;
`;

// サンプルデータを用いたコンポーネントの使用例
const TaxCalculationExample: React.FC = () => {
  const taxCalculationProps = {
    taxRate: 5,
    beforeTax: 1680,
    incomeTax: 0,
    residentTax: 0,
    deductible: 0,
  };

  return (
    <div>
      <h1>消費税計算</h1>
      <TaxCalculation {...taxCalculationProps} />
    </div>
  );
};

export default TaxCalculationExample;