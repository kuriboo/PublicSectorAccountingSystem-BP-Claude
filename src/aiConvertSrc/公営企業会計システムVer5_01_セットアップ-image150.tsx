import React from 'react';
import styled from '@emotion/styled';

type RangeInputProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

const RangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RangeInputLabel = styled.label`
  font-weight: bold;
`;

const RangeInput = styled.input`
  flex: 1;
`;

const RangeInputValue = styled.span`
  font-family: monospace;
`;

const RangeInputComponent: React.FC<RangeInputProps> = ({
  label,
  value,
  min = 0,
  max = 99999,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <RangeInputWrapper>
      <RangeInputLabel>{label}</RangeInputLabel>
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <RangeInputValue>{value}</RangeInputValue>
    </RangeInputWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const [rangeValue, setRangeValue] = React.useState(0);

  return (
    <div>
      <h1>Range Input Example</h1>
      <RangeInputComponent
        label="Range Input"
        value={rangeValue}
        min={0}
        max={100000}
        onChange={setRangeValue}
      />
    </div>
  );
};

export default App;