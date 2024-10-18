import React from 'react';
import styled from '@emotion/styled';

type MasterListFilterProps = {
  fiscalYear: number;
  selectedYear: number;
  onYearChange: (year: number) => void;
  startDate: string;
  onStartDateChange: (date: string) => void;
  endDate: string;  
  onEndDateChange: (date: string) => void;
};

const MasterListFilter: React.FC<MasterListFilterProps> = ({ 
  fiscalYear,
  selectedYear,
  onYearChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange
}) => {
  return (
    <Container>
      <Title>所属マスタリスト作成</Title>
      <YearSelect
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
      >
        <option value={fiscalYear - 1}>{fiscalYear - 1}年度</option>
        <option value={fiscalYear}>{fiscalYear}年度</option>
      </YearSelect>
      <DateInputs>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        〜
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </DateInputs>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </Container>
  );
};

// Sample usage
const SampleMasterListFilter = () => {
  const [selectedYear, setSelectedYear] = React.useState(2029);
  const [startDate, setStartDate] = React.useState('0000000');
  const [endDate, setEndDate] = React.useState('9999999');

  return (
    <MasterListFilter
      fiscalYear={2029}
      selectedYear={selectedYear}
      onYearChange={setSelectedYear}
      startDate={startDate}
      onStartDateChange={setStartDate}
      endDate={endDate}
      onEndDateChange={setEndDate}
    />
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const YearSelect = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 120px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export default MasterListFilter;