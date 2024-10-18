import React from 'react';
import styled from 'styled-components';

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  // ボタンクリック時の処理
  const handleButtonClick = (action: 'ok' | 'clear' | 'cancel') => {
    if (action === 'ok') {
      // OKボタンクリック時の処理
      console.log('OK clicked');
    } else if (action === 'clear') {
      // クリアボタンクリック時の処理
      onChange(0);
    } else if (action === 'cancel') {
      // キャンセルボタンクリック時の処理  
      console.log('Cancel clicked');
    }
  };

  return (
    <Container>
      <Input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <ButtonGroup>
        <Button onClick={() => handleButtonClick('ok')}>OK</Button>
        <Button onClick={() => handleButtonClick('clear')}>クリア</Button>
        <Button onClick={() => handleButtonClick('cancel')}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 240px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// 使用例
const SampleUsage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState(0);

  return (
    <div>
      <h2>NumberInput Component</h2>
      <NumberInput value={inputValue} onChange={setInputValue} />
      <p>入力値: {inputValue}</p>
    </div>
  );
};

export default SampleUsage;