import React from 'react';
import styled from '@emotion/styled';

interface SearchConditionProps {
  selectedYear?: number;
  selectedMonth?: number;
  selectedDay?: number;
  startDate?: string;
  endDate?: string;
  isWorkingDay?: boolean;
  isHoliday?: boolean;
  startAmount?: number;
  endAmount?: number;
  keyword?: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledDateInput = styled.input`
  padding: 5px;
`;

const StyledRadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledAmountInput = styled.input`
  padding: 5px;
  width: 100px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchCondition: React.FC<SearchConditionProps> = ({
  selectedYear = new Date().getFullYear(),
  selectedMonth = new Date().getMonth() + 1,
  selectedDay,
  startDate,
  endDate,
  isWorkingDay,
  isHoliday,
  startAmount,
  endAmount,
  keyword,
}) => {
  return (
    <StyledForm>
      <StyledFieldset>
        <StyledLabel>検索条件設定</StyledLabel>
        <StyledDateInput
          type="number"
          value={selectedYear}
          placeholder="年"
          min={1900}
          max={9999}
        />
        <StyledDateInput
          type="number"
          value={selectedMonth}
          placeholder="月"
          min={1}
          max={12}
        />
        <StyledDateInput
          type="number"
          value={selectedDay}
          placeholder="日"
          min={1}
          max={31}
        />
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel>検索期間</StyledLabel>
        <StyledDateInput type="date" value={startDate} />
        <span>〜</span>
        <StyledDateInput type="date" value={endDate} />
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel>曜日</StyledLabel>
        <StyledRadioGroup>
          <label>
            <input type="radio" value="workingDay" checked={isWorkingDay} />
            平常日
          </label>
          <label>
            <input type="radio" value="holiday" checked={isHoliday} />
            休日
          </label>
        </StyledRadioGroup>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel>検索金額</StyledLabel>
        <StyledAmountInput
          type="number"
          value={startAmount}
          placeholder="円"
        />
        <span>〜</span>
        <StyledAmountInput
          type="number"
          value={endAmount}
          placeholder="円"
        />
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel>摘要</StyledLabel>
        <input type="text" value={keyword} />
      </StyledFieldset>
      <StyledButton type="submit">検索</StyledButton>
    </StyledForm>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>振替照会検索</h1>
      <SearchCondition
        startDate="2016-03-01"
        endDate="2016-03-27"
        isWorkingDay
      />
    </div>
  );
};

export default App;