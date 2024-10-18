import React from 'react';
import styled from '@emotion/styled';

// 全体のコンテナ
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

// タイトル
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

// フォームのコンテナ
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// 入力フィールド
const InputField = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// ボタン
const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// プロパティの型定義
interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Container>
      <Title>Login</Title>
      <FormContainer>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // ログイン処理の実装
    console.log(`Logged in with username: ${username} and password: ${password}`);
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default App;