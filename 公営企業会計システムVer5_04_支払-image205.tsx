import React from 'react';
import styled from 'styled-components';

// 予算情報のプロパティ型定義
type BudgetProps = {
  date: string;
  budget: string;
  consumed: string;
  remaining: string;
};

// 税区分のプロパティ型定義
type TaxProps = {
  name: string;
  rate: number;
};

// コンポーネントのプロパティ型定義
type Props = {
  budgetInfo: BudgetProps;
  taxInfo: TaxProps;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const BudgetInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const BudgetItem = styled.div``;

const TaxInfo = styled.table`
  border-collapse: collapse;
  
  th, td {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
  }
`;

const BudgetDetail: React.FC<Props> = ({ budgetInfo, taxInfo }) => {
  // 予算情報が空の場合の処理
  if (!budgetInfo.date || !budgetInfo.budget || !budgetInfo.consumed || !budgetInfo.remaining) {
    return <div>予算情報が不完全です。</div>;
  }

  return (
    <Container>
      <Title>予算詳細</Title>
      <BudgetInfo>
        <BudgetItem>予算日 {budgetInfo.date}</BudgetItem>
        <BudgetItem>予算額 {budgetInfo.budget} 円</BudgetItem>
        <BudgetItem>予算消費 {budgetInfo.consumed} 円</BudgetItem>
        <BudgetItem>予算明細 {budgetInfo.remaining} 円</BudgetItem>
      </BudgetInfo>
      
      <Title>税区分</Title>
      <TaxInfo>
        <thead>
          <tr>
            <th>単価名称</th>
            <th>規格名称</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{taxInfo.name}</td>
            <td>枚</td>
            <td>1.00</td> 
            <td>100.00</td>
            <td>{taxInfo.rate}</td>
            <td></td>
          </tr>
        </tbody>
      </TaxInfo>
    </Container>
  );
};

// サンプルデータ
const sampleBudgetInfo = {
  date: '00301/01/01',
  budget: '10000',
  consumed: '0001',
  remaining: '1001',
};

const sampleTaxInfo = {
  name: '消費税率',
  rate: 100,
};

// 使用例
const App: React.FC = () => {
  return (
    <BudgetDetail budgetInfo={sampleBudgetInfo} taxInfo={sampleTaxInfo} />
  );
};

export default App;