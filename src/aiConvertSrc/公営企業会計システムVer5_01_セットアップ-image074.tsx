import React from 'react';
import styled from 'styled-components';

type YearScheduleFilterProps = {
  fiscalYear: number;
  selectedYear: number;
  onSelectYear: (year: number) => void;
  selectedMonth: number;
  onSelectMonth: (month: number) => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const YearScheduleFilter: React.FC<YearScheduleFilterProps> = ({
  fiscalYear,
  selectedYear,
  onSelectYear,
  selectedMonth,
  onSelectMonth,
}) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectYear(Number(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectMonth(Number(event.target.value));
  };

  return (
    <StyledForm>
      <StyledFieldset>
        <StyledLabel htmlFor="year">会計年度</StyledLabel>
        <StyledSelect id="year" value={selectedYear} onChange={handleYearChange}>
          {[...Array(10)].map((_, index) => {
            const year = fiscalYear - index;
            return (
              <option key={year} value={year}>
                平成{year - 1988}年
              </option>
            );
          })}
        </StyledSelect>
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>範囲指定</StyledLabel>
        <div>
          <StyledSelect value={selectedMonth} onChange={handleMonthChange}>
            <option value={0}>月別集計計算書</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {`${month}月集計計算書`}
              </option>
            ))}
          </StyledSelect>
          <span>～</span>
          <StyledCheckbox type="checkbox" id="ytdReport" />
          <StyledLabel htmlFor="ytdReport">期首採算別収入控除</StyledLabel>
        </div>
      </StyledFieldset>

      <StyledButtonGroup>
        <StyledButton type="button">OK</StyledButton>
        <StyledButton type="button">クリア</StyledButton>
        <StyledButton type="submit">終了</StyledButton>
      </StyledButtonGroup>
    </StyledForm>
  );
};

// Usage example:
const App: React.FC = () => {
  const currentYear = new Date().getFullYear() + 1;
  const [selectedYear, setSelectedYear] = React.useState(currentYear);
  const [selectedMonth, setSelectedMonth] = React.useState(0);

  return (
    <YearScheduleFilter
      fiscalYear={currentYear}
      selectedYear={selectedYear}
      onSelectYear={setSelectedYear}
      selectedMonth={selectedMonth} 
      onSelectMonth={setSelectedMonth}
    />
  );
};

export default App;