import React from 'react';
import styled from 'styled-components';

// MenuItemProps型定義
type MenuItemProps = {
  label: string;
  price: number;
  description?: string;
};

// MenuItemコンポーネント
const MenuItem: React.FC<MenuItemProps> = ({ label, price, description }) => {
  return (
    <MenuItemWrapper>
      <MenuItemLabel>{label}</MenuItemLabel>
      <MenuItemPrice>¥{price.toLocaleString()}</MenuItemPrice>
      {description && <MenuItemDescription>{description}</MenuItemDescription>}
    </MenuItemWrapper>
  );
};

// MenuItemのスタイル定義
const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const MenuItemLabel = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const MenuItemPrice = styled.span`
  font-size: 1rem;
  color: #666;
`;

const MenuItemDescription = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.5rem;
`;

// MenuProps型定義
type MenuProps = {
  title: string;
  items: MenuItemProps[];
};

// Menuコンポーネント
const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <MenuWrapper>
      <MenuTitle>{title}</MenuTitle>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </MenuWrapper>
  );
};

// Menuのスタイル定義
const MenuWrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const MenuTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// サンプルデータ
const sampleMenuItems: MenuItemProps[] = [
  { label: '鰻きょうせい', price: 1000 },
  { label: '鰻ひつまぶし', price: 1500, description: '薬味を添えて3種類の味が楽しめます。' },
];

// 使用例
const MenuExample: React.FC = () => {
  return <Menu title="鰻メニュー" items={sampleMenuItems} />;
};

export default MenuExample;