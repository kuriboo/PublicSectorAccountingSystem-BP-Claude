import React from 'react';
import styled from '@emotion/styled';

// メインメニューのプロパティ型定義
type MainMenuProps = {
  title: string;
  items: string[];
};

// オプションメニューのプロパティ型定義
type OptionsMenuProps = {
  items: string[];
};

// メインメニューコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ title, items }) => {
  return (
    <MainMenuContainer>
      <MainMenuTitle>{title}</MainMenuTitle>
      {items.map((item, index) => (
        <MainMenuItem key={index}>{item}</MainMenuItem>
      ))}
    </MainMenuContainer>
  );
};

// オプションメニューコンポーネント 
const OptionsMenu: React.FC<OptionsMenuProps> = ({ items }) => {
  return (
    <OptionsMenuContainer>
      {items.map((item, index) => (
        <OptionsMenuItem key={index}>{item}</OptionsMenuItem>
      ))}
    </OptionsMenuContainer>
  );
};

// メインメニューのスタイル
const MainMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const MainMenuTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MainMenuItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
`;

// オプションメニューのスタイル
const OptionsMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
`;

const OptionsMenuItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

// サンプルデータ
const mainMenuData: MainMenuProps = {
  title: 'base',
  items: ['決済', '調定・収納', '月例'],
};

const optionsMenuData: OptionsMenuProps = {
  items: ['固定資産', '軽自動車', '工事管理', '継続費', '契約事務', '給排水受付', '企業債管理'],
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  return (
    <div>
      <h2>メインメニュー</h2>
      <MainMenu {...mainMenuData} />
      <h2>options</h2>
      <OptionsMenu {...optionsMenuData} />
    </div>
  );
};

export default UsageExample;