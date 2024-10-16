import React from 'react';
import styled from 'styled-components';

// 型定義
type ReserveFormProps = {
  fromPref?: string;
  fromCity?: string;
  fromStation?: string;
  toPref?: string;
  toCity?: string; 
  toStation?: string;
  date?: string;
  time?: string;
  trainType?: string;
  ticketType?: string;
  adultNum?: number;
  childNum?: number;
  onSubmit: () => void;
};

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント実装
const ReserveForm: React.FC<ReserveFormProps> = ({
  fromPref = '',
  fromCity = '',
  fromStation = '',
  toPref = '',
  toCity = '',
  toStation = '',
  date = '',
  time = '',
  trainType = '指定なし',
  ticketType = '',
  adultNum = 1,
  childNum = 0,
  onSubmit,
}) => {
  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <FieldSet>
          <Legend>出発地</Legend>
          <Label>
            都道府県
            <Select value={fromPref}>
              <option value="">選択してください</option>
              {/* 都道府県のオプション */}
            </Select>
          </Label>
          <Label>
            市区町村
            <Input type="text" value={fromCity} />
          </Label>
          <Label>
            駅名
            <Input type="text" value={fromStation} />
          </Label>
        </FieldSet>

        <FieldSet>
          <Legend>到着地</Legend>
          <Label>
            都道府県
            <Select value={toPref}>
              <option value="">選択してください</option>
              {/* 都道府県のオプション */}
            </Select>
          </Label>
          <Label>
            市区町村  
            <Input type="text" value={toCity} />
          </Label>
          <Label>
            駅名
            <Input type="text" value={toStation} />
          </Label>
        </FieldSet>

        <FieldSet>
          <Legend>乗車日</Legend>
          <Label>
            日付
            <Input type="date" value={date} />
          </Label>
          <Label>
            時刻
            <Input type="time" value={time} />
          </Label>
        </FieldSet>

        <FieldSet>
          <Legend>詳細条件</Legend>
          <Label>
            列車種別
            <Select value={trainType}>
              <option value="指定なし">指定なし</option>
              {/* 列車種別のオプション */}
            </Select>
          </Label>
          <Label>
            座席タイプ
            <Select value={ticketType}>
              <option value="">選択してください</option>
              <option value="自由席">自由席</option>
              <option value="指定席">指定席</option>
            </Select>
          </Label>
          <Label>
            大人
            <Input type="number" value={adultNum} min={1} />
          </Label>
          <Label>
            子供
            <Input type="number" value={childNum} min={0} />  
          </Label>
        </FieldSet>
      </FormWrapper>

      <SubmitButton type="submit">検索</SubmitButton>
    </form>
  );
};

// サンプルデータ
const sampleData = {
  fromPref: '東京都',
  fromCity: '新宿区',
  fromStation: '新宿',
  toPref: '大阪府',
  toCity: '大阪市',  
  toStation: '新大阪',
  date: '2023-05-01',
  time: '10:00',
  trainType: '新幹線',
  ticketType: '指定席',
  adultNum: 2,
  childNum: 1,
};

// 表示用コンポーネント
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('検索ボタンがクリックされました');
  };

  return (
    <div>
      <h1>新幹線予約フォーム</h1>
      <ReserveForm {...sampleData} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;