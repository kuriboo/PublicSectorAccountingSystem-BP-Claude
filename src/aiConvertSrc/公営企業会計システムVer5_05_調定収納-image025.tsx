// 検索条件設定コンポーネント
import React, { useState } from 'react';
import styled from 'styled-components';

// 検索条件の型定義
type SearchConditionProps = {
  onSearch: (condition: SearchCondition) => void;
};

type SearchCondition = {
  date: {
    start: Date;
    end: Date;
  };
  subject: string;
  amountRange: {
    start: number;
    end: number;
  };
  note: string;
};

const SearchConditionForm: React.FC<SearchConditionProps> = ({ onSearch }) => {
  const [condition, setCondition] = useState<SearchCondition>({
    date: {
      start: new Date(),
      end: new Date()
    },
    subject: '',
    amountRange: {
      start: 0,
      end: 999999999999
    },
    note: ''
  });

  // 検索ボタンクリック時のハンドラ
  const handleSearch = () => {
    onSearch(condition);
  };

  return (
    <Container>
      <Title>検索条件設定</Title>
      <FormGroup>
        <Label>検索条件設定</Label>
        <DateInputs>
          <DateInput
            type="date"
            value={condition.date.start.toISOString().slice(0, 10)}
            onChange={e => setCondition({ ...condition, date: { ...condition.date, start: new Date(e.target.value) }})}
          />
          <Separator>〜</Separator>
          <DateInput
            type="date"
            value={condition.date.end.toISOString().slice(0, 10)}
            onChange={e => setCondition({ ...condition, date: { ...condition.date, end: new Date(e.target.value) }})}
          />
        </DateInputs>
      </FormGroup>
      <FormGroup>
        <Label>調定番号</Label>
        <Input
          type="text"
          value={condition.subject}
          onChange={e => setCondition({ ...condition, subject: e.target.value })}
        />  
      </FormGroup>
      <FormGroup>
        <Label>調定金額</Label>
        <RangeInputs>
          <RangeInput
            type="number"
            value={condition.amountRange.start}
            onChange={e => setCondition({ ...condition, amountRange: { ...condition.amountRange, start: e.target.valueAsNumber }})}
          />
          <Separator>〜</Separator>
          <RangeInput
            type="number"
            value={condition.amountRange.end}
            onChange={e => setCondition({ ...condition, amountRange: { ...condition.amountRange, end: e.target.valueAsNumber }})}
          />
        </RangeInputs>
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <Input
          type="text"
          value={condition.note}
          onChange={e => setCondition({ ...condition, note: e.target.value })}
        />
      </FormGroup>
      <SearchButton onClick={handleSearch}>検索</SearchButton>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSearch = (condition: SearchCondition) => {
    console.log('検索条件:', condition);
    // ここで実際の検索処理を行う
  };

  return (
    <div>
      <h1>検索条件設定サンプル</h1>
      <SearchConditionForm onSearch={handleSearch} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const DateInputs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RangeInputs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RangeInput = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 4px;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SearchConditionForm;