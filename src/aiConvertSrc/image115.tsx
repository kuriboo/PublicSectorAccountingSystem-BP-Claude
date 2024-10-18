import React from 'react';
import styled from 'styled-components';

// 予定登録フォームのプロパティ型定義
type EventFormProps = {
  onSubmit: (event: Event) => void;
};

// 予定登録フォームコンポーネント
const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  // 状態管理
  const [fiscalYear, setFiscalYear] = React.useState('');
  const [division, setDivision] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [effortValue, setEffortValue] = React.useState('');
  const [effortUnit, setEffortUnit] = React.useState('対象');

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 予定オブジェクトを作成
    const event: Event = {
      fiscalYear,
      division,
      title,
      startDate,
      endDate,
      effortValue,
      effortUnit,
    };
    // 親コンポーネントのonSubmitを呼び出す
    onSubmit(event);
    // フォームをクリア
    setFiscalYear('');
    setDivision('');
    setTitle('');
    setStartDate('');
    setEndDate('');
    setEffortValue('');
    setEffortUnit('対象');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleWrapper>
        <TitleLabel>タイトル</TitleLabel>
        <TitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </TitleWrapper>

      <DateWrapper>
        <DateLabel>施設名</DateLabel>
        <DateInput
          type="text"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
        />
      </DateWrapper>

      <DateWrapper>
        <DateLabel>分類</DateLabel>
        <DateSelect value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)} required>
          <option value="">選択してください</option>
          <option value="2022">2022年度</option>
          <option value="2023">2023年度</option>
        </DateSelect>

        <DateLabel>車両種</DateLabel>
        <DateSelect value="" onChange={() => {}} required>
          <option value="">選択してください</option>
        </DateSelect>
      </DateWrapper>

      <DateWrapper>
        <DateLabel>不要理由</DateLabel>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <DateLabel>不要許可結果</DateLabel>
        <DateInput type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </DateWrapper>

      <EffortWrapper>
        <EffortLabel>実施年度</EffortLabel>
        <EffortInput
          type="text"
          value={effortValue}
          onChange={(e) => setEffortValue(e.target.value)}
        />
        <EffortLabel>予定年度理由</EffortLabel>
        <EffortInput
          type="text"
          value={effortValue}
          onChange={(e) => setEffortValue(e.target.value)}
        />
      </EffortWrapper>

      <RadioWrapper>
        <RadioLabel>
          <input
            type="radio"
            checked={effortUnit === '対象'}
            onChange={() => setEffortUnit('対象')}
          />
          対象
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            checked={effortUnit === '対象外'}
            onChange={() => setEffortUnit('対象外')}
          />
          対象外
        </RadioLabel>
      </RadioWrapper>

      <ButtonWrapper>
        <Button type="submit">登録</Button>
        <Button type="button">閉じる</Button>
      </ButtonWrapper>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TitleLabel = styled.label`
  font-weight: bold;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 4px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateLabel = styled.label`
  font-weight: bold;
`;

const DateInput = styled.input`
  padding: 4px;
`;

const DateSelect = styled.select`
  padding: 4px;
`;

const EffortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EffortLabel = styled.label`
  font-weight: bold;
`;

const EffortInput = styled.input`
  width: 60px;
  padding: 4px;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 予定の型定義
type Event = {
  fiscalYear: string;
  division: string;
  title: string;
  startDate: string;
  endDate: string;
  effortValue: string;
  effortUnit: string;
};

// コンポーネントの使用例
const App: React.FC = () => {
  const handleEventSubmit = (event: Event) => {
    console.log('予定が登録されました:', event);
  };

  return (
    <div>
      <h1>予定管理アプリ</h1>
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
};

export default App;