import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  defaultStartDate?: string;
  defaultEndDate?: string;
  onDateRangeChange: (startDate: string, endDate: string) => void;
};

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  defaultStartDate = '',
  defaultEndDate = '',
  onDateRangeChange,
}) => {
  const [startDate, setStartDate] = React.useState(defaultStartDate);
  const [endDate, setEndDate] = React.useState(defaultEndDate);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    onDateRangeChange(newStartDate, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    onDateRangeChange(startDate, newEndDate);
  };

  return (
    <Container>
      <Label>期間指定</Label>
      <InputWrapper>
        <DateInput
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <Separator>〜</Separator>
        <DateInput type="date" value={endDate} onChange={handleEndDateChange} />
      </InputWrapper>
      <BlockLabel>集計日時</BlockLabel>
      <BlockValue>平成30年04月06日 13時41分</BlockValue>
      <BlockLabel>集計対象</BlockLabel>
      <BlockValue>ブロック</BlockValue>
      <BlockLabel>集計対象団体</BlockLabel>
      <BlockValue>城東ブロック</BlockValue>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const BlockLabel = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const BlockValue = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

// Example usage
const App: React.FC = () => {
  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log('Selected date range:', startDate, endDate);
  };

  return (
    <div>
      <h1>Date Range Input Example</h1>
      <DateRangeInput
        defaultStartDate="2023-04-01"
        defaultEndDate="2023-04-30"
        onDateRangeChange={handleDateRangeChange}
      />
    </div>
  );
};

export default App;