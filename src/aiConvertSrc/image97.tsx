import React from 'react';
import styled from '@emotion/styled';

interface InputFormProps {
  onSubmit: (value: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="※一覧に直接書込んで下さい。"
      />
      <SubmitButton type="submit">表示</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  flex: 1;
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

const SubmitButton = styled.button`
  height: 32px;
  padding: 0 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプル使用コンポーネント
const App: React.FC = () => {
  const handleSubmit = (value: string) => {
    console.log('Submitted value:', value);
  };

  return (
    <div>
      <h1>入力フォームサンプル</h1>
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;