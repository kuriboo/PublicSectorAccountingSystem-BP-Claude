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
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 300px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 120px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStartDateChange(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onEndDateChange(e.target.value);
  };

  return (
    <Container>
      <DateInputContainer>
        <Label>作業実行日</Label>
        <DateInput
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </DateInputContainer>
      <DateInputContainer>
        <Label>支出決定日</Label>
        <DateInput type="date" value={endDate} onChange={handleEndDateChange} />
        <span>〜</span>
        <DateInput type="date" />
      </DateInputContainer>
      <DateInputContainer>
        <Label>所属</Label>
        <input type="text" />
        <span>〜</span>
        <input type="text" />
      </DateInputContainer>
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2023-06-17');
  const [endDate, setEndDate] = React.useState('2023-06-31');

  return (
    <div>
      <h1>Date Range Input Example</h1>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
    </div>
  );
};

export default App;