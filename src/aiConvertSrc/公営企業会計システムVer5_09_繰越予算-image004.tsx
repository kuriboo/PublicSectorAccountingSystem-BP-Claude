import React from 'react';
import styled from '@emotion/styled';

// 型定義
type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

// コンポーネント定義
const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <InputRow>
        <Label>開始</Label>
        <Input
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        〜
        <Input
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </InputRow>
      <RadioContainer>
        <RadioLabel>
          <input type="radio" name="option" defaultChecked />
          予算科目別
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="option" />
          予定・負担番号順
        </RadioLabel>
      </RadioContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  startDate: '0000000',
  endDate: '9999999',
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(sampleData.startDate);
  const [endDate, setEndDate] = React.useState(sampleData.endDate);

  return (
    <div>
      <h1>日付範囲入力</h1>
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