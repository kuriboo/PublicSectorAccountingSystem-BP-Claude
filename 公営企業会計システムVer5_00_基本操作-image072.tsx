import React from 'react';
import styled from 'styled-components';

// メインメニューのプロパティ型定義
type MainMenuProps = {
  items: string[];
};

// メインメニューコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ items }) => {
  return (
    <MainMenuContainer>
      <Title>メインメニュー</Title>
      <Description>以下の項目から、ご希望のメニューをお選びください。</Description>
      <MenuItems>
        {items.map((item, index) => (
          <MenuItem key={index}>
            <MenuButton>{item}</MenuButton>
          </MenuItem>
        ))}
      </MenuItems>
    </MainMenuContainer>
  );
};

// メインメニューのスタイリング
const MainMenuContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const MenuItem = styled.li``;

const MenuButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// メインメニューの使用例
const App: React.FC = () => {
  const menuItems = ['基本情報', '学習履歴', '教育', '職務経歴', '資格・特技'];

  return (
    <div>
      <h1>マイページ</h1>
      <MainMenu items={menuItems} />
    </div>
  );
};

export default App;