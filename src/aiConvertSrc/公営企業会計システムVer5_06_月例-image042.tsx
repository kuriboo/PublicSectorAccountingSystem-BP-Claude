import React from 'react';
import styled from '@emotion/styled';

type DateRangePickerProps = {
  title: string;
  startDate: string;
  endDate: string;
  onDateRangeChange: (startDate: string, endDate: string) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  title,
  startDate,
  endDate,
  onDateRangeChange,
}) => {
  // 日付範囲が変更された際の処理
  const handleDateRangeChange = (start: string, end: string) => {
    onDateRangeChange(start, end);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <DateRange>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => handleDateRangeChange(e.target.value, endDate)}
        />
        <Separator>～</Separator>
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => handleDateRangeChange(startDate, e.target.value)}
        />
      </DateRange>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
`;

// 使用例
const App: React.FC = () => {
  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log('Selected date range:', startDate, endDate);
  };

  return (
    <DateRangePicker
      title="月次損益計算書計"
      startDate="平成29年04月"
      endDate="平成30年03月"
      onDateRangeChange={handleDateRangeChange}
    />
  );
};

export default App;