import React from 'react';
import styled from '@emotion/styled';

interface PeriodSelectorProps {
  fromYear: number;
  fromMonth: number;
  toYear: number;
  toMonth: number;
  onFromYearChange: (year: number) => void;
  onFromMonthChange: (month: number) => void;
  onToYearChange: (year: number) => void;
  onToMonthChange: (month: number) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  fromYear,
  fromMonth,
  toYear,
  toMonth,
  onFromYearChange,
  onFromMonthChange,
  onToYearChange,
  onToMonthChange,
}) => {
  return (
    <Container>
      <Label>期間指定</Label>
      <Row>
        <YearInput
          type="number"
          value={fromYear}
          onChange={(e) => onFromYearChange(Number(e.target.value))}
        />
        <Separator>年</Separator>
        <MonthInput
          type="number"
          value={fromMonth}
          onChange={(e) => onFromMonthChange(Number(e.target.value))}
        />
        <Separator>月</Separator>
        <Separator>〜</Separator>
        <YearInput
          type="number"
          value={toYear}
          onChange={(e) => onToYearChange(Number(e.target.value))}
        />
        <Separator>年</Separator>
        <MonthInput
          type="number"
          value={toMonth}
          onChange={(e) => onToMonthChange(Number(e.target.value))}
        />
        <Separator>月</Separator>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const YearInput = styled.input`
  width: 80px;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const MonthInput = styled.input`
  width: 60px;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

// Usage example
const App: React.FC = () => {
  const [fromYear, setFromYear] = React.useState(2029);
  const [fromMonth, setFromMonth] = React.useState(9);
  const [toYear, setToYear] = React.useState(2029);
  const [toMonth, setToMonth] = React.useState(9);

  return (
    <div>
      <h1>期間選択コンポーネント</h1>
      <PeriodSelector
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