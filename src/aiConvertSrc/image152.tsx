import React from 'react';
import styled from '@emotion/styled';

interface MenuItemProps {
  icon: string;
  label: string;
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const MenuItemLabel = styled.span`
  font-size: 14px;
`;

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <MenuItemContainer>
      <MenuItemIcon src={icon} alt={label} />
      <MenuItemLabel>{label}</MenuItemLabel>
    </MenuItemContainer>
  );
};

interface MenuProps {
  items: MenuItemProps[];
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const Menu: React.FC<MenuProps> = ({ items }) => {
  // 例外処理: アイテムが空の場合
  if (items.length === 0) {
    return <div>No menu items</div>;
  }

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
    </MenuContainer>
  );
};

// サンプルデータ
const sampleMenuItems: MenuItemProps[] = [
  { icon: 'path/to/icon1.png', label: 'Menu Item 1' },
  { icon: 'path/to/icon2.png', label: 'Menu Item 2' },
  { icon: 'path/to/icon3.png', label: 'Menu Item 3' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Menu Example</h1>
      <Menu items={sampleMenuItems} />
    </div>
  );
};

export default App;