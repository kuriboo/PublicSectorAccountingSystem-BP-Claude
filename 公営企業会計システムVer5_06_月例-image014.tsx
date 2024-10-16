import React from 'react';
import styled from '@emotion/styled';

interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  options: {
    disablePastDays?: boolean;
    disableWeekends?: boolean;
    disableHolidays?: boolean;
    disableLeaveDays?: boolean;
    disableNewYear?: boolean;
    disableBonusDay?: boolean;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  options,
}) => {
  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onStartDateChange(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEndDateChange(event.target.value);
  };

  return (
    <Container>
      <RowContainer>
        <Label>振替日</Label>
        <Input type="date" value={startDate} onChange={handleStartDateChange} />
        <span>~</span>
        <Input type="date" value={endDate} onChange={handleEndDateChange} />
      </RowContainer>
      <CheckboxContainer>
        <Label>
          <Checkbox type="checkbox" checked={options.disablePastDays} readOnly />
          予算所属
        </Label>
        <Label>
          <Checkbox type="checkbox" checked={options.disableWeekends} readOnly />
          調定分
        </Label>
        <Label>
          <Checkbox type="checkbox" checked={options.disableHolidays} readOnly />
          支払分
        </Label>
        <Label>
          <Checkbox type="checkbox" checked={options.disableLeaveDays} readOnly />
          決算仕訳分
        </Label>
        <Label>
          <Checkbox type="checkbox" checked={options.disableNewYear} readOnly />
          新規
        </Label>
        <Label>
          <Checkbox type="checkbox" checked={options.disableBonusDay} readOnly />
          再発行
        </Label>
      </CheckboxContainer>
      <RowContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </RowContainer>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  return (
    <div>
      <h1>Date Range Picker Example</h1>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        options={{
          disablePastDays: true,
          disableWeekends: true,
          disableHolidays: true,
          disableLeaveDays: true,
          disableNewYear: false,
          disableBonusDay: false,
        }}
      />
    </div>
  );
};

export default App;