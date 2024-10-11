import React from 'react';
import styled from '@emotion/styled';

// 範囲指定コンポーネントのプロパティ型定義
interface RangeSelectProps {
  title?: string;
  defaultFromValue?: number;
  defaultToValue?: number;
  fromOptions?: number[];
  toOptions?: number[];
  onRangeChange?: (from: number, to: number) => void;
}

// 範囲指定コンポーネント
const RangeSelect: React.FC<RangeSelectProps> = ({
  title = '範囲指定',
  defaultFromValue = 1,
  defaultToValue = 99,
  fromOptions = [...Array(100)].map((_, i) => i + 1),
  toOptions = [...Array(100)].map((_, i) => i + 1),
  onRangeChange = () => {},
}) => {
  const [fromValue, setFromValue] = React.useState(defaultFromValue);
  const [toValue, setToValue] = React.useState(defaultToValue);

  // From値変更時の処理
  const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromValue = Number(e.target.value);
    setFromValue(newFromValue);
    onRangeChange(newFromValue, toValue);
  };

  // To値変更時の処理 
  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToValue = Number(e.target.value);
    setToValue(newToValue);
    onRangeChange(fromValue, newToValue);
  };

  return (
    <RangeSelectContainer>
      <Title>{title}</Title>
      <SelectContainer>
        <SelectLabel>
          財源コード
          <Select value={fromValue} onChange={handleFromChange}>
            {fromOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          ～
          <Select value={toValue} onChange={handleToChange}>
            {toOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </SelectLabel>
      </SelectContainer>
    </RangeSelectContainer>
  );
};

// スタイリング
const RangeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SelectLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleRangeChange = (from: number, to: number) => {
    console.log(`Selected range: ${from} - ${to}`);
  };

  return (
    <div>
      <h2>Range Select Sample</h2>
      <RangeSelect
        title="Sample Range"
        defaultFromValue={10}
        defaultToValue={50}
        onRangeChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeSelect;