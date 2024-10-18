import React from 'react';
import styled from 'styled-components';

// 取得金額計算用の型定義
type CalculationResult = {
  acquisitionCost: number;
  taxRate: number;
  managementCost: number;
  acquisitionTax: number;
  total: number;
};

// 取得金額計算コンポーネントのプロパティ型定義
type AcquisitionAmountCalculatorProps = {
  price: number;
  taxRate?: number;
  managementCostRate?: number;
};

// 取得金額計算コンポーネント
const AcquisitionAmountCalculator: React.FC<AcquisitionAmountCalculatorProps> = ({
  price,
  taxRate = 4.0,
  managementCostRate = 7.5,
}) => {
  // 取得金額の計算
  const calculate = (price: number, taxRate: number, managementCostRate: number): CalculationResult => {
    const acquisitionCost = Math.floor(price / (1 + taxRate / 100));
    const acquisitionTax = price - acquisitionCost;
    const managementCost = Math.floor(acquisitionCost * (managementCostRate / 100));
    const total = acquisitionCost + managementCost;

    return {
      acquisitionCost,
      taxRate,
      managementCost,
      acquisitionTax,
      total,
    };
  };

  // 計算結果の取得
  const result = calculate(price, taxRate, managementCostRate);

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <HeaderCell>取得金額</HeaderCell>
            <Cell>{result.acquisitionCost.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>消費税率</HeaderCell>
            <Cell>{result.taxRate}%</Cell>
          </tr>
          <tr>
            <HeaderCell>管理費</HeaderCell> 
            <Cell>{result.managementCost.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>取得税額</HeaderCell>
            <Cell>{result.acquisitionTax.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>合計</HeaderCell>
            <Cell>{result.total.toLocaleString()}</Cell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>取得金額: 800,500円の場合</h2>
      <AcquisitionAmountCalculator price={800500} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  margin: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const HeaderCell = styled.td`
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
`;

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: right;
`;

export default AcquisitionAmountCalculator;