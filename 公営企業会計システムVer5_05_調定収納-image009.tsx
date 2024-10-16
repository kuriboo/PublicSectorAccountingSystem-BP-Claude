import React from 'react';
import styled from '@emotion/styled';

// 型定義
type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onChangeStartDate: (date: string) => void;
  onChangeEndDate: (date: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 日付範囲入力コンポーネント
const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  return (
    <Container>
      <InputRow>
        <Label>開始日</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => onChangeStartDate(e.target.value)}
        />
        <span>〜</span>
        <Label>終了日</Label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => onChangeEndDate(e.target.value)}
        />
      </InputRow>
      <InputRow>
        <Button>所属</Button>
        <Input type="text" defaultValue="000000" />
        <span>〜</span>
        <Button>所属</Button>
        <Input type="text" defaultValue="999999" />
      </InputRow>
      <InputRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </InputRow>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  startDate: '2029-06-21',
  endDate: '2029-06-21',
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(sampleData.startDate);
  const [endDate, setEndDate] = React.useState(sampleData.endDate);

  return (
    <div>
      <h1>所属企業会計システム</h1>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}
      />
    </div>
  );
};

export default App;