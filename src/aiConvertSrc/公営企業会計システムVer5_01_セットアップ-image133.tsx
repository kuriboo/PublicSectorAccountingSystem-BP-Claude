import React from 'react';
import styled from '@emotion/styled';

interface RangeSelectorProps {
  title: string;
  minValue?: number;
  maxValue?: number;
  onRangeChange: (min: number, max: number) => void;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  title,
  minValue = 0,
  maxValue = 999999999999,
  onRangeChange,
}) => {
  const [min, setMin] = React.useState(minValue);
  const [max, setMax] = React.useState(maxValue);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setMin(newMin);
    onRangeChange(newMin, max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setMax(newMax);
    onRangeChange(min, newMax);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <RangeInputs>
        <RangeInput
          type="number"
          value={min}
          onChange={handleMinChange}
          placeholder="相手先"
        />
        <Separator>〜</Separator>
        <RangeInput
          type="number"
          value={max}
          onChange={handleMaxChange}
          placeholder="相手先"
        />
      </RangeInputs>
    </Container>
  );
};

const Container = styled.div`
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
`;

const RangeInput = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Separator = styled.span`
  margin: 0 4px;
`;

// Usage example
const App: React.FC = () => {
  const handleRangeChange = (min: number, max: number) => {
    console.log(`Range changed: ${min} - ${max}`);
  };

  return (
    <div>
      <h1>Range Selector Example</h1>
      <RangeSelector
        title="範囲指定"
        minValue={1000}
        maxValue={5000}
        onRangeChange={handleRangeChange}
      />
    </div>
  );
};

export default App;