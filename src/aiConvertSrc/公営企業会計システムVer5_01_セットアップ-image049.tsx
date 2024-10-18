import React from 'react';
import styled from '@emotion/styled';

interface DateRangePickerProps {
  fromDate?: string;
  toDate?: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const DateInputGroup = styled.div`
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

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  fromDate = '',
  toDate = '',
  onFromDateChange,
  onToDateChange,
}) => {
  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFromDateChange(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToDateChange(e.target.value);
  };

  return (
    <Container>
      <Title>事業別予算科目マスタリスト</Title>
      <RadioGroup>
        <Label>
          <input type="radio" name="dateType" checked />
          所属別
        </Label>
        <Label>
          <input type="radio" name="dateType" />
          事業科目
        </Label>
      </RadioGroup>
      <DateInputGroup>
        <Label>
          所属:
          <DateInput type="text" value={fromDate} onChange={handleFromDateChange} />
          ～
          <DateInput type="text" value={toDate} onChange={handleToDateChange} />
        </Label>
      </DateInputGroup>
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
  const handleFromDateChange = (date: string) => {
    console.log('From date:', date);
  };

  const handleToDateChange = (date: string) => {
    console.log('To date:', date);
  };

  return (
    <div>
      <DateRangePicker
        fromDate="0000000"
        toDate="9999999"
        onFromDateChange={handleFromDateChange}
        onToDateChange={handleToDateChange}
      />
    </div>
  );
};

export default App;