import React from 'react';
import styled from '@emotion/styled';

interface DateRangePickerProps {
  level: '節' | '細節' | '明細' | '所属節' | '所属細節' | '所属明細';
  defaultStartDate?: string;
  defaultEndDate?: string;
  onDateRangeChange: (startDate: string, endDate: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  level,
  defaultStartDate = '',
  defaultEndDate = '',
  onDateRangeChange,
}) => {
  const [startDate, setStartDate] = React.useState(defaultStartDate);
  const [endDate, setEndDate] = React.useState(defaultEndDate);

  // Handle date changes
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    onDateRangeChange(e.target.value, endDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    onDateRangeChange(startDate, e.target.value);
  };

  return (
    <Container>
      <LevelRadioGroup>
        <LevelRadio type="radio" id="setu" name="level" checked={level === '節'} readOnly />
        <LevelLabel htmlFor="setu">節</LevelLabel>

        <LevelRadio type="radio" id="saisetu" name="level" checked={level === '細節'} readOnly />
        <LevelLabel htmlFor="saisetu">細節</LevelLabel>

        <LevelRadio type="radio" id="meisai" name="level" checked={level === '明細'} readOnly />
        <LevelLabel htmlFor="meisai">明細</LevelLabel>

        <LevelRadio type="radio" id="shozokusetu" name="level" checked={level === '所属節'} readOnly />
        <LevelLabel htmlFor="shozokusetu">所属節</LevelLabel>

        <LevelRadio type="radio" id="shozokusaisetu" name="level" checked={level === '所属細節'} readOnly />
        <LevelLabel htmlFor="shozokusaisetu">所属細節</LevelLabel>

        <LevelRadio type="radio" id="shozokumeisai" name="level" checked={level === '所属明細'} readOnly />
        <LevelLabel htmlFor="shozokumeisai">所属明細</LevelLabel>
      </LevelRadioGroup>

      <DateRangeInputs>
        <DateInput
          type="text"
          value={startDate}
          onChange={handleStartDateChange}
          placeholder="9999999999"
        />
        <Separator>〜</Separator>
        <DateInput
          type="text"
          value={endDate}
          onChange={handleEndDateChange}  
          placeholder="9999999999"
        />
      </DateRangeInputs>
    </Container>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log(`Selected date range: ${startDate} - ${endDate}`);
  };

  return (
    <DateRangePicker
      level="節"
      defaultStartDate="2023-01-01"
      defaultEndDate="2023-12-31"
      onDateRangeChange={handleDateRangeChange}
    />
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LevelRadioGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LevelRadio = styled.input`
  margin-right: 5px;
`;

const LevelLabel = styled.label`
  cursor: pointer;
`;

const DateRangeInputs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  font-weight: bold;
`;

export default DateRangePicker;