import React from 'react';
import styled from '@emotion/styled';

interface WorkPeriodSelectorProps {
  fromYear: number;
  fromMonth: number;
  toYear: number;
  toMonth: number;
  onFromYearChange: (year: number) => void;
  onFromMonthChange: (month: number) => void;
  onToYearChange: (year: number) => void;
  onToMonthChange: (month: number) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const YearMonthInput = styled.input`
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

const Label = styled.span`
  margin: 0 4px;
`;

const WorkPeriodSelector: React.FC<WorkPeriodSelectorProps> = ({
  fromYear,
  fromMonth,
  toYear,
  toMonth,
  onFromYearChange,
  onFromMonthChange,
  onToYearChange,
  onToMonthChange,
}) => {
  // Handle input changes
  const handleFromYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value, 10);
    onFromYearChange(isNaN(year) ? 0 : year);
  };

  const handleFromMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const month = parseInt(e.target.value, 10);
    onFromMonthChange(isNaN(month) ? 0 : month);
  };

  const handleToYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = parseInt(e.target.value, 10);
    onToYearChange(isNaN(year) ? 0 : year);
  };

  const handleToMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const month = parseInt(e.target.value, 10);
    onToMonthChange(isNaN(month) ? 0 : month);
  };

  return (
    <Container>
      <Label>作業期間</Label>
      <YearMonthInput
        type="number"
        value={fromYear}
        onChange={handleFromYearChange}
      />
      年
      <YearMonthInput
        type="number"
        value={fromMonth}
        onChange={handleFromMonthChange}
      />
      月
      <Label>~</Label>
      <YearMonthInput
        type="number"
        value={toYear}
        onChange={handleToYearChange}
      />
      年
      <YearMonthInput
        type="number"
        value={toMonth}
        onChange={handleToMonthChange}
      />
      月
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const [fromYear, setFromYear] = React.useState(2023);
  const [fromMonth, setFromMonth] = React.useState(4);
  const [toYear, setToYear] = React.useState(2023);
  const [toMonth, setToMonth] = React.useState(4);

  return (
    <div>
      <h1>Work Period Selector Example</h1>
      <WorkPeriodSelector
        fromYear={fromYear}
        fromMonth={fromMonth}
        toYear={toYear}
        toMonth={toMonth}
        onFromYearChange={setFromYear}
        onFromMonthChange={setFromMonth}
        onToYearChange={setToYear}
        onToMonthChange={setToMonth}
      />
    </div>
  );
};

export default App;