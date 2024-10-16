import React from 'react';
import styled from 'styled-components';

type PasswordChangeProps = {
  onSubmit: (currentPassword: string, newPassword: string) => void;
};

const PasswordChange: React.FC<PasswordChangeProps> = ({ onSubmit }) => {
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(currentPassword, newPassword);
  };

  return (
    <Container>
      <Title>パスワード変更画面</Title>
      <Description>
        パスワードには、半角英字と数値を含めてOX字以上を入力してください。
      </Description>
      <Form onSubmit={handleSubmit}>
        <Label>
          旧パスワード
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </Label>
        <Label>
          新パスワード
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Label>
        <Label>
          新パスワード(確認用)
          <Input type="password" required />
        </Label>
        <ButtonContainer>
          <Button type="button">変更</Button>
          <Button type="button">クリア</Button>
          <SubmitButton type="submit">キャンセル</SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
`;

// Sample usage
const SamplePasswordChange = () => {
  const handlePasswordChange = (currentPassword: string, newPassword: string) => {
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    // Perform password change logic here
  };

  return <PasswordChange onSubmit={handlePasswordChange} />;
};

export default SamplePasswordChange;