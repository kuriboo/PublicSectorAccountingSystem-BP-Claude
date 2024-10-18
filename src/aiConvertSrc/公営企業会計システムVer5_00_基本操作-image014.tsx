import React from 'react';
import styled from '@emotion/styled';

type PasswordChangeFormProps = {
  onSubmit: (newPassword: string, confirmPassword: string) => void;
};

const PasswordChangeForm: React.FC<PasswordChangeFormProps> = ({ onSubmit }) => {
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newPassword, confirmPassword);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label>旧パスワード</Label>
        <Input type="password" placeholder="********" />
      </InputGroup>
      <InputGroup>
        <Label>新パスワード</Label>
        <Input
          type="password"
          placeholder="********"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Label>新パスワード(確認用)</Label>
        <Input
          type="password"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputGroup>
      <ButtonGroup>
        <Button type="button">変更</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handlePasswordChange = (newPassword: string, confirmPassword: string) => {
    if (newPassword !== confirmPassword) {
      alert("新しいパスワードと確認用パスワードが一致しません。");
      return;
    }
    // Perform password change logic here
    console.log("Password changed:", newPassword);
  };

  return (
    <div>
      <h1>パスワード変更画面</h1>
      <PasswordChangeForm onSubmit={handlePasswordChange} />
    </div>
  );
};

export default App;