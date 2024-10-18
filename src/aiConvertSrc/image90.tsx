import React from 'react';
import styled from '@emotion/styled';

interface InputFormProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const InputForm: React.FC<InputFormProps> = ({ label, value, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('42910001:2017-010-42910001-SM1');

  return (
    <div>
      <h2>入札結果取込更新処理</h2>
      <InputForm
        label="物件"
        value={inputValue}
        onChange={(value) => setInputValue(value)}
      />
    </div>
  );
};

export default App;