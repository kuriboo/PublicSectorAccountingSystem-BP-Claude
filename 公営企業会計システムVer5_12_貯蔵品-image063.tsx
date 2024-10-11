import React from 'react';
import styled from 'styled-components';

interface DateRangeProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DateLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 150px;
`;

const Arrow = styled.span`
  margin: 0 10px;
  font-size: 18px;
`;

const DateRange: React.FC<DateRangeProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const formatDate = (date: Date) => {
    // フォーマットされた日付文字列を返す
    return date.toISOString().split('T')[0];
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onStartDateChange(date);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onEndDateChange(date);
  };

  return (
    <DateRangeContainer>
      <div>
        <DateLabel htmlFor="startDate">開始日付:</DateLabel>
        <DateInput
          type="date"
          id="startDate"
          value={formatDate(startDate)}
          onChange={handleStartDateChange}
        />
      </div>
      <Arrow>→</Arrow>
      <div>
        <DateLabel htmlFor="endDate">終了日付:</DateLabel>
        <DateInput
          type="date"
          id="endDate"
          value={formatDate(endDate)}
          onChange={handleEndDateChange}
        />
      </div>
    </DateRangeContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div>
      <h1>日付範囲選択</h1>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />
    </div>
  );
};

export default App;