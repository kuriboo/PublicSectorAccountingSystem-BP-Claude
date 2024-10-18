import React from 'react';
import styled from '@emotion/styled';

// Menu item interface
interface MenuItem {
  label: string;
  link?: string;
}

// Side menu props interface
interface SideMenuProps {
  title: string;
  items: MenuItem[];
}

// Styled components
const MenuContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuListItem = styled.li`
  margin-bottom: 5px;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// SideMenu component
const SideMenu: React.FC<SideMenuProps> = ({ title, items }) => {
  return (
    <MenuContainer>
      <MenuTitle>{title}</MenuTitle>
      <MenuList>
        {items.map((item, index) => (
          <MenuListItem key={index}>
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </MenuListItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: 'セットアップ' },
    { label: '予算編成' },
    { label: '決算' },
    { label: '決算統計' },
    { label: '固定資産' },
    { label: '契約事務' },
    { label: '操作マニュアル', link: '#' },
    { label: '利用マニュアル', link: '#' },
    { label: '予算編成', link: '#' },
    { label: '予算編成 01全般', link: '#' },
    { label: '予算編成 02編集', link: '#' },
    { label: '支払', link: '#' },
    { label: '調定収納', link: '#' },
    { label: '月例', link: '#' },
    { label: '決算', link: '#' },
    { label: '決算・消費税 01全般', link: '#' },
    { label: '決算・消費税 02詳細', link: '#' },
    { label: '決算・消費税 03計算整理', link: '#' },
    { label: '決算統計 01全般', link: '#' },
    { label: '決算統計 02編集', link: '#' },
    { label: '固定資産', link: '#' },
  ];

  return (
    <div>
      <SideMenu title="公営企業会計システム ツールダウンロード" items={menuItems} />
    </div>
  );
};

export default App;