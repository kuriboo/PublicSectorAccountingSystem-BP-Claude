import React from 'react';
import styled from 'styled-components';

// Component props type definition
type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;

// NumberInput component
const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min = 0, max = 999 }) => {
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
      onChange(inputValue);
    }
  };

  return (
    <Container>
      <Input type="number" value={value} onChange={handleChange} min={min} max={max} />
      <Button onClick={() => onChange(value)}>OK</Button>
      <Button onClick={() => onChange(0)}>クリア</Button>
      <Button onClick={() => onChange(value + 1)}>キャンセル</Button>
    </Container>
  );
};

// Sample usage
const NumberInputSample: React.FC = () => {
  const [count, setCount] = React.useState(100);

  return (
    <div>
      <h2>集計先番号</h2>
      <NumberInput value={count} onChange={setCount} min={0} max={999} />
    </div>
  );
};

export default NumberInputSample;