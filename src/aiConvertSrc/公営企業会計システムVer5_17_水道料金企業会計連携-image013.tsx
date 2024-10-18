import React from 'react';
import styled from '@emotion/styled';

// メニューアイテムの型定義
type MenuItem = {
  label: string;
  price: number;
};

// メニューコンポーネントのプロパティ型定義
type MenuProps = {
  title: string;
  items: MenuItem[];
};

// メニューコンポーネント
const Menu: React.FC<MenuProps> = ({ title, items }) => {
  // メニューアイテムが空の場合は、メッセージを表示
  if (items.length === 0) {
    return <EmptyMessage>メニューアイテムがありません</EmptyMessage>;
  }

  return (
    <MenuContainer>
      <MenuTitle>{title}</MenuTitle>
      <MenuItemList>
        {items.map((item, index) => (
          <MenuItem key={index}>
            <ItemLabel>{item.label}</ItemLabel>
            <ItemPrice>¥{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuItemList>
    </MenuContainer>
  );
};

// サンプルデータを使用したメニューコンポーネントの表示例
const MenuExample: React.FC = () => {
  const sampleItems: MenuItem[] = [
    { label: '醤油ラーメン', price: 850 },
    { label: '豚骨ラーメン', price: 900 },
    { label: '味噌ラーメン', price: 900 },
  ];

  return (
    <div>
      <Menu title="ラーメンメニュー" items={sampleItems} />
    </div>
  );
};

// スタイリング
const MenuContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const MenuTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const MenuItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemLabel = styled.span`
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const ItemPrice = styled.span`
  font-size: 16px;
  color: #888;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const EmptyMessage = styled.p`
  font-size: 16px;
  color: #888;
  text-align: center;
`;

export default Menu;