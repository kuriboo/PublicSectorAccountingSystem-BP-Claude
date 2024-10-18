// MainMenu.tsx
import React from 'react';
import styled from '@emotion/styled';

type Props = {
  onBaseClick?: () => void;
  onMaintenanceClick?: () => void;
};

const MainMenu: React.FC<Props> = ({ onBaseClick, onMaintenanceClick }) => {
  return (
    <Container>
      <Title>メインメニュー</Title>
      <Description>
        会計担当からお知らせ
        今月の会計締処理は〇日(△)となります。伝票提出漏れがないようよろしくお願いいたします。
      </Description>
      <MenuGrid>
        <MenuItem onClick={onBaseClick}>
          <MenuLabel>base</MenuLabel>
          <SubMenuGrid>
            <SubMenuItem>支払</SubMenuItem>
            <SubMenuItem>予算</SubMenuItem>
            <SubMenuItem>決算</SubMenuItem>
          </SubMenuGrid>
        </MenuItem>
        <MenuItem onClick={onMaintenanceClick}>
          <MenuLabel>maintenance</MenuLabel>
          <MaintenanceMenuItem>セットアップ</MaintenanceMenuItem>
        </MenuItem>
      </MenuGrid>
      <Footer>
        <FooterItem>ログアウト</FooterItem>
        <FooterItem>行政市事業会計</FooterItem>
        <FooterItem>接続中野</FooterItem>
        <FooterItem>PW変更</FooterItem>
        <FooterItem>予知っ仕登録</FooterItem>
        <FooterItem>共有</FooterItem>
        <FooterItem>ツール</FooterItem>
      </Footer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.p`
  white-space: pre-wrap;
  margin-bottom: 20px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  background-color: white;
  padding: 20px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 10px;
`;

const SubMenuItem = styled.div`
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
`;

const MaintenanceMenuItem = styled(SubMenuItem)`
  grid-column: 1 / -1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const FooterItem = styled.div`
  background-color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

// Example usage
const ExampleMainMenu: React.FC = () => {
  const handleBaseClick = () => {
    console.log('Base clicked');
  };

  const handleMaintenanceClick = () => {
    console.log('Maintenance clicked');
  };

  return (
    <MainMenu
      onBaseClick={handleBaseClick}
      onMaintenanceClick={handleMaintenanceClick}
    />
  );
};

export default MainMenu;