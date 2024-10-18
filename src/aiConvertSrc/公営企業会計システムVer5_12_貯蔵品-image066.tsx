import React from 'react';
import styled from '@emotion/styled';

interface RangeInputProps {
  title: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  options?: {
    noDecimal?: boolean;
    isRounding?: boolean;
    isOutOfRange?: boolean;
    isLump?: boolean;
    isMonthly?: boolean;
  };
}

const RangeInput: React.FC<RangeInputProps> = ({
  title,
  min,
  max,
  value,
  onChange,
  options = {},
}) => {
  const {
    noDecimal = false,
    isRounding = false,
    isOutOfRange = false,
    isLump = false,
    isMonthly = false,
  } = options;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseFloat(e.target.value);

    if (noDecimal) {
      newValue = Math.round(newValue);
    }

    if (isRounding) {
      newValue = Math.floor(newValue);
    }

    if (isOutOfRange) {
      newValue = Math.max(min, Math.min(max, newValue));
    }

    onChange(newValue);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <Input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <MinValue>{min.toLocaleString()}</MinValue>
        <MaxValue>{max.toLocaleString()}</MaxValue>
      </InputContainer>
      <OptionsContainer>
        <Option>
          <Checkbox type="checkbox" checked={noDecimal} readOnly />
          <Label>No decimal</Label>
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={isRounding} readOnly />
          <Label>Rounding</Label>
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={isOutOfRange} readOnly />
          <Label>Out of range</Label>
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={isLump} readOnly />
          <Label>Lump</Label>
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={isMonthly} readOnly />
          <Label>Monthly</Label>
        </Option>
      </OptionsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  font-size: 16px;
`;

const MinValue = styled.div`
  font-size: 14px;
  color: gray;
`;

const MaxValue = styled.div`
  font-size: 14px;
  color: gray;
`;

const OptionsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  gap: 10px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const Label = styled.div`
  font-size: 14px;
`;

// Example usage
const RangeInputExample = () => {
  const [value, setValue] = React.useState(0);

  return (
    <RangeInput
      title="Range Input Example"
      min={0}
      max={999999}
      value={value}
      onChange={setValue}
      options={{
        noDecimal: true,
        isRounding: true,
        isOutOfRange: true,
      }}
    />
  );
};

export default RangeInputExample;