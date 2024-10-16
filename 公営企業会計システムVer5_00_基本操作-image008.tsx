// MainMenu.tsx
import React from 'react';
import styled from '@emotion/styled';

type MainMenuProps = {
  title: string;
  items: string[];
};

const MainMenu: React.FC<MainMenuProps> = ({ title, items }) => {
  return (
    <MenuWrapper>
      <Title>{title}</Title>
      <MenuItems>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuItems>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

// Usage example
const MainMenuExample: React.FC = () => {
  const menuItems = ['行政市事業会計', '特別会計', '企業会計'];

  return (
    <div>
      <MainMenu title="メインメニュー" items={menuItems} />
    </div>
  );
};

export default MainMenuExample;