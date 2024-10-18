import React from 'react';
import styled from 'styled-components';

// 税区分集計のプロパティ型定義
interface TaxClassificationSummaryProps {
  startDate?: Date;
  endDate?: Date;
}

// 税区分集計コンポーネント
const TaxClassificationSummary: React.FC<TaxClassificationSummaryProps> = ({
  startDate,
  endDate,
}) => {
  // 範囲指定の文字列を生成
  const getRangeDateString = () => {
    if (!startDate || !endDate) return '';
    const start = startDate.toLocaleDateString();
    const end = endDate.toLocaleDateString();
    return `${start} ～ ${end}`;
  };

  return (
    <Container>
      <Title>税区分集計</Title>
      <DateRange>{getRangeDateString()}</DateRange>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 14px;
`;

// 使用例
const App: React.FC = () => {
  const startDate = new Date('2021-04-01');
  const endDate = new Date('2021-06-30');

  return (
    <div>
      <h1>税区分集計</h1>
      <TaxClassificationSummary startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default App;