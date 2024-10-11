import React from 'react';
import styled from '@emotion/styled';

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  items: MenuItem[];
}

const MenuContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 200px;
  margin: 0 auto;
`;

const MenuTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: #666;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuContainer>
      <MenuTitle>月例メニュー</MenuTitle>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>
            <a href={item.link}>{item.label}</a>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

// サンプルデータと使用例
const sampleMenuItems: MenuItem[] = [
  { label: '請求明細', link: '/billing' },
  { label: '子請求作成', link: '/create-sub-invoice' },
  { label: '日次・月次報告', link: '/daily-monthly-report' },
  { label: '消費税計算', link: '/consumption-tax' },
  { label: '設定構成表入出力', link: '/settings-io' },
];

const SampleMenuUsage: React.FC = () => {
  return <Menu items={sampleMenuItems} />;
};

export default SampleMenuUsage;