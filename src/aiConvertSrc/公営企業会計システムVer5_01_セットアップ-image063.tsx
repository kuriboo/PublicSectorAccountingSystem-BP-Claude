import React, { useState } from 'react';
import styled from 'styled-components';

interface RangeSliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const RangeSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const RangeSliderLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const RangeSliderInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const RangeSliderValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 999,
  value = 0,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <RangeSliderContainer>
      <RangeSliderLabel>範囲指定</RangeSliderLabel>
      <RangeSliderInput
        type="range"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleChange}
      />
      <RangeSliderValue>{sliderValue}</RangeSliderValue>
    </RangeSliderContainer>
  );
};

export default RangeSlider;

// Usage example
const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleSliderChange = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>Range Slider Example</h1>
      <RangeSlider min={0} max={999} value={selectedValue} onChange={handleSliderChange} />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};