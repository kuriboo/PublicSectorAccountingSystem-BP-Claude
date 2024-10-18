import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

const DateRangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
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
}) => {
  return (
    <DateRangeInputContainer>
      <div>
        {/* 開始日の入力欄 */}
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        &nbsp;～&nbsp;
        {/* 終了日の入力欄 */}
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
      <div>
        {/* 表示区分の選択肢 */}
        <label>
          <input type="radio" name="displayType" value="newTab" defaultChecked />
          新規
        </label>
        &nbsp;
        <label>
          <input type="radio" name="displayType" value="reissue" />
          再発行
        </label>
      </div>
    </DateRangeInputContainer>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState('平成29年06月18日');
  const [endDate, setEndDate] = React.useState('平成29年06月18日');

  return (
    <div>
      <h1>公営企業会計システム</h1>
      <p>行政市水道事業会計</p>
      <DateRangeInput
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </div>
  );
};

export default App;