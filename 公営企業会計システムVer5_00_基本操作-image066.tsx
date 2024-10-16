import React from 'react';
import styled from 'styled-components';

// メインメニューのコンポーネントの型定義
interface MainMenuProps {
  title?: string;
}

// メインメニューのコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ title = 'メインメニュー' }) => {
  return (
    <MenuWrapper>
      <MenuTitle>{title}</MenuTitle>
      <MenuDescription>
        会計担当からお知らせ
        今月の会計締処理は◯日(△)となります。伝票提出締めがないようよろしくお願いいたします。
        商品課からのお知らせ
        最気設備は終了、以下の日程で実施いたします。
        9月2日(土) 本庁舎 3日(日)を予備日とします。
      </MenuDescription>
      <MenuGrid>
        <MenuColumn>
          <MenuButton>支払</MenuButton>
          <MenuButton>期定 · 収納</MenuButton>
          <MenuButton>月例</MenuButton>
        </MenuColumn>
        <MenuColumn>
          <MenuButton>予算請求</MenuButton>
          <MenuButton>予算書</MenuButton>
          <MenuButton>議題予算</MenuButton>
        </MenuColumn>
        <MenuColumn>
          <MenuButton>決算</MenuButton>
          <MenuButton>決算統計</MenuButton>
        </MenuColumn>
      </MenuGrid>
      <MenuGrid>
        <MenuButton>固定資産</MenuButton>
        <MenuButton>貯蓄CD</MenuButton>
        <MenuButton>工事管理</MenuButton>
        <MenuButton>維持管理</MenuButton>
      </MenuGrid>
    </MenuWrapper>
  );
};

// スタイリング
const MenuWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const MenuTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const MenuDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const MenuGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <MainMenu />
      <MainMenu title="カスタムタイトル" />
    </div>
  );
};

export default App;