import React from 'react';
import styled from '@emotion/styled';

interface MenuItem {
  label: string;
  link: string;
}

interface SideMenuProps {
  title: string;
  menuItems: MenuItem[];
}

const SideMenuWrapper = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 16px;
`;

const SideMenuTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
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

const SideMenu: React.FC<SideMenuProps> = ({ title, menuItems }) => {
  return (
    <SideMenuWrapper>
      <SideMenuTitle>{title}</SideMenuTitle>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuListItem key={index}>
            <MenuLink href={item.link}>{item.label}</MenuLink>
          </MenuListItem>
        ))}
      </MenuList>
    </SideMenuWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: '消費税計算', link: '/tax-calculator' },
    { label: '消費税の表記', link: '/tax-display' },
    { label: '消費税率', link: '/tax-rate' },
    { label: '設定', link: '/settings' },
    { label: '設定値仕入の税込み区分', link: '/purchase-settings' },
  ];

  return (
    <div>
      <SideMenu title="月例メニュー" menuItems={menuItems} />
      {/* Rest of your app */}
    </div>
  );
};

export default App;