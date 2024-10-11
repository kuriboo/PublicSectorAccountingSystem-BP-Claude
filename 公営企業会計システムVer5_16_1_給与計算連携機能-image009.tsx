import React from 'react';
import styled from 'styled-components';

// 型定義
type Props = {
  startDate: string;
  endDate: string;
  onDateChange: (startDate: string, endDate: string) => void;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateLabel = styled.span`
  margin-right: 10px;
`;

const Message = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;

// コンポーネント
const DateRangeSelector: React.FC<Props> = ({ startDate, endDate, onDateChange }) => {
  // 日付入力の変更時の処理
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    onDateChange(newStartDate, endDate);
  };

  return (
    <Container>
      <Title>給与預り金支払確定</Title>
      <DateInput type="date" value={startDate} onChange={handleDateChange} />
      <Button>表示</Button>
      <DateRange>
        <DateLabel>支払予定日</DateLabel>
        <span>{startDate}</span>
      </DateRange>
      <DateRange>
        <DateLabel>起 案 日</DateLabel>
        <span>{endDate}</span>
      </DateRange>
      <Message>
        預り金支払のもとどなる給与支払の確定日を入力し、表示ボタンを押すことにより実払の対象となる控除項目が一覧表示されます。
        画面一覧より控除項目を選択し、預り金支払予定日および起案日を設定します。
        画面表示された控除項目に対し、いくつかの払予定日を設定する必要がある場合は、一度OKボタンで登録してから次の預り金支払予定日の設定を行なってください。
      </Message>
      <div>
        <Button>エラー確認</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2023-09-06');
  const [endDate, setEndDate] = React.useState('2023-09-06');

  const handleDateChange = (newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <DateRangeSelector
      startDate={startDate}
      endDate={endDate}
      onDateChange={handleDateChange}
    />
  );
};

export default App;