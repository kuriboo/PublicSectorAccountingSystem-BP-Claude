import React from 'react';
import styled from '@emotion/styled';

interface DateRangeInputProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 150px;
  box-sizing: border-box;
`;

const Separator = styled.span`
  margin: 0 10px;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Format the date as YYYY-MM-DD for input value
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle start date change
  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    onStartDateChange(newDate);
  };

  // Handle end date change
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    onEndDateChange(newDate);
  };

  return (
    <Container>
      <Label htmlFor="startDate">開始日</Label>
      <Input
        type="date"
        id="startDate"
        value={formatDate(startDate)}
        onChange={handleStartDateChange}
      />
      <Separator>〜</Separator>
      <Label htmlFor="endDate">終了日</Label>
      <Input
        type="date"
        id="endDate"
        value={formatDate(endDate)}
        onChange={handleEndDateChange}
      />
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (
    <div>
      <h1>Date Range Input Example</h1>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

export default App;