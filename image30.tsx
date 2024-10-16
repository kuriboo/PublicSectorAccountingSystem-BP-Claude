import React from 'react';
import styled from '@emotion/styled';

type MenuItem = {
  label: string;
  link: string;
};

type MenuProps = {
  title: string;
  items: MenuItem[];
};

const MenuContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 200px;
`;

const MenuTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuListItem = styled.li`
  margin-bottom: 8px;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <MenuContainer>
      <MenuTitle>{title}</MenuTitle>
      <MenuList>
        {items.map((item, index) => (
          <MenuListItem key={index}>
            <MenuLink href={item.link}>{item.label}</MenuLink>
          </MenuListItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: '消費税計算', link: '/tax-calculator' },
    { label: '消費税一覧表', link: '/tax-list' },
    { label: '消費税額計算', link: '/tax-amount-calculator' },
    { label: '設定', link: '/settings' },
  ];

  return (
    <div>
      <Menu title="月例メニュー" items={menuItems} />
    </div>
  );
};

export default App;