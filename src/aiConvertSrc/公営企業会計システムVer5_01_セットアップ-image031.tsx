import React from 'react';
import styled from 'styled-components';

interface DateRangeInputProps {
  dateFrom: Date;
  dateTo: Date;
  onDateFromChange: (date: Date) => void;
  onDateToChange: (date: Date) => void;
}

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) => {
  // 日付フォーマットの関数
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <Title>期間指定</Title>
      <InputContainer>
        <DateInput
          type="date"
          value={formatDate(dateFrom)}
          onChange={(e) => onDateFromChange(new Date(e.target.value))}
        />
        <Separator>～</Separator>
        <DateInput
          type="date"
          value={formatDate(dateTo)}
          onChange={(e) => onDateToChange(new Date(e.target.value))}
        />
      </InputContainer>
      <ButtonContainer>
        <Button>クリア</Button>
        <Button primary>OK</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: 1px solid ${(props) => (props.primary ? '#007bff' : '#ccc')};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 使用例
const App: React.FC = () => {
  const [dateFrom, setDateFrom] = React.useState(new Date());
  const [dateTo, setDateTo] = React.useState(new Date());

  return (
    <div>
      <h1>日付範囲入力コンポーネント</h1>
      <DateRangeInput
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />
      <p>選択した日付範囲: {formatDate(dateFrom)} ～ {formatDate(dateTo)}</p>
    </div>
  );
};

export default App;