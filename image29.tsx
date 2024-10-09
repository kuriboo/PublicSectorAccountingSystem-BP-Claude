import React from 'react';

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="bg-blue-500 p-4">
      <h2 className="text-white text-lg font-bold mb-4">月例メニュー</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-white hover:underline">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SampleMenu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: '消費税申告書', link: '#' },
    { label: '決算書作成', link: '#' },
    { label: '消費税額計算', link: '#' },
    { label: '月次決算', link: '#' },
    { label: '税金シミュレーション', link: '#' },
  ];

  return <Menu items={menuItems} />;
};

export default SampleMenu;

// コンポーネントの説明:
// - MenuPropsインターフェースでitemsプロパティを定義し、MenuItemの配列を受け取る
// - Menuコンポーネントは、itemsプロパティからメニュー項目を動的に生成
// - メニュー項目のラベルとリンクはMenuItemインターフェースで定義
// - Tailwind CSSを使用してスタイリング
// - SampleMenuコンポーネントでサンプルデータを使用して、Menuコンポーネントを表示