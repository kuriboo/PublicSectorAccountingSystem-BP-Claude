import React from 'react';
import styled from '@emotion/styled';

type MenuItemProps = {
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return <MenuItemWrapper>{label}</MenuItemWrapper>;
};

const MenuItemWrapper = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

type MenuSectionProps = {
  title: string;
  items: string[];
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <MenuSectionWrapper>
      <MenuSectionTitle>{title}</MenuSectionTitle>
      {items.map((item, index) => (
        <MenuItem key={index} label={item} />
      ))}
    </MenuSectionWrapper>
  );
};

const MenuSectionWrapper = styled.div`
  margin-bottom: 16px;
`;

const MenuSectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

type MainMenuProps = {
  executionOrder: string[];
  maintenance: string[];
  management: string[];
  constructionOrder: string[];
  options: string[];
};

const MainMenu: React.FC<MainMenuProps> = ({
  executionOrder,
  maintenance,
  management,
  constructionOrder,
  options,
}) => {
  return (
    <MainMenuWrapper>
      <MenuSection title="執行" items={executionOrder} />
      <MenuSection title="予算" items={[]} />
      <MenuSection title="決算" items={management} />
      <MenuSection title="maintenance" items={maintenance} />
      <MenuSection title="options" items={options} />
    </MainMenuWrapper>
  );
};

const MainMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <MainMenu
      executionOrder={['支払', '調定・収納', '月例']}
      maintenance={['セットアップ']}
      management={['決算統計']}  
      constructionOrder={['国定資産', '工事管理', '継続費']}
      options={['固定資産', '収入証紙', '企業債管理', '契約事務', '給排水受付']}
    />
  );
};

export default App;