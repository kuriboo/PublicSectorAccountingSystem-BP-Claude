import React from 'react';
import styled from '@emotion/styled';

type MenuItemProps = {
  /** メニュー項目のタイトル */
  title: string;
  /** メニュー項目の説明 */
  description: string;
  /** メニュー項目の価格 */
  price: number;
};

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuItemInfo = styled.div`
  flex: 1;
`;

const MenuItemTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const MenuItemDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const MenuItemPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

/**
 * メニュー項目コンポーネント
 */
const MenuItem: React.FC<MenuItemProps> = ({ title, description, price }) => {
  return (
    <MenuItemWrapper>
      <MenuItemInfo>
        <MenuItemTitle>{title}</MenuItemTitle>
        <MenuItemDescription>{description}</MenuItemDescription>
      </MenuItemInfo>
      <MenuItemPrice>¥{price.toLocaleString()}</MenuItemPrice>
    </MenuItemWrapper>
  );
};

// サンプルデータ
const sampleMenuItems: MenuItemProps[] = [
  {
    title: 'ぎょうざ',
    description: '国産豚肉と野菜を使った手作り餃子',
    price: 480,
  },
  {
    title: 'だし巻き',
    description: '出汁の効いたふわふわの玉子焼き',
    price: 580,
  },
  {
    title: 'いか焼き',
    description: 'プリプリのイカを魚醤ベースのタレで焼き上げました',
    price: 880,
  },
];

/**
 * メニューリストコンポーネント（サンプル表示用）
 */
const MenuList: React.FC = () => {
  return (
    <div>
      {sampleMenuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuList;