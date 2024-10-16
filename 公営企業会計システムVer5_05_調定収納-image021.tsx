import React from 'react';
import styled from 'styled-components';

// 調定明細表コンポーネントの型定義
type AdjustmentDetailsProps = {
  period: string;
  startDate: string;
  endDate: string;
};

// 調定明細表コンポーネント
const AdjustmentDetails: React.FC<AdjustmentDetailsProps> = ({ period, startDate, endDate }) => {
  return (
    <Container>
      <Title>調定明細表</Title>
      <PeriodContainer>
        <PeriodLabel>調定日</PeriodLabel>
        <PeriodValue>{period || 'ー'} ～ {period || 'ー'}</PeriodValue>
      </PeriodContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PeriodLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const PeriodValue = styled.span`
  font-size: 16px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: AdjustmentDetailsProps = {
    period: '調定日',
    startDate: '平成29年08月30日',
    endDate: '平成29年08月30日',
  };

  return (
    <div>
      <h1>調定明細表の使用例</h1>
      <AdjustmentDetails {...sampleData} />
    </div>
  );
};

export default SampleUsage;