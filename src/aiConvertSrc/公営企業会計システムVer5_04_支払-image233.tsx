import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface MenuItemProps {
  title: string;
  description: string;
  price: number;
}

// メニュー項目のスタイル定義
const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const MenuDescription = styled.p`
  margin: 0;
  color: #666;
`;

const MenuPrice = styled.span`
  font-weight: bold;
`;

// メニュー項目のコンポーネント
const MenuItemComponent: React.FC<MenuItemProps> = ({ title, description, price }) => {
  // 値が入っていない場合の処理
  if (!title || !description || !price) {
    return null;
  }

  return (
    <MenuItem>
      <div>
        <MenuTitle>{title}</MenuTitle>
        <MenuDescription>{description}</MenuDescription>
      </div>
      <MenuPrice>¥{price.toLocaleString()}</MenuPrice>
    </MenuItem>
  );
};

// サンプルデータ
const sampleData: MenuItemProps[] = [
  {
    title: 'ぎょうざ',
    description: '手作りの餃子。野菜たっぷり。',
    price: 450,
  },
  {
    title: 'きょうりゅうせい',
    description: '恐竜の形をしたお菓子。',
    price: 200,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      {sampleData.map((item, index) => (
        <MenuItemComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default App;