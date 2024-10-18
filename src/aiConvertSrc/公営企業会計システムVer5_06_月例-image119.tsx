import React from 'react';
import styled from 'styled-components';

type MonthlyTargetProps = {
  date: string;
  segment: '全体' | 'ブロック' | 'セグメント';
};

const MonthlyTarget: React.FC<MonthlyTargetProps> = ({ date, segment }) => {
  // 日付が空の場合はデフォルト値を設定
  const formattedDate = date ? date : '令和05年07月24日';

  return (
    <Container>
      <Title>月次貸借対照表</Title>
      <DateText>{formattedDate}</DateText>
      <SegmentContainer>
        <SegmentLabel>集計対象</SegmentLabel>
        <SegmentValue>
          <SegmentRadio type="radio" checked={segment === '全体'} readOnly /> 全体
          <SegmentRadio type="radio" checked={segment === 'ブロック'} readOnly /> ブロック  
          <SegmentRadio type="radio" checked={segment === 'セグメント'} readOnly /> セグメント
        </SegmentValue>
      </SegmentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #666;
`;

const SegmentContainer = styled.div`
  margin-top: 16px;
`;

const SegmentLabel = styled.span`
  font-size: 14px;
  margin-right: 8px;
`;

const SegmentValue = styled.div`
  display: flex;
  align-items: center;
`;

const SegmentRadio = styled.input`
  margin-right: 4px;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <MonthlyTarget date="令和05年07月24日" segment="全体" />
      <MonthlyTarget date="令和05年08月31日" segment="ブロック" />
      <MonthlyTarget date="" segment="セグメント" />
    </div>
  );
};

export default App;