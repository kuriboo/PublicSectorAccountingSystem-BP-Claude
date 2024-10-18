import React from 'react';
import styled from '@emotion/styled';

type RequestType = '口座振替FD初期処理' | '口座振替データ作成' | '口座振替中止依頼票' | '口座振替データ一覧リスト' | '通知依頼別一覧表' | '会計速度データ出力';

type MenuItemProps = {
  label: RequestType;
  onClick: () => void;
};

const MenuItemWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return <MenuItemWrapper onClick={onClick}>{label}</MenuItemWrapper>;
};

type RequestMenuProps = {
  onMenuItemClick: (requestType: RequestType) => void;
};

const RequestMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const RequestMenu: React.FC<RequestMenuProps> = ({ onMenuItemClick }) => {
  const menuItems: RequestType[] = [
    '口座振替FD初期処理',
    '口座振替データ作成',
    '口座振替中止依頼票',
    '口座振替データ一覧リスト',
    '通知依頼別一覧表',
    '会計速度データ出力',
  ];

  return (
    <RequestMenuWrapper>
      {menuItems.map((item, index) => (
        <MenuItem key={index} label={item} onClick={() => onMenuItemClick(item)} />
      ))}
    </RequestMenuWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleMenuItemClick = (requestType: RequestType) => {
    console.log(`Clicked menu item: ${requestType}`);
    // Perform action based on the selected request type
  };

  return (
    <div>
      <h1>請求</h1>
      <RequestMenu onMenuItemClick={handleMenuItemClick} />
    </div>
  );
};

export default App;