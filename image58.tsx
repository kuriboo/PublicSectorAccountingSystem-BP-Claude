import React from 'react';
import styled from 'styled-components';

// 税金計算のインターフェース
interface TaxCalculationProps {
  supportType: string;
  income: number;
  deduction: number;
  taxableIncome: number;
  taxAmount: number;
  taxRate: number;
}

// 税金計算コンポーネント
const TaxCalculation: React.FC<TaxCalculationProps> = ({
  supportType,
  income,
  deduction,
  taxableIncome,
  taxAmount,
  taxRate,
}) => {
  return (
    <Container>
      <Row>
        <Cell>{supportType}</Cell>
        <Cell>{income.toLocaleString()}</Cell>
        <Cell>{deduction.toLocaleString()}</Cell>
        <Cell>{taxableIncome.toLocaleString()}</Cell>
        <Cell>{taxRate}</Cell>
        <Cell>{taxAmount.toLocaleString()}</Cell>
      </Row>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Cell = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 8px;

  &:first-child {
    text-align: left;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 4px;
    text-align: left;
  }
`;

// サンプルデータ
const taxCalculations: TaxCalculationProps[] = [
  {
    supportType: '支出',
    income: 1137466,
    deduction: 21300,
    taxableIncome: 1357566,
    taxAmount: 4550,
    taxRate: 3,
  },
  {
    supportType: '支出',
    income: 2600,
    deduction: 0,
    taxableIncome: 8192,
    taxAmount: 1000,
    taxRate: 3,
  },
  // ... more data
];

// 使用例
const TaxCalculationList: React.FC = () => {
  return (
    <div>
      {taxCalculations.map((calculation, index) => (
        <TaxCalculation key={index} {...calculation} />
      ))}
    </div>
  );
};

export default TaxCalculationList;