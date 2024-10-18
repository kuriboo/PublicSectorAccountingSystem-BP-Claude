import React from 'react';
import styled from 'styled-components';

// 範囲指定コンポーネントの型定義
type RangeSpecProps = {
  title: string;
  minLabel: string;
  maxLabel: string;
  minValue?: string;
  maxValue?: string;
};

// 範囲指定コンポーネント
const RangeSpec: React.FC<RangeSpecProps> = ({
  title,
  minLabel,
  maxLabel,
  minValue = '',
  maxValue = '',
}) => {
  return (
    <RangeSpecContainer>
      <Title>{title}</Title>
      <RangeInputs>
        <Label>{minLabel}</Label>
        <Input type="text" defaultValue={minValue} />
        <Label>~</Label>
        <Label>{maxLabel}</Label>
        <Input type="text" defaultValue={maxValue} />
      </RangeInputs>
    </RangeSpecContainer>
  );
};

// スタイリング
const RangeSpecContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const RangeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Label = styled.label`
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

// サンプルデータ
const sampleData = {
  title: '範囲指定',
  minLabel: '保管場所',
  maxLabel: '保管場所',
  minValue: '000000',
  maxValue: '999999',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>範囲指定コンポーネント使用例</h1>
      <RangeSpec {...sampleData} />
    </div>
  );
};

export default App;