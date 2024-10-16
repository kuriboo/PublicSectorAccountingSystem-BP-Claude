import React from 'react';
import styled from '@emotion/styled';

type RangeInputProps = {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

const RangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const RangeInput = styled.input`
  flex: 1;
  margin: 0 8px;
`;

const RangeValue = styled.span`
  min-width: 24px;
  text-align: center;
`;

const RangeInputComponent: React.FC<RangeInputProps> = ({ min, max, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <RangeInputContainer>
      <RangeValue>{min}</RangeValue>
      <RangeInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <RangeValue>{max}</RangeValue>
    </RangeInputContainer>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const [rangeValue, setRangeValue] = React.useState(50);

  const handleRangeChange = (newValue: number) => {
    setRangeValue(newValue);
  };

  return (
    <div>
      <h2>重要契約区分</h2>
      <RangeInputComponent
        min={1}
        max={99}
        value={rangeValue}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default ExampleComponent;