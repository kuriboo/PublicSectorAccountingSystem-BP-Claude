import React from 'react';
import styled from '@emotion/styled';

interface MainMenuProps {
  title: string;
  description: string;
  onLogout: () => void;
}

const MainMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MainMenu: React.FC<MainMenuProps> = ({ title, description, onLogout }) => {
  return (
    <MainMenuContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={onLogout}>ログアウト</Button>
    </MainMenuContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const handleLogout = () => {
    // Logout logic here
    console.log('Logout clicked');
  };

  return (
    <div>
      <MainMenu
        title="メインメニュー"
        description="会計担当からお知らせ。今月の会計締め日は（月）となります。伝票提出漏れがないようよろしくお願いいたします。"
        onLogout={handleLogout}
      />
    </div>
  );
};

export default App;