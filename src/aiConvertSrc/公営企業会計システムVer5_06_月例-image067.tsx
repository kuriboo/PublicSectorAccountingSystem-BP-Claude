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
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onStartDateChange(newDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onEndDateChange(newDate);
  };

  return (
    <Container>
      <Label>期間指定</Label>
      <DateInput
        type="date"
        value={formatDate(startDate)}
        onChange={handleStartDateChange}
      />
      <span>〜</span>
      <DateInput
        type="date"
        value={formatDate(endDate)}
        onChange={handleEndDateChange}
      />
      <RadioGroup>
        <Label>
          <Radio type="radio" name="period" />
          日
        </Label>
        <Label>
          <Radio type="radio" name="period" />
          月
        </Label>
        <Label>
          <Radio type="radio" name="period" />
          期間
        </Label>
        <Label>
          <Radio type="radio" name="period" />
          明細
        </Label>
      </RadioGroup>
      <RadioGroup>
        <Label>
          <Radio type="radio" name="sumType" />
          する
        </Label>
        <Label>
          <Radio type="radio" name="sumType" />
          しない
        </Label>
      </RadioGroup>
    </Container>
  );
};

// Usage example
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