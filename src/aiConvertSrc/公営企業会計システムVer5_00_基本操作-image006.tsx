// MainMenu.tsx
import React from 'react';
import styled from '@emotion/styled';

interface MenuItem {
  label: string;
  value: string;
}

interface MainMenuProps {
  menuItems: MenuItem[];
  onMenuItemClick: (value: string) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ menuItems, onMenuItemClick }) => {
  return (
    <MenuContainer>
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={() => onMenuItemClick(item.value)}>
          {item.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  color: #1d2129;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

// Example usage
const ExampleMenu: React.FC = () => {
  const handleMenuItemClick = (value: string) => {
    console.log('Clicked menu item:', value);
  };

  const menuItems: MenuItem[] = [
    { label: 'ログアウト', value: 'logout' },
    { label: '高知県 管理者', value: 'admin' },
    { label: '行政 太郎', value: 'user' },
    { label: 'PW変更', value: 'changePW' },
    { label: '規約に同意済', value: 'termsAgreed' },
  ];

  return <MainMenu menuItems={menuItems} onMenuItemClick={handleMenuItemClick} />;
};

export default MainMenu;