import React from 'react';
import styled from '@emotion/styled';

type DateRangePickerProps = {
  startYear: number;
  startMonth: number;
  startDate: number;
  endYear: number;
  endMonth: number;
  endDate: number;
  period?: number;
  onOk?: () => void;
  onCancel?: () => void;
  onClear?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startYear,
  startMonth,
  startDate,
  endYear,
  endMonth,
  endDate,
  period = 0,
  onOk,
  onCancel,
  onClear,
}) => {
  // Format the start and end dates
  const formattedStartDate = `${startYear}年${startMonth}月${startDate}日`;
  const formattedEndDate = endYear && endMonth && endDate ? `${endYear}年${endMonth}月${endDate}日` : '';

  return (
    <Container>
      <Row>
        <Label>着手年月日</Label>
        <div>{formattedStartDate}</div>
      </Row>
      <Row>
        <Label>期間</Label>
        <Input type="number" value={period} readOnly />
      </Row>
      <Row>
        <Label>完了年月日</Label>
        <div>{formattedEndDate}</div>
      </Row>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <DateRangePicker
      startYear={2023}
      startMonth={4}
      startDate={30}
      endYear={2023}
      endMonth={5}
      endDate={10}
      period={10}
      onOk={() => console.log('OK clicked')}
      onClear={() => console.log('Clear clicked')}
      onCancel={() => console.log('Cancel clicked')}
    />
  );
};

export default App;