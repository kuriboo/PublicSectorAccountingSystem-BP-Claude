import React from 'react';
import styled from '@emotion/styled';

interface TaxCalculatorProps {
  incomeAmount?: number;
  deductionAmount?: number;
  taxRate?: number;
  calculationRate?: number;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  incomeAmount = 1080000,
  deductionAmount = 100000,
  taxRate = 8,
  calculationRate = 100,
}) => {
  // 課税額を計算
  const taxableAmount = incomeAmount - deductionAmount;

  // 消費税額を計算
  const taxAmount = Math.floor(taxableAmount * (taxRate / 100));

  // 消費税込み金額を計算  
  const totalAmount = incomeAmount + taxAmount;

  // 控除割合を計算
  const deductionRate = ((deductionAmount / incomeAmount) * 100).toFixed(2);

  return (
    <Container>
      <Title>特例的未収未払調整入力</Title>
      <SummaryContainer>
        <AmountSummary>
          <AmountLabel>課税額</AmountLabel>
          <AmountValue>{taxableAmount.toLocaleString()}円</AmountValue>
        </AmountSummary>
        <AmountSummary>
          <AmountLabel>税抜額</AmountLabel>
          <AmountValue>{incomeAmount.toLocaleString()}円</AmountValue>
        </AmountSummary>
        <AmountSummary>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{taxAmount.toLocaleString()}円</AmountValue>  
        </AmountSummary>
      </SummaryContainer>
      <TableContainer>
        <TableHeader>
          <HeaderCell>税区分</HeaderCell>
          <HeaderCell>消費税率及び地方消費税率</HeaderCell>
          <HeaderCell>地方消費税率</HeaderCell>
          <HeaderCell>収入区分</HeaderCell>
          <HeaderCell>税込額</HeaderCell>
          <HeaderCell>税抜額</HeaderCell>
          <HeaderCell>消費税額</HeaderCell>
          <HeaderCell>控除割合</HeaderCell>
        </TableHeader>
        <TableRow>
          <Cell>課税</Cell>
          <Cell>{calculationRate.toFixed(2)}</Cell>
          <Cell>2.20</Cell>  
          <Cell>-</Cell>
          <Cell>{totalAmount.toLocaleString()}</Cell>
          <Cell>{incomeAmount.toLocaleString()}</Cell>
          <Cell>{taxAmount.toLocaleString()}</Cell>
          <Cell>{deductionRate}%</Cell>
        </TableRow>
      </TableContainer>
      <CalculationContainer>
        <CalculationRow>
          <CalculationLabel>税区分</CalculationLabel>
          <CalculationInput value="課税" readOnly />
        </CalculationRow>
        <CalculationRow>  
          <CalculationLabel>税率</CalculationLabel>
          <CalculationInput value={taxRate} readOnly />
          <CalculationUnit>%</CalculationUnit>
          <CalculationCheckbox type="checkbox" />
          <CalculationCheckboxLabel>軽減税率</CalculationCheckboxLabel>
        </CalculationRow>
        <CalculationRow>
          <CalculationLabel>収入区分</CalculationLabel>  
          <CalculationInput />
        </CalculationRow>
        <CalculationRow>
          <CalculationLabel>控除割合</CalculationLabel>
          <CalculationInput value={calculationRate} />  
          <CalculationUnit>%</CalculationUnit>
        </CalculationRow>
        <CalculationButtonContainer>
          <CalculationButton>行確定</CalculationButton>
          <CalculationButton>行キャンセル</CalculationButton>  
        </CalculationButtonContainer>
      </CalculationContainer>
      <SubmitButtonContainer>
        <SubmitButton>OK</SubmitButton>  
        <SubmitButton>クリア</SubmitButton>
        <SubmitButton>終了</SubmitButton>
      </SubmitButtonContainer>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const AmountSummary = styled.div`
  display: flex;
  align-items: baseline;
`;

const AmountLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const AmountValue = styled.span`
  font-size: 24px;
`;

const TableContainer = styled.div`
  margin-bottom: 24px;  
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  font-weight: bold;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

const HeaderCell = styled.div`
  text-align: center;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

const Cell = styled.div`
  text-align: center;
`;

const CalculationContainer = styled.div`
  margin-bottom: 24px;
`;

const CalculationRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const CalculationLabel = styled.label`
  width: 100px;
  margin-right: 8px;  
`;

const CalculationInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
`;

const CalculationUnit = styled.span`
  margin-right: 8px;
`;

const CalculationCheckbox = styled.input`
  margin-right: 4px;
`;

const CalculationCheckboxLabel = styled.label`
  margin-left: 4px;
`;

const CalculationButtonContainer = styled.div`
  margin-top: 16px;
`;

const CalculationButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
`;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <TaxCalculator />
    </div>
  );
};

export default App;