import React from 'react';
import styled from 'styled-components';

// 予算調整期間の型定義
type BudgetAdjustmentPeriodProps = {
  title: string;
  startDate: string;
  endDate: string;
  startAmount: number;
  endAmount: number;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  margin: 0 10px;
  font-size: 16px;
  color: #666;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  font-size: 16px;
  color: #666;
`;

const Label = styled.span`
  margin-right: 5px;
`;

const Value = styled.span`
  font-weight: bold;
`;

// 予算調整期間コンポーネント
const BudgetAdjustmentPeriod: React.FC<BudgetAdjustmentPeriodProps> = ({
  title,
  startDate,
  endDate,
  startAmount,
  endAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateRangeContainer>
        <DateRange>{startDate} 〜 {endDate}</DateRange>
      </DateRangeContainer>
      <AmountContainer>
        <Amount>
          <Label>所属:</Label>
          <Value>{startAmount}</Value>
        </Amount>
        <Amount>
          <Label>所属:</Label>
          <Value>{endAmount}</Value>
        </Amount>
      </AmountContainer>
    </Container>
  );
};

// コンポーネントの使用例
const App: React.FC = () => {
  return (
    <BudgetAdjustmentPeriod
      title="予算調整期間表"
      startDate="平成29年6月1日"
      endDate="平成29年8月31日"
      startAmount={0}
      endAmount={9999999}
    />
  );
};

export default App;