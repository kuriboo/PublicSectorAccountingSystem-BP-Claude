import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Handle start date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStartDateChange(e.target.value);
  };

  // Handle end date change  
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEndDateChange(e.target.value);
  };

  return (
    <Container>
      <Label>範囲指定</Label>
      <Label>
        作業日
        <Input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </Label>
      <Label>
        集計日
        <Input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        {' ~ '}
        <Input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </Label>
      <Label>
        集計対象
        <Select>
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
          <option value="第一地区" selected>
            第一地区
          </option>
        </Select>
      </Label>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2022-12-13');
  const [endDate, setEndDate] = React.useState('2022-12-13');

  return (
    <DateRangeInput
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
    />
  );
};

export default App;