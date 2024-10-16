import React from 'react';
import styled from '@emotion/styled';

type RangeInputProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const RangeInput: React.FC<RangeInputProps> = ({
  min = 0,
  max = 999999,
  step = 1,
  value = 0,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    onChange?.(newValue);
  };

  return (
    <Container>
      <Label>仕訳</Label>
      <InputContainer>
        <Input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <ValueDisplay>
          <ValueLabel>仕訳</ValueLabel>
          <Value>{value.toLocaleString()}</Value>
          <ValueLabel>仕訳</ValueLabel>
          <Value>{max.toLocaleString()}</Value>
        </ValueDisplay>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  width: 100%;
`;

const ValueDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const ValueLabel = styled.span`
  font-size: 12px;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

// Usage example
const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Range Input Example</h1>
      <RangeInput min={0} max={999999} step={1} value={value} onChange={handleChange} />
      <p>Selected value: {value}</p>
    </div>
  );
};

export default App;