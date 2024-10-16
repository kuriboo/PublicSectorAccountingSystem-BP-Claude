import React from 'react';
import styled from '@emotion/styled';

interface DateRangeProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DateInput = styled.input`
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  width: 120px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-right: 5px;
`;

const DateRange: React.FC<DateRangeProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Handle start date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStartDateChange(e.target.value);
  };

  // Handle end date change
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEndDateChange(e.target.value);
  };

  return (
    <DateRangeContainer>
      <div>
        <Label htmlFor="startDate">開始日</Label>
        <DateInput
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <Label htmlFor="endDate">終了日</Label>
        <DateInput
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </DateRangeContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2029-06-18');
  const [endDate, setEndDate] = React.useState('2029-06-18');

  return (
    <div>
      <h2>日付範囲選択</h2>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

export default App;