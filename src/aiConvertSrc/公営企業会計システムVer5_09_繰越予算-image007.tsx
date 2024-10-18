import React from 'react';
import styled from 'styled-components';

// 予算科目別繰越額のプロパティ型定義
type BudgetCarryOverProps = {
  budgetType: 'estimate' | 'actual' | 'reserve'; // 予算区分（当初、補正、予備費）
  yearCode: number; // 年度コード
  budgetAccountCode: string; // 予算科目コード
  budgetName: string; // 予算科目名
  budgetYear: string; // 予算年度
  budgetCode: string; // 予算項コード
  budgetItemCode: string; // 予算細目コード 
  budgetItemName: string; // 予算細目名
  carryOverAmount: number; // 繰越税抜金額
  carryOverTaxAmount: number; // 繰越消費税額
};

// 予算科目別繰越額コンポーネント
const BudgetCarryOver: React.FC<BudgetCarryOverProps> = ({
  budgetType,
  yearCode,
  budgetAccountCode,
  budgetName,
  budgetYear,
  budgetCode,
  budgetItemCode,
  budgetItemName,
  carryOverAmount,
  carryOverTaxAmount,
}) => {
  return (
    <Container>
      <Title>予算科目別繰越額</Title>
      <BudgetTypeContainer>
        <BudgetTypeLabel>予算</BudgetTypeLabel>
        <BudgetTypeValue>{budgetType === 'estimate' ? '当初' : budgetType === 'actual' ? '補正' : '予備費'}</BudgetTypeValue>
      </BudgetTypeContainer>
      <Table>
        <TableRow>
          <TableHeader>会計年度</TableHeader>
          <TableData>{yearCode}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>予算科目コード</TableHeader>  
          <TableData>{budgetAccountCode}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>予算科目名</TableHeader>
          <TableData>{budgetName || '---'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>予算年度</TableHeader>
          <TableData>{budgetYear}</TableData>  
        </TableRow>
        <TableRow>
          <TableHeader>予算項コード</TableHeader>
          <TableData>{budgetCode}</TableData>
        </TableRow>
        <TableRow>  
          <TableHeader>予算細目コード</TableHeader>
          <TableData>{budgetItemCode}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>予算細目名</TableHeader> 
          <TableData>{budgetItemName || '---'}</TableData>
        </TableRow>
      </Table>
      <AmountContainer>
        <AmountItem>
          <AmountLabel>繰越税抜金額</AmountLabel>  
          <AmountValue>{carryOverAmount.toLocaleString()}円</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>繰越消費税額</AmountLabel>
          <AmountValue>{carryOverTaxAmount.toLocaleString()}円</AmountValue>  
        </AmountItem>
      </AmountContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const BudgetTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BudgetTypeLabel = styled.div`
  width: 50px;
`;

const BudgetTypeValue = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;  
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;  
  border: 1px solid #ddd;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AmountItem = styled.div`
  margin-left: 20px;
`;

const AmountLabel = styled.div`
  font-size: 14px;
`;

const AmountValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

// 使用例
const SampleData: BudgetCarryOverProps = {
  budgetType: 'estimate',
  yearCode: 29,  
  budgetAccountCode: '001',
  budgetName: '一般会計',
  budgetYear: '0001',
  budgetCode: '01',
  budgetItemCode: '001',
  budgetItemName: '議会費',
  carryOverAmount: 1000,
  carryOverTaxAmount: 80,
};

const App: React.FC = () => {
  return (
    <BudgetCarryOver {...SampleData} />  
  );
};

export default App;