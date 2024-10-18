import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  margin: 0 10px;
  font-size: 16px;
`;

const Label = styled.span`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  // Handle changes in the "from" date input
  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFromDateChange(event.target.value);
  };

  // Handle changes in the "to" date input
  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToDateChange(event.target.value);
  };

  return (
    <Container>
      <Title>銀行預金別資金残高表出力マスタリスト作成</Title>
      <DateInputContainer>
        <Label>範囲指定</Label>
        <DateInput
          type="text"
          value={fromDate}
          onChange={handleFromDateChange}
          placeholder="00000000"
        />
        <Label>〜</Label>
        <DateInput
          type="text"
          value={toDate}
          onChange={handleToDateChange}
          placeholder="99999999"
        />
      </DateInputContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Example usage of the DateRangeInput component
const App: React.FC = () => {
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');

  return (
    <DateRangeInput
      fromDate={fromDate}
      toDate={toDate}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
    />
  );
};

export default App;