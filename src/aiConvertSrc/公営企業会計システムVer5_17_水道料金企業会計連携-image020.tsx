import React from 'react';
import styled from '@emotion/styled';

interface MenuItemProps {
  title: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onClick }) => {
  return <StyledMenuItem onClick={onClick}>{title}</StyledMenuItem>;
};

const StyledMenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

interface SubMenuProps {
  title: string;
  items: { title: string; onClick: () => void }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ title, items }) => {
  return (
    <StyledSubMenu>
      <SubMenuTitle>{title}</SubMenuTitle>
      {items.map((item, index) => (
        <MenuItem key={index} title={item.title} onClick={item.onClick} />
      ))}
    </StyledSubMenu>
  );
};

const StyledSubMenu = styled.div`
  margin-bottom: 16px;
`;

const SubMenuTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

interface MenuProps {
  items: { title: string; onClick: () => void }[];
  subMenus: { title: string; items: { title: string; onClick: () => void }[] }[];
}

const Menu: React.FC<MenuProps> = ({ items, subMenus }) => {
  return (
    <StyledMenu>
      {items.map((item, index) => (
        <MenuItem key={index} title={item.title} onClick={item.onClick} />
      ))}
      {subMenus.map((subMenu, index) => (
        <SubMenu key={index} title={subMenu.title} items={subMenu.items} />
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Usage example
const App: React.FC = () => {
  const menuItems = [
    { title: '口座振替手続一覧表', onClick: () => console.log('Clicked 口座振替手続一覧表') },
    { title: '社会保険手続一覧表', onClick: () => console.log('Clicked 社会保険手続一覧表') },
    { title: '諸届CD別口座月次集計表', onClick: () => console.log('Clicked 諸届CD別口座月次集計表') },
    { title: '口座月次集計表', onClick: () => console.log('Clicked 口座月次集計表') },
    { title: '下水道・日計', onClick: () => console.log('Clicked 下水道・日計') },
    { title: 'ログアウト', onClick: () => console.log('Clicked ログアウト') },
  ];

  const subMenus = [
    {
      title: '上水道・日計',
      items: [
        { title: '日次月次集計表', onClick: () => console.log('Clicked 日次月次集計表') },
        { title: '用途別日次月次集計表', onClick: () => console.log('Clicked 用途別日次月次集計表') }, 
        { title: '諸届CD別日次月次集計表', onClick: () => console.log('Clicked 諸届CD別日次月次集計表') },
        { title: '口座月次集計表', onClick: () => console.log('Clicked 口座月次集計表') },
        { title: '諸届別口次月次集計表', onClick: () => console.log('Clicked 諸届別口次月次集計表') },  
        { title: '収納日別個人の内訳', onClick: () => console.log('Clicked 収納日別個人の内訳') },
      ],
    },
    {  
      title: '下水道・日計',
      items: [
        { title: '日次月次集計表', onClick: () => console.log('Clicked 下水道・日計 日次月次集計表') },
        { title: '用途別日次月次集計表', onClick: () => console.log('Clicked 下水道・日計 用途別日次月次集計表') },
        { title: '諸届CD別日次月次集計表', onClick: () => console.log('Clicked 下水道・日計 諸届CD別日次月次集計表') },  
        { title: '口座月次集計表', onClick: () => console.log('Clicked 下水道・日計 口座月次集計表') },
        { title: '諸届別口次月次集計表', onClick: () => console.log('Clicked 下水道・日計 諸届別口次月次集計表') },
        { title: '収納日別個人の内訳表', onClick: () => console.log('Clicked 下水道・日計 収納日別個人の内訳表') },
      ],
    },
  ];

  return <Menu items={menuItems} subMenus={subMenus} />;
};

export default App;