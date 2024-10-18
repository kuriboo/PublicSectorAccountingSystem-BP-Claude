import React from 'react';
import styled from '@emotion/styled';

interface MenuProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuRight = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const LoginButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Menu: React.FC<MenuProps> = ({ isLoggedIn, onLoginClick }) => {
  return (
    <MenuWrapper>
      <MenuLeft>
        <MenuItem>メインメニュー</MenuItem>
      </MenuLeft>
      <MenuRight>
        <MenuItem>ログアウト</MenuItem>
        <MenuItem>行政市販管理者</MenuItem>
        {!isLoggedIn && (
          <LoginButton onClick={onLoginClick}>ログイン</LoginButton>
        )}
      </MenuRight>
    </MenuWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic
    console.log('Login clicked');
  };

  return (
    <div>
      <Menu isLoggedIn={false} onLoginClick={handleLogin} />
      {/* Rest of the app */}
    </div>
  );
};

export default App;