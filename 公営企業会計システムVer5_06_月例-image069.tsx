import React from 'react';
import styled from '@emotion/styled';

interface BusinessHoursProps {
  date: string;
  startTime: string;
  endTime: string;
  isClosed?: boolean;
  isHoliday?: boolean;
}

const BusinessHoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const DateText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const TimeText = styled.span`
  font-size: 16px;
  margin: 0 10px;
`;

const StatusText = styled.p`
  font-size: 14px;
  color: ${({ isClosed, isHoliday }) =>
    isClosed ? 'red' : isHoliday ? 'orange' : 'green'};
`;

const BusinessHours: React.FC<BusinessHoursProps> = ({
  date,
  startTime,
  endTime,
  isClosed = false,
  isHoliday = false,
}) => {
  return (
    <BusinessHoursWrapper>
      {/* 日付の表示 */}
      <DateText>{date}</DateText>

      {/* 営業時間の表示 */}
      {!isClosed && !isHoliday && (
        <TimeWrapper>
          <TimeText>{startTime}</TimeText>
          <span>～</span>
          <TimeText>{endTime}</TimeText>
        </TimeWrapper>
      )}

      {/* 状態の表示 */}
      <StatusText isClosed={isClosed} isHoliday={isHoliday}>
        {isClosed ? '休止' : isHoliday ? '休校' : ''}
      </StatusText>
    </BusinessHoursWrapper>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>営業時間</h1>
      <BusinessHours
        date="平成29年09月04日"
        startTime="00:00"
        endTime="99:99"
        isClosed
      />
    </div>
  );
};

export default App;