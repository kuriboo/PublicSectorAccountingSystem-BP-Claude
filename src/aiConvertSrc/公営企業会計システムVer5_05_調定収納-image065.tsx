import React from 'react';
import styled from '@emotion/styled';

// 期間指定コンポーネントの型定義
type DateRangeProps = {
  startDate: string;
  endDate: string;
};

// 期間指定コンポーネント
const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate }) => {
  return (
    <DateRangeContainer>
      <DateRangeLabel>範囲指定</DateRangeLabel>
      <DateRangeValue>
        {startDate} 〜 {endDate}
      </DateRangeValue>
    </DateRangeContainer>
  );
};

// スタイリング
const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const DateRangeLabel = styled.span`
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const DateRangeValue = styled.span`
  font-size: 18px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const startDate = '平成29年06月18日';
  const endDate = '平成29年06月18日';

  return (
    <div>
      <h1>期間指定コンポーネントの使用例</h1>
      <DateRange startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default App;