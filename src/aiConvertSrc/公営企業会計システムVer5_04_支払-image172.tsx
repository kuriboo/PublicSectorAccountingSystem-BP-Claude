import React from 'react';
import styled from '@emotion/styled';

interface DateRangeInputProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateInput = styled.input`
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
  margin-right: 8px;
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <InputContainer>
        <Label>予算年月日</Label>
      </InputContainer>
      <InputContainer>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <Divider>〜</Divider>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </InputContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2023-04-01');
  const [endDate, setEndDate] = React.useState('2023-06-30');

  return (
    <div>
      <h1>予算科目別契約一覧表作成</h1>
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