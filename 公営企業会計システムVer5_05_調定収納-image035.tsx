import React from 'react';
import styled from 'styled-components';

// 型定義
interface ReceiptPeriodProps {
  startDate: string;
  endDate: string;
}

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DateRange = styled.span`
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

// コンポーネント
const ReceiptPeriod: React.FC<ReceiptPeriodProps> = ({ startDate, endDate }) => {
  // 日付が空の場合のデフォルト値
  const formattedStartDate = startDate || 'YYYY-MM-DD';
  const formattedEndDate = endDate || 'YYYY-MM-DD';

  return (
    <Container>
      <Label>期間指定</Label>
      <DateRange>
        {formattedStartDate} 〜 {formattedEndDate}
      </DateRange>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>領収書情報</h1>
      <ReceiptPeriod startDate="2022-01-01" endDate="2022-03-31" />
    </div>
  );
};

export default App;