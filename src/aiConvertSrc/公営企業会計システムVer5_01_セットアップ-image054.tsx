import React from 'react';
import styled from 'styled-components';

// 型定義
interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Input = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// コンポーネント定義
const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  // 値が未定義または数値でない場合のデフォルト値
  const sanitizedValue = isNaN(value) ? 0 : value;

  // ボタンクリック時の処理
  const handleIncrement = () => {
    onChange(sanitizedValue + 1);
  };

  const handleDecrement = () => {
    onChange(sanitizedValue - 1);
  };

  return (
    <Container>
      <Button onClick={handleDecrement}>-</Button>
      <Input
        type="number"
        value={sanitizedValue}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <Button onClick={handleIncrement}>+</Button>
    </Container>
  );
};



// 使用例
const Example: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Number Input Example</h2>
      <NumberInput value={count} onChange={setCount} />
      <p>Current count: {count}</p>
    </div>
  );
};

export default Example;