import React from 'react';
import styled from '@emotion/styled';

// 範囲指定コンポーネントのProps型定義
type RangeInputProps = {
  fromLabel?: string;
  toLabel?: string;
  fromValue?: number;
  toValue?: number;
  onFromChange?: (value: number) => void;
  onToChange?: (value: number) => void;
};

// 範囲指定コンポーネント
const RangeInput: React.FC<RangeInputProps> = ({
  fromLabel = '所属',
  toLabel = '所属',
  fromValue = 0,
  toValue = 999999,
  onFromChange,
  onToChange,
}) => {
  // fromの値が変更された時のハンドラ
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onFromChange?.(value);
  };

  // toの値が変更された時のハンドラ
  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onToChange?.(value);
  };

  return (
    <RangeInputWrapper>
      <InputWrapper>
        <Label>{fromLabel}</Label>
        <Input type="number" value={fromValue} onChange={handleFromChange} />
      </InputWrapper>
      <Separator>~</Separator>
      <InputWrapper>
        <Label>{toLabel}</Label>
        <Input type="number" value={toValue} onChange={handleToChange} />
      </InputWrapper>
    </RangeInputWrapper>
  );
};

// スタイリング
const RangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Label = styled.span`
  margin-right: 4px;
`;

const Input = styled.input`
  width: 80px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

// サンプルデータ
const sampleData = {
  fromLabel: '所属',
  toLabel: '所属',
  fromValue: 123456,
  toValue: 789012,
};

// 使用例
const App: React.FC = () => {
  const [from, setFrom] = React.useState(sampleData.fromValue);
  const [to, setTo] = React.useState(sampleData.toValue);

  return (
    <div>
      <h1>範囲指定コンポーネント</h1>
      <RangeInput 
        fromLabel={sampleData.fromLabel}
        toLabel={sampleData.toLabel}
        fromValue={from}
        toValue={to}
        onFromChange={setFrom}
        onToChange={setTo}
      />
      <p>選択された範囲: {from} ~ {to}</p>
    </div>
  );
};

export default App;