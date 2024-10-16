import React from 'react';
import styled from 'styled-components';

// MenuItemProps interface defines the properties for MenuItem component
interface MenuItemProps {
  label: string;
  description: string;
  price: number;
}

// MenuItem component represents a single menu item
const MenuItem: React.FC<MenuItemProps> = ({ label, description, price }) => {
  return (
    <MenuItemWrapper>
      <MenuItemLabel>{label}</MenuItemLabel>
      <MenuItemDescription>{description}</MenuItemDescription>
      <MenuItemPrice>¥{price}</MenuItemPrice>
    </MenuItemWrapper>
  );
};

// Styled components for MenuItem
const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const MenuItemLabel = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const MenuItemDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const MenuItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

// MenuProps interface defines the properties for Menu component
interface MenuProps {
  heading: string;
  items: MenuItemProps[];
}

// Menu component represents a menu section with a heading and multiple menu items
const Menu: React.FC<MenuProps> = ({ heading, items }) => {
  return (
    <MenuWrapper>
      <MenuHeading>{heading}</MenuHeading>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </MenuWrapper>
  );
};

// Styled components for Menu
const MenuWrapper = styled.div`
  margin-bottom: 40px;
`;

const MenuHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

// Sample data for demonstration
const sampleMenuItems: MenuItemProps[] = [
  {
    label: 'ぎょうざ',
    description: '自家製の肉汁たっぷりの餃子です。',
    price: 580,
  },
  {
    label: '唐揚げ',
    description: 'カリカリの皮としっとりジューシーな肉が特徴の揚げ物です。',
    price: 680,
  },
  {
    label: 'まぐろうす造り',
    description: '脂の乗ったマグロを薄くスライスして提供します。',
    price: 880,
  },
];

// Example usage of Menu component
const MenuExample: React.FC = () => {
  return (
    <div>
      <Menu heading="きょうのおすすめ" items={sampleMenuItems} />
    </div>
  );
};

export default MenuExample;