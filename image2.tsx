import React from 'react';
import styled from 'styled-components';

// MenuProps interface defines the properties for the Menu component
interface MenuProps {
  items: string[]; // Array of menu item labels
}

// MenuItemProps interface defines the properties for the MenuItem component
interface MenuItemProps {
  label: string; // Label for the menu item
}

// MenuItem component represents a single menu item
const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return <Item>{label}</Item>;
};

// Menu component represents the entire menu
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem key={index} label={item} />
      ))}
    </MenuContainer>
  );
};

// Example usage of the Menu component
const App: React.FC = () => {
  const menuItems = ['魅せようせい', '商品一覧', 'コーディネート', '店舗情報', 'ニュースブログ', 'プライバシーポリシー'];

  return (
    <div>
      <Title>株式会社ようせい</Title>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;

// Styled components
const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
`;