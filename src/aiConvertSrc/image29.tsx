import React from 'react';
import styled from 'styled-components';

// MenuItemProps型定義
type MenuItemProps = {
  label: string;
  onClick: () => void;
};

// MenuItem コンポーネント
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return <MenuItemWrapper onClick={onClick}>{label}</MenuItemWrapper>;
};

// MenuItemのスタイリング
const MenuItemWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// MenuProps型定義
type MenuProps = {
  items: MenuItemProps[];
};

// Menu コンポーネント 
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuWrapper>
      {items.map((item, index) => (
        <MenuItem key={index} label={item.label} onClick={item.onClick} />
      ))}
    </MenuWrapper>
  );
};

// Menuのスタイリング
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// サンプルデータ
const menuItems: MenuItemProps[] = [
  { label: '消費税計算', onClick: () => console.log('消費税計算clicked') },
  { label: '事業所得計算', onClick: () => console.log('事業所得計算clicked') },
  { label: '申告作成', onClick: () => console.log('申告作成clicked') },
  { label: '設定', onClick: () => console.log('設定clicked') },
];

// サンプル表示用コンポーネント
const SampleComponent: React.FC = () => {
  return (
    <div>
      <h1>月例メニュー</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default SampleComponent;