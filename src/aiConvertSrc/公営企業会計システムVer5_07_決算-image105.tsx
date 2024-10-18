import React from 'react';
import styled from 'styled-components';

// 型定義
interface TaxCalculationProps {
  period: string;
  startDate: string;
  endDate: string;
  taxableIncome: number;
  taxableIncomeSpouse: number;
  specialExemption: string;
  spouseSpecialExemption: string;
  beforeTaxAmount: number;
  incomeTaxAmount: number;
  finalTaxAmount: number;
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  text-align: right;
`;

const Result = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ccc;
`;

const ResultLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ResultValue = styled.div`
  font-size: 24px;
  text-align: right;
`;

// コンポーネント定義
const TaxCalculation: React.FC<TaxCalculationProps> = ({
  period,
  startDate,
  endDate,
  taxableIncome,
  taxableIncomeSpouse,
  specialExemption,
  spouseSpecialExemption,
  beforeTaxAmount,
  incomeTaxAmount,
  finalTaxAmount,
}) => {
  return (
    <Container>
      <Row>
        <Label>期間指定</Label>
        <Value>
          {period || '未設定'} {startDate && endDate ? `${startDate} 〜 ${endDate}` : ''}
        </Value>
      </Row>
      <Row>
        <Label>課税対象所得額(仕入)</Label>
        <Value>{taxableIncome.toLocaleString() || '0'} 円</Value>
      </Row>
      <Row>
        <Label>課税対象所得(売上)</Label>
        <Value>{taxableIncomeSpouse.toLocaleString() || '0'} 円</Value>
      </Row>
      <Row>
        <Label>仕入控除税額計算</Label>
        <Value>{specialExemption || '個別対応方式'}</Value>
      </Row>
      <Row>
        <Label>特定収入による仕入控除税額の調整</Label>
        <Value>{spouseSpecialExemption || '必要'}</Value>
      </Row>
      <Result>
        <Row>
          <ResultLabel>前払消費税額</ResultLabel>
          <ResultValue>{beforeTaxAmount.toLocaleString()} 円</ResultValue>
        </Row>
        <Row>
          <ResultLabel>中間納付額</ResultLabel>
          <ResultValue>{incomeTaxAmount.toLocaleString()} 円</ResultValue>
        </Row>
        <Row>
          <ResultLabel>中間納付譲渡割額</ResultLabel>
          <ResultValue>{finalTaxAmount.toLocaleString()} 円</ResultValue>
        </Row>
      </Result>
    </Container>
  );
};

// サンプルデータ
const sampleData: TaxCalculationProps = {
  period: '課税期間',
  startDate: '平成31年04月01日',
  endDate: '令和02年03月31日',
  taxableIncome: 47381600,
  taxableIncomeSpouse: 0,
  specialExemption: '個別対応方式',
  spouseSpecialExemption: '必要',
  beforeTaxAmount: 47381600,
  incomeTaxAmount: 36965400,
  finalTaxAmount: 10426200,
};

// 使用例
const TaxCalculationSample: React.FC = () => {
  return (
    <div>
      <h2>納付税額算出</h2>
      <TaxCalculation {...sampleData} />
    </div>
  );
};

export default TaxCalculationSample;