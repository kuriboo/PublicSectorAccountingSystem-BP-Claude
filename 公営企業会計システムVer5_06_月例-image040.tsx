import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
  taskType?: 'day' | 'night' | 'morning' | 'evening';
  compensationType?: 'salary' | 'allowance';
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  taskType = 'day',
  compensationType = 'salary',
}) => {
  // フォーマットされた日付文字列を取得
  const formattedStartDate = startDate.toISOString().split('T')[0];
  const formattedEndDate = endDate.toISOString().split('T')[0];

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onStartDateChange(newDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    onEndDateChange(newDate);
  };

  return (
    <Container>
      <Label>集計期間</Label>
      <div>
        <Label>
          <Input
            type="date"
            value={formattedStartDate}
            onChange={handleStartDateChange}
          />
          {' ～ '}
          <Input
            type="date"
            value={formattedEndDate}
            onChange={handleEndDateChange}
          />
        </Label>
      </div>
      <div>
        <Label>作業区分</Label>
        <Select value={taskType}>
          <option value="day">日</option>
          <option value="night">夜</option>
          <option value="morning">朝</option>
          <option value="evening">晩</option>
        </Select>
      </div>
      <div>
        <Label>決算仕訳</Label>
        <Select value={compensationType}>
          <option value="salary">含む</option>
          <option value="allowance">含まない</option>
        </Select>
      </div>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(new Date('2023-06-01'));
  const [endDate, setEndDate] = React.useState(new Date('2023-06-30'));

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <div>
      <h1>総勘定合計表作成</h1>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
        taskType="day"
        compensationType="salary"
      />
    </div>
  );
};

export default App;