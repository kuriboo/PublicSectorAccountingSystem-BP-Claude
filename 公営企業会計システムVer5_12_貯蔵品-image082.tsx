import React from 'react';
import styled from 'styled-components';

// 期間の型定義
type PeriodProps = {
  startDate: string;
  endDate: string;
};

// 金額の型定義
type AmountProps = {
  label: string;
  value: number;
};

// 調整金額入出庫明細作成コンポーネントの型定義
type AdjustmentAmountDetailProps = {
  period: PeriodProps;
  openingBalance: AmountProps;
  closingBalance: AmountProps;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  width: 300px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PeriodWrapper = styled.div`
  margin-bottom: 10px;
`;

const PeriodLabel = styled.span`
  margin-right: 5px;
`;

const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const AmountLabel = styled.div``;

const AmountValue = styled.div``;

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-left: 5px;
`;

/**
 * 調整金額入出庫明細作成コンポーネント
 */
const AdjustmentAmountDetail: React.FC<AdjustmentAmountDetailProps> = ({
  period,
  openingBalance,
  closingBalance,
}) => {
  return (
    <Container>
      <Title>調整金額入出庫明細作成</Title>
      <PeriodWrapper>
        <PeriodLabel>期間:</PeriodLabel>
        {period.startDate} 〜 {period.endDate}
      </PeriodWrapper>
      <AmountWrapper>
        <AmountLabel>{openingBalance.label}</AmountLabel>
        <AmountValue>{openingBalance.value.toLocaleString()}</AmountValue>
      </AmountWrapper>
      <AmountWrapper>
        <AmountLabel>{closingBalance.label}</AmountLabel>
        <AmountValue>{closingBalance.value.toLocaleString()}</AmountValue>
      </AmountWrapper>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default AdjustmentAmountDetail;

// 使用例
const sampleData: AdjustmentAmountDetailProps = {
  period: {
    startDate: '平成29年09月14日',
    endDate: '平成29年09月14日',
  },
  openingBalance: {
    label: '前残',
    value: 1000000,
  },
  closingBalance: {
    label: '〆残高',
    value: 9999999,
  },
};

const App: React.FC = () => {
  return (
    <div>
      <h1>調整金額入出庫明細作成</h1>
      <AdjustmentAmountDetail {...sampleData} />
    </div>
  );
};

export default App;