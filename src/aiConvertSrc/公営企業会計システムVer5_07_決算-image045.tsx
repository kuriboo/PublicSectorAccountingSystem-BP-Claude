import React from 'react';
import styled from '@emotion/styled';

type MaskInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const MaskInput: React.FC<MaskInputProps> = ({ value, onChange, placeholder = '' }) => {
  // マスク入力の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #999;
  }
`;

// 使用例
const App: React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <h1>マスク入力コンポーネント</h1>
      <MaskInput
        value={value}
        onChange={setValue}
        placeholder="要素マスターが表示されます。"
      />
    </div>
  );
};

export default App;