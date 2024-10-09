import React from 'react';

type MenuItem = {
  label: string;
  link: string;
};

type MenuProps = {
  items: MenuItem[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="bg-blue-500 p-4">
      <h2 className="text-white text-2xl mb-4">月例メニュー</h2>
      <div className="bg-white p-4 rounded-md">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block py-2 px-4 hover:bg-gray-100"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const SampleMenu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: '消費税申告', link: '/tax-return' },
    { label: '予定納税申告', link: '/tax-payment' },
    { label: '販売・仕入', link: '/sales-purchases' },
    { label: '決算申告', link: '/annual-return' },
    { label: '法定調書', link: '/legal-documents' },
    { label: '消費税システム設定', link: '/tax-settings' },
  ];

  return <Menu items={menuItems} />;
};

export default SampleMenu;