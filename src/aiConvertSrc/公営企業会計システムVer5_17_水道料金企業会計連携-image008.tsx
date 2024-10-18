import React from 'react';
import styled from 'styled-components';

// メインメニューのプロパティ型定義
type MainMenuProps = {
  onMenuClick: (menu: string) => void;
};

// メインメニューコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ onMenuClick }) => {
  // メニューアイテムのリスト
  const menuItems = [
    { label: '受払', key: 'accounting' },
    { label: '調定・収納', key: 'billing' },
    { label: '月例', key: 'monthly' },
  ];

  return (
    <MenuWrapper>
      <MenuTitle>base</MenuTitle>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.key} onClick={() => onMenuClick(item.key)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

// オプションメニューのプロパティ型定義
type OptionMenuProps = {
  onMenuClick: (menu: string) => void;
};

// オプションメニューコンポーネント 
const OptionMenu: React.FC<OptionMenuProps> = ({ onMenuClick }) => {
  // メニューアイテムのリスト
  const menuItems = [
    { label: '固定資産', key: 'fixed_assets' },
    { label: '貯蔵品', key: 'inventory' },
    { label: '工事管理', key: 'construction' },
    { label: '継続費', key: 'subscription' },
    { label: '契約事務', key: 'contract' },
    { label: '給排水受付', key: 'water_supply' },
  ];

  return (
    <MenuWrapper>
      <MenuTitle>options</MenuTitle>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.key} onClick={() => onMenuClick(item.key)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

// メインメニューとオプションメニューを組み合わせたメインコンポーネント
const MainComponent: React.FC = () => {
  // メニュークリック時のハンドラー
  const handleMenuClick = (menu: string) => {
    console.log(`Clicked menu: ${menu}`);
    // TODO: メニュークリック時の処理を実装
  };

  return (
    <Wrapper>
      <Header>
        <Logo>メインメニュー</Logo>
        <HeaderText>
          <p>経営企画課 経理</p>
          <p>2017年度 上下・工水の権限</p>
        </HeaderText>
      </Header>
      <MenuContainer>
        <MainMenu onMenuClick={handleMenuClick} />
        <OptionMenu onMenuClick={handleMenuClick} />
      </MenuContainer>
      <Footer>
        <MaintenanceButton>セットアップ</MaintenanceButton>
      </Footer>
    </Wrapper>
  );
};

// スタイリング用のコンポーネント
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderText = styled.div`
  text-align: right;

  p {
    margin: 5px 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MenuWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

const MenuTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Footer = styled.footer`
  padding: 10px;
  background-color: #f0f0f0;
  text-align: right;
`;

const MaintenanceButton = styled.button`
  padding: 5px 10px;
`;

export default MainComponent;