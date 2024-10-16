import React, { useState } from 'react';
import styled from '@emotion/styled';

interface DateRangeInputProps {
  initialStartDate?: string;
  initialEndDate?: string;
  onDateRangeChange: (startDate: string, endDate: string) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  initialStartDate = '',
  initialEndDate = '',
  onDateRangeChange,
}) => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleButtonClick = () => {
    onDateRangeChange(startDate, endDate);
  };

  return (
    <Container>
      <Input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <span>~</span>
      <Input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
      />
      <Button onClick={handleButtonClick}>OK</Button>
      <Button>クリア</Button>
      <Button>終了</Button>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log('Selected date range:', startDate, endDate);
  };

  return (
    <div>
      <h1>Date Range Input Example</h1>
      <DateRangeInput
        initialStartDate="2023-06-18"
        initialEndDate="2023-06-18"
        onDateRangeChange={handleDateRangeChange}
      />
    </div>
  );
};

export default App;