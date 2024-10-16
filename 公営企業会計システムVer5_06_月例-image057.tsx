import React from 'react';
import styled from '@emotion/styled';

type DatePickerProps = {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Format the date as YYYY-MM-DD for input field compatibility
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle start date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    onStartDateChange(selectedDate);
  };

  // Handle end date change
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    onEndDateChange(selectedDate);
  };

  return (
    <Container>
      <Label>
        予算執行状況表（所属別）作成
      </Label>
      <div>
        <Label>
          集計日付：
        </Label>
        <div>
          <DateInput
            type="date"
            value={formatDate(startDate)}
            onChange={handleStartDateChange}
          />
          {' ～ '}
          <DateInput
            type="date"
            value={formatDate(endDate)}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
    </Container>
  );
};

// Example usage of the DatePicker component
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (
    <div>
      <h1>予算執行状況表（所属別）作成</h1>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

export default App;