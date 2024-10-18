import React from 'react';
import styled from 'styled-components';

// 予算執行状況表コンポーネントの型定義
interface BudgetExecutionTableProps {
  startDate: string;
  endDate: string;
  executionPeriod: '日' | '前' | '細節' | '明細';
  executeOrCancel: 'する' | 'しない';
  totalAmount?: number;
  details?: string;
}

// 予算執行状況表コンポーネント
const BudgetExecutionTable: React.FC<BudgetExecutionTableProps> = ({
  startDate,
  endDate,
  executionPeriod,
  executeOrCancel,
  totalAmount,
  details,
}) => {
  return (
    <Container>
      <Title>予算執行状況表2(科目別・負担/執行)</Title>
      <RangeWrapper>
        <RangeLabel>範囲指定</RangeLabel>
        <RangeInputWrapper>
          <RangeInput type="date" value={startDate} /> ～ <RangeInput type="date" value={endDate} />
        </RangeInputWrapper>
      </RangeWrapper>

      <OptionsWrapper>
        <Option>
          <input type="radio" checked={executionPeriod === '日'} /> 日 
        </Option>
        <Option>
          <input type="radio" checked={executionPeriod === '前'} /> 前
        </Option>
        <Option>
          <input type="radio" checked={executionPeriod === '細節'} /> 細節
        </Option>
        <Option>
          <input type="radio" checked={executionPeriod === '明細'} /> 明細
        </Option>
      </OptionsWrapper>

      <OptionsWrapper>
        <Option>
          <input type="radio" checked={executeOrCancel === 'する'} /> する
        </Option>  
        <Option>
          <input type="radio" checked={executeOrCancel === 'しない'} /> しない
        </Option>
      </OptionsWrapper>

      {totalAmount && (
        <TotalAmountWrapper>
          <TotalAmountLabel>予算科目</TotalAmountLabel>
          <TotalAmount>{totalAmount.toLocaleString()}</TotalAmount>
        </TotalAmountWrapper>
      )}

      {details && (
        <DetailsWrapper>
          <DetailsLabel>集計対象</DetailsLabel>
          <Details>{details}</Details>
        </DetailsWrapper>  
      )}
      
    </Container>
  );
};

// サンプルデータ
const sampleData: BudgetExecutionTableProps = {
  startDate: '2023-09-01',
  endDate: '2023-09-30',
  executionPeriod: '日',
  executeOrCancel: 'する',
  totalAmount: 999999999,
  details: '全体 ブロック セグメント',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>予算執行状況表</h1>
      <BudgetExecutionTable {...sampleData} />
    </div>
  );  
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }  
`;

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const RangeLabel = styled.div`
  margin-right: 8px;
  white-space: nowrap;
`;

const RangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RangeInput = styled.input`
  margin: 0 8px;
  padding: 4px;
`;

const OptionsWrapper = styled.div`
  margin-bottom: 16px;
`;

const Option = styled.label`
  margin-right: 16px;
`;

const TotalAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

const TotalAmountLabel = styled.div`
  margin-right: 8px;
  white-space: nowrap;
`;

const TotalAmount = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const DetailsWrapper = styled.div`
  margin-top: 16px;
`;

const DetailsLabel = styled.div`
  margin-bottom: 8px;
`;

const Details = styled.div`
  padding: 8px;
  background-color: #fff;
`;

export default App;