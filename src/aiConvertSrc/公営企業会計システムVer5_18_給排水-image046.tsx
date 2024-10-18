import React from 'react';
import styled from 'styled-components';

// 型定義
type MenuItemProps = {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

// メニューアイテムコンポーネント
const MenuItem: React.FC<MenuItemProps> = ({ label, icon, active = false, onClick }) => {
  return (
    <MenuItemWrapper active={active} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Label>{label}</Label>
    </MenuItemWrapper>
  );
};

// メニューコンポーネント
type MenuProps = {
  items: MenuItemProps[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuWrapper>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </MenuWrapper>
  );
};

// スタイリング
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const MenuItemWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#ddd' : 'transparent')};

  &:hover {
    background-color: #ddd;
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const Label = styled.span`
  font-size: 14px;
`;

// 使用例
const App: React.FC = () => {
  const menuItems: MenuItemProps[] = [
    { label: '明細確認', icon: '📋' },
    { label: '行削除', icon: '❌', active: true },
    { label: '税率', icon: '💹' },
    { label: '明細書', icon: '📜' },
    { label: '秋季別明細', icon: '🍂' },
  ];

  return (
    <div>
      <h1>メニュー</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;