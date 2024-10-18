import React from 'react';
import styled from 'styled-components';

interface RangeInputProps {
  label: string;
  fromValue: string;
  toValue: string;
  onChange: (key: 'from' | 'to', value: string) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, fromValue, toValue, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          value={fromValue}
          onChange={(e) => onChange('from', e.target.value)}
          placeholder="所属"
        />
        <Separator>~</Separator>
        <Input
          value={toValue}
          onChange={(e) => onChange('to', e.target.value)}
          placeholder="所属"
        />
      </InputContainer>
    </Container>
  );
};

// Stylings
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;

  &::placeholder {
    color: #999;
  }
`;

const Separator = styled.span`
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  const [range, setRange] = React.useState({
    from: '',
    to: '',
  });

  const handleChange = (key: 'from' | 'to', value: string) => {
    setRange((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <h1>Range Input Example</h1>
      <RangeInput
        label="範囲指定"
        fromValue={range.from}
        toValue={range.to}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;