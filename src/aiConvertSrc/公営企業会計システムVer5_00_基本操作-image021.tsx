import React from 'react';
import styled from 'styled-components';

// メインメニューのプロパティの型定義
interface MainMenuProps {
  onClose: () => void; // メニューを閉じる関数
}

// メインメニューコンポーネント
const MainMenu: React.FC<MainMenuProps> = ({ onClose }) => {
  return (
    <MenuWrapper>
      <Title>メインメニュー</Title>
      <Description>
        会計担当からお知らせ
        <br />
        今月の会計締処理は〇日(△)となります。伝票提出漏れがないようよろしくお願いいたします。
      </Description>
      <Description>
        管財課からのお知らせ
        <br />
        電気設備点検を、以下の日程で実施いたします。
        <br />
        9月2日(土) 本庁舎 3日(日)を予備日とします。
      </Description>
      <BaseSelect>
        <option>base</option>
      </BaseSelect>
      <ButtonContainer>
        <Button>ログアウト</Button>
        <Button>終了</Button>
      </ButtonContainer>
      <CloseButton onClick={onClose}>閉じる</CloseButton>
    </MenuWrapper>
  );
};

// スタイリング
const MenuWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const BaseSelect = styled.select`
  margin-bottom: 20px;
  padding: 8px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #a71d2a;
  }
`;

// メインメニューの使用例
const App: React.FC = () => {
  const handleClose = () => {
    // メニューを閉じる処理
    console.log('メニューを閉じます');
  };

  return (
    <div>
      <h1>アプリケーション</h1>
      <MainMenu onClose={handleClose} />
    </div>
  );
};

export default App;