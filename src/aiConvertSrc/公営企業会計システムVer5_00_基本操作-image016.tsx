// MainMenu.tsx
import React from 'react';
import styled from '@emotion/styled';

interface MainMenuProps {
  logoutDate?: string;
  adminMode?: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ logoutDate, adminMode = false }) => {
  return (
    <MenuContainer>
      <MenuTitle>メインメニュー</MenuTitle>
      <MenuDescription>
        {adminMode ? (
          <>
            会計担当からお知らせ
            <br />
            今月の会計締処理は〇月(△)となります。伝票提出漏れがないようよろしくお願いいたします。
          </>
        ) : (
          <>
            管財課からのお知らせ
            <br />
            電気設備点検を 以下の日程で実施いたします。
            <br />
            9月2日(土) 本庁舎 3日(日)を予備日とします。
          </>
        )}
      </MenuDescription>
      {logoutDate && <LogoutDate>ログアウト: {logoutDate}</LogoutDate>}
      <ButtonContainer>
        <Button>ロックアウト</Button>
        <Button primary>行政市事業会計</Button>
        <Button>高原地区 管理者</Button>
        <Button>行政 大郎</Button>
      </ButtonContainer>
      <Footer>
        <CommentButton>お知らせ登録</CommentButton>
        <ShareButton>さらに</ShareButton>
      </Footer>
    </MenuContainer>
  );
};

// Styles
const MenuContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  border: 1px solid #ccc;
`;

const MenuTitle = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 8px;
`;

const MenuDescription = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const LogoutDate = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 12px;
  cursor: pointer;
`;

const ShareButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 12px;
  cursor: pointer;
`;

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <MainMenu logoutDate="2023/06/01" />
      <MainMenu adminMode />
    </div>
  );
};

export default App;