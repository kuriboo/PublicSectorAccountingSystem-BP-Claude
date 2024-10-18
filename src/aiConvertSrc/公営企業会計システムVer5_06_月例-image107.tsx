import React from 'react';
import styled from 'styled-components';

// 補助元帳EUCの検索条件を表すインターフェース
interface SearchCondition {
  startDate: string; // 開始日付
  endDate: string; // 終了日付
  startTime: string; // 開始時刻
  endTime: string; // 終了時刻
  workId: string; // 仕訳細別
}

// 補助元帳EUCの検索条件を入力するコンポーネント
const SearchForm: React.FC = () => {
  // 検索条件の状態管理
  const [condition, setCondition] = React.useState<SearchCondition>({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    workId: ''
  });

  // 入力値が変更された時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCondition(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 検索ボタンがクリックされた時のハンドラ
  const handleSearch = () => {
    // ここで実際の検索処理を実装する
    console.log('検索条件:', condition);
  };

  return (
    <Container>
      <Title>補助元帳EUC</Title>
      <Form>
        <Label>
          作業日
          <Input
            type="date"
            name="startDate"
            value={condition.startDate}
            onChange={handleChange}
            required
          />
          ～
          <Input
            type="date"
            name="endDate"
            value={condition.endDate}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          仕訳時日
          <Input
            type="time"
            name="startTime"
            value={condition.startTime}
            onChange={handleChange}
            required
          />
          ～
          <Input
            type="time"
            name="endTime"
            value={condition.endTime}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          仕訳細別
          <Input
            type="text"
            name="workId"
            value={condition.workId}
            onChange={handleChange}
            required
          />
        </Label>
        <RadioGroup>
          <RadioButton type="radio" name="workType" value="全体" defaultChecked />
          全体
          <RadioButton type="radio" name="workType" value="ブロック" />
          ブロック
          <RadioButton type="radio" name="workType" value="セグメント" />
          セグメント
        </RadioGroup>
        <SearchButton type="button" onClick={handleSearch}>
          検索
        </SearchButton>
      </Form>
    </Container>
  );
};

// スタイリングの定義
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-left: 8px;
  padding: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const SampleData: SearchCondition = {
  startDate: '2023-04-01',
  endDate: '2023-06-30',
  startTime: '00:00',
  endTime: '23:59',
  workId: '0001'
};

const App: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <p>サンプル検索条件:</p>
      <pre>{JSON.stringify(SampleData, null, 2)}</pre>
    </div>
  );
};

export default App;