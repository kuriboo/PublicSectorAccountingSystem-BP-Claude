import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <Label>取引期間</Label>
      <InputContainer>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          placeholder="0000000"
        />
        <span>〜</span>
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          placeholder="9999999"
        />
      </InputContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleStartDateChange = (date: string) => {
    // Validation and error handling can be added here
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    // Validation and error handling can be added here
    setEndDate(date);
  };

  return (
    <div>
      <h1>所属企業会計システム</h1>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />
      {/* Other components */}
    </div>
  );
};

export default App;