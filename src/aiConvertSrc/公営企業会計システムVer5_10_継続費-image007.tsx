import React from 'react';
import styled from 'styled-components';

// MenuItemProps interface defines the properties for the MenuItem component
interface MenuItemProps {
  label: string;
  description?: string;
  price: number;
}

// MenuItem component represents a single menu item
const MenuItem: React.FC<MenuItemProps> = ({ label, description, price }) => {
  return (
    <MenuItemContainer>
      <MenuItemLabel>{label}</MenuItemLabel>
      {description && <MenuItemDescription>{description}</MenuItemDescription>}
      <MenuItemPrice>¥{price.toLocaleString()}</MenuItemPrice>
    </MenuItemContainer>
  );
};

// MenuProps interface defines the properties for the Menu component
interface MenuProps {
  items: MenuItemProps[];
}

// Menu component represents a collection of menu items
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuContainer>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </MenuContainer>
  );
};

// Styled components for the MenuItem
const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const MenuItemLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const MenuItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const MenuItemPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

// Styled component for the Menu
const MenuContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

// Sample data for the menu items
const sampleMenuItems: MenuItemProps[] = [
  {
    label: '駄菓子ようせい',
    price: 100,
  },
  {
    label: 'ぼたもち',
    description: 'あんこ・きなこ',
    price: 120,
  },
  {
    label: 'だいふく',
    price: 120,
  },
];

// Example usage of the Menu component with sample data
const MenuExample: React.FC = () => {
  return (
    <div>
      <h2>菓子メニュー</h2>
      <Menu items={sampleMenuItems} />
    </div>
  );
};

export default MenuExample;