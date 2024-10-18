import React from 'react';
import styled from 'styled-components';

// 施設決済セグメントのプロパティ型定義
type FacilitySegmentProps = {
  segment: string;
  amount: number;
};

// 施設決済セグメントコンポーネント
const FacilitySegment: React.FC<FacilitySegmentProps> = ({ segment, amount }) => {
  return (
    <SegmentRow>
      <SegmentName>{segment}</SegmentName>
      <SegmentAmount>{amount.toLocaleString()}</SegmentAmount>
    </SegmentRow>
  );
};

// 施設決済セグメントのスタイル
const SegmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

const SegmentName = styled.div`
  font-size: 14px;
`;

const SegmentAmount = styled.div`
  font-size: 14px;
  text-align: right;
`;

// 施設決済サマリーのプロパティ型定義
type FacilitySummaryProps = {
  title: string;
  segments: FacilitySegmentProps[];
  total: number;
};

// 施設決済サマリーコンポーネント
const FacilitySummary: React.FC<FacilitySummaryProps> = ({ title, segments, total }) => {
  return (
    <SummaryContainer>
      <Title>{title}</Title>
      {segments.map((segment, index) => (
        <FacilitySegment key={index} segment={segment.segment} amount={segment.amount} />
      ))}
      <TotalRow>
        <TotalLabel>合計</TotalLabel>
        <TotalAmount>{total.toLocaleString()}</TotalAmount>
      </TotalRow>
    </SummaryContainer>
  );
};

// 施設決済サマリーのスタイル
const SummaryContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #ccc;
`;

const TotalLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const TotalAmount = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// 使用例
const App: React.FC = () => {
  const segments = [
    { segment: '公共下水道', amount: 171 },
    { segment: '下水道事業収益', amount: 10 },
    { segment: '営業収益', amount: 10 },
    { segment: '下水道使用料', amount: 10 },
  ];

  return (
    <div>
      <FacilitySummary
        title="令和2年度"
        segments={segments}
        total={107840}
      />
    </div>
  );
};

export default App;