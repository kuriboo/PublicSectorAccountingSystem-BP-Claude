import React from 'react';
import styled from 'styled-components';

// MenuProps型定義
type MenuProps = {
  /** メニュー項目の文字列の配列 */
  items: string[];
  /** メニューの位置（left, center, right）*/
  align?: 'left' | 'center' | 'right';
};

// メニューコンポーネント
const Menu: React.FC<MenuProps> = ({ items, align = 'left' }) => {
  // itemsが空の場合はnullを返す
  if (items.length === 0) {
    return null;
  }

  return (
    <MenuWrapper align={align}>
      {items.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </MenuWrapper>
  );
};

// メニューのスタイル
const MenuWrapper = styled.ul<{ align: 'left' | 'center' | 'right' }>`
  display: flex;
  justify-content: ${({ align }) => {
    if (align === 'left') return 'flex-start';
    if (align === 'center') return 'center';
    if (align === 'right') return 'flex-end';
  }};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;
  font-size: 18px;
  white-space: nowrap;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

// サンプルデータ
const sampleMenuItems = ['メニュー1', 'メニュー2', 'メニュー3', 'メニュー4'];

// サンプル表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>左寄せメニュー</h2>
      <Menu items={sampleMenuItems} align="left" />

      <h2>中央寄せメニュー</h2>  
      <Menu items={sampleMenuItems} align="center" />

      <h2>右寄せメニュー</h2>
      <Menu items={sampleMenuItems} align="right" />

      <h2>空のメニュー</h2>
      <Menu items={[]} />
    </div>
  );
};

export default App;