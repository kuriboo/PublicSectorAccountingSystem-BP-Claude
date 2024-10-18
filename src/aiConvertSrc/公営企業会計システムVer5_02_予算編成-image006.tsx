import React from 'react';
import styled from '@emotion/styled';

type YearlyScheduleInputProps = {
  startDate: string;
  endDate: string;
  note: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const NoteContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const NoteText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const YearlyScheduleInput: React.FC<YearlyScheduleInputProps> = ({
  startDate,
  endDate,
  note,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <Title>新年度予算科目CSV出力</Title>
      <DateRangeContainer>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <Separator>～</Separator>
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </DateRangeContainer>
      <NoteContainer>
        <NoteText>{note}</NoteText>
      </NoteContainer>
      <ButtonContainer>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('0000000');
  const [endDate, setEndDate] = React.useState('9999999');

  const note = `新年度の当初予算データをExcelで入力するための、予算科目の一覧をCSVファイルで出力します。\n出力したCSVファイルは、「予算積算基礎入力用シート」で使用します。`;

  return (
    <YearlyScheduleInput
      startDate={startDate}
      endDate={endDate}
      note={note}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
    />
  );
};

export default App;