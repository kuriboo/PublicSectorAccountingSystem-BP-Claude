import React from 'react';
import styled from '@emotion/styled';

// 工事材料明細の型定義
type ConstructionMaterialBreakdownProps = {
  constructionType: string;
  settlementType: string;
  materialUnitPrice: number;
  constructionUnitPrice: number;
  predictedAmount: number;
  consumptionTax: number;
  subtotal: number;
  expenses: number[];
  fixedAssetAcquisitionTax: number[];
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 200px;
`;

const Value = styled.div`
  width: 150px;
`;

const Expenses = styled.div`
  margin-top: 20px;
`;

const ExpensesItem = styled.div`
  display: flex;
`;

// 工事材料明細コンポーネント
const ConstructionMaterialBreakdown: React.FC<ConstructionMaterialBreakdownProps> = ({
  constructionType,
  settlementType,
  materialUnitPrice,
  constructionUnitPrice,
  predictedAmount,
  consumptionTax,
  subtotal,
  expenses,
  fixedAssetAcquisitionTax,
}) => {
  return (
    <Container>
      <Row>
        <Label>工種区分</Label>
        <Value>{constructionType || '---'}</Value>
      </Row>
      <Row>
        <Label>設置区分</Label>
        <Value>{settlementType || '---'}</Value>
      </Row>
      <Row>
        <Label>材料名称</Label>
        <Value>{materialUnitPrice ? `${materialUnitPrice} (DIF(A1)精算値)` : '00001'}</Value>
      </Row>
      <Row>
        <Label>規格名称</Label>
        <Value>{constructionUnitPrice ? `φ100` : '00010'}</Value>
      </Row>
      <Row>
        <Label>数量・単位</Label>
        <Value>{predictedAmount || 0} m</Value>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Value>{consumptionTax || 0} %</Value>
      </Row>
      <Row>
        <Label>税込金額</Label>
        <Value>{subtotal || 0}</Value>
      </Row>
      <Row>
        <Label>税抜金額</Label>
        <Value>{predictedAmount || 0}</Value>
      </Row>
      <Expenses>
        <div>按分領保守</div>
        {expenses.map((expense, index) => (
          <ExpensesItem key={index}>
            <Label>直接計上額</Label>
            <Value>{expense || 0}</Value>
          </ExpensesItem>
        ))}
      </Expenses>
      <Expenses>
        <div>固定資産取得額</div>
        {fixedAssetAcquisitionTax.map((tax, index) => (
          <ExpensesItem key={index}>
            <Label>直接計上額</Label>
            <Value>{tax || 0}</Value>
          </ExpensesItem>
        ))}
      </Expenses>
    </Container>
  );
};

// サンプルデータ
const sampleData: ConstructionMaterialBreakdownProps = {
  constructionType: '配水管布設工事', 
  settlementType: '布設',
  materialUnitPrice: 1,
  constructionUnitPrice: 10,
  predictedAmount: 100,
  consumptionTax: 8,
  subtotal: 5888888,
  expenses: [0, 0, 0],
  fixedAssetAcquisitionTax: [0, 0, 0, 0, 0, 0],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>工事材料明細</h1>
      <ConstructionMaterialBreakdown {...sampleData} />
    </div>
  );
};

export default App;