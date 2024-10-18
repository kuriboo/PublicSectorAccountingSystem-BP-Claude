import React from 'react';
import styled from '@emotion/styled';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onDateChange: (startDate: string, endDate: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, onDateChange }) => {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(e.target.value, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(startDate, e.target.value);
  };

  return (
    <Container>
      <Label>期間指定</Label>
      <div>
        <DateInput
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        〜
        <DateInput
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [dateRange, setDateRange] = React.useState({
    startDate: '2023-04-01',
    endDate: '2023-08-31',
  });

  const handleDateChange = (startDate: string, endDate: string) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div>
      <h1>Date Range Picker Example</h1>
      <DateRangePicker
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onDateChange={handleDateChange}
      />
      <p>Selected Date Range: {dateRange.startDate} - {dateRange.endDate}</p>
    </div>
  );
};

export default App;