import React from 'react';
import styled from '@emotion/styled';

interface MainMenuProps {
  title: string;
  description: string;
  baseText: string;
  onClickLogin: () => void;
  onClickRegister: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ title, description, baseText, onClickLogin, onClickRegister }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BaseText>{baseText}</BaseText>
      <ButtonContainer>
        <Button onClick={onClickLogin}>ログイウト</Button>
        <Button onClick={onClickRegister}>接続切替</Button>
      </ButtonContainer>
      <ToolContainer>
        <ToolButton>お知らせ登録</ToolButton>
        <ToolButton>さらに</ToolButton>
        <ToolButton>共有</ToolButton>
        <ToolButton>ツール</ToolButton>
        <ToolButton>FAQ</ToolButton>
      </ToolContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const BaseText = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const ToolButton = styled.button`
  padding: 8px;
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  return (
    <MainMenu
      title="メインメニュー"
      description="会計担当からお知らせ
        今月の会計締処理は○日(△)となります。伝票提出漏れがないようよろしくお願いいたします。"
      baseText="管財課からのお知らせ
        電気設備点検を、以下の日程で実施いたします。
        9月2日(土) 本庁舎 3日(日)を予備日とします。"
      onClickLogin={handleLogin}
      onClickRegister={handleRegister}
    />
  );
};

export default App;