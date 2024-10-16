import React from 'react';
import styled from '@emotion/styled';

type RangeInputProps = {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  period?: '前' | '細節' | '明細';
};

const RangeInput: React.FC<RangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  period = '前',
}) => {
  // Format date as yyyy-MM-dd
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <Label>範囲指定</Label>
      <DateInputs>
        <DateInput
          type="date"
          value={formatDate(startDate)}
          onChange={(e) => onStartDateChange(new Date(e.target.value))}
        />
        <Separator>〜</Separator>
        <DateInput
          type="date"
          value={formatDate(endDate)}
          onChange={(e) => onEndDateChange(new Date(e.target.value))}
        />
      </DateInputs>
      <PeriodOptions>
        <PeriodOption
          type="radio"
          id="前"
          checked={period === '前'}
          readOnly
        />
        <PeriodLabel htmlFor="前">前</PeriodLabel>
        <PeriodOption
          type="radio"
          id="細節"
          checked={period === '細節'}
          readOnly
        />
        <PeriodLabel htmlFor="細節">細節</PeriodLabel>
        <PeriodOption
          type="radio"
          id="明細"
          checked={period === '明細'}
          readOnly
        />
        <PeriodLabel htmlFor="明細">明細</PeriodLabel>
      </PeriodOptions>
    </Container>
  );
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

const DateInputs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const PeriodOptions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const PeriodOption = styled.input`
  margin-right: 4px;
`;

const PeriodLabel = styled.label`
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (
    <div>
      <h1>Range Input Example</h1>
      <RangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

export default App;