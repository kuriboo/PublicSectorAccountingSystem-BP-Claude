import React from 'react';
import styled from '@emotion/styled';

interface EntryInputProps {
  defaultValue?: string;
  startDate?: string;
  endDate?: string;
  onInputChange?: (value: string) => void;
  onStartDateChange?: (value: string) => void;
  onEndDateChange?: (value: string) => void;
}

const EntryInput: React.FC<EntryInputProps> = ({
  defaultValue = '',
  startDate = '',
  endDate = '',
  onInputChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <InputWrapper>
        <Label>入出庫合計表範囲入力</Label>
        <Input
          type="text"
          defaultValue={defaultValue}
          onChange={(e) => onInputChange?.(e.target.value)}
        />
      </InputWrapper>
      <DateInputWrapper>
        <Label>入出庫年月</Label>
        <DateInput
          type="date"
          defaultValue={startDate}
          onChange={(e) => onStartDateChange?.(e.target.value)}
        />
        <DateDelimiter>~</DateDelimiter>
        <DateInput
          type="date"
          defaultValue={endDate}
          onChange={(e) => onEndDateChange?.(e.target.value)}
        />
      </DateInputWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 4px;
`;

const DateInput = styled.input`
  padding: 4px;
  width: 120px;
`;

const DateDelimiter = styled.span`
  margin: 0 8px;
`;

// Usage example
const App: React.FC = () => {
  const handleInputChange = (value: string) => {
    console.log('Input changed:', value);
  };

  const handleStartDateChange = (value: string) => {
    console.log('Start date changed:', value);
  };

  const handleEndDateChange = (value: string) => {
    console.log('End date changed:', value);
  };

  return (
    <div>
      <h1>Entry Input Example</h1>
      <EntryInput
        defaultValue="Initial value"
        startDate="2023-06-01"
        endDate="2023-06-30"
        onInputChange={handleInputChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />
    </div>
  );
};

export default App;