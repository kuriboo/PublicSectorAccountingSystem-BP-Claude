import React from 'react';
import styled from '@emotion/styled';

interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  workingDays?: boolean;
  allDay?: boolean;
}

const DateRangePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const DatePickerLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const DatePickerInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  workingDays = false,
  allDay = false,
}) => {
  // Format date as YYYY-MM-DD
  const formatDate = (date: Date) => date.toISOString().slice(0, 10);

  return (
    <DateRangePickerWrapper>
      <div>
        <DatePickerLabel htmlFor="startDate">開始日</DatePickerLabel>
        <DatePickerInput
          type="date"
          id="startDate"
          value={formatDate(startDate)}
          onChange={(e) => onStartDateChange(new Date(e.target.value))}
        />
      </div>
      <div>
        <DatePickerLabel htmlFor="endDate">終了日</DatePickerLabel>
        <DatePickerInput
          type="date"
          id="endDate"
          value={formatDate(endDate)}
          onChange={(e) => onEndDateChange(new Date(e.target.value))}
        />
      </div>
      <CheckboxWrapper>
        <input type="checkbox" id="workingDays" checked={workingDays} readOnly />
        <label htmlFor="workingDays">全決定営業日のみ</label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <input type="checkbox" id="allDay" checked={allDay} readOnly />
        <label htmlFor="allDay">すべて</label>
      </CheckboxWrapper>
    </DateRangePickerWrapper>
  );
};

// Example usage
const ExampleDateRangePicker = () => {
  const [startDate, setStartDate] = React.useState(new Date('2029-04-01'));
  const [endDate, setEndDate] = React.useState(new Date('2029-06-30'));

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      workingDays={false}
      allDay={false}
    />
  );
};

export default ExampleDateRangePicker;