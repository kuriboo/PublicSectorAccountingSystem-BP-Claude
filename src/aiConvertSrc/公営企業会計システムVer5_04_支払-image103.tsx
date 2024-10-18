import React from 'react';
import styled from 'styled-components';

// 定義されたプロパティの型
interface PrintSettingsProps {
  copies?: number;
  doubleSided?: boolean;
  combine?: boolean;
  booklet?: boolean;
}

// コンポーネントの定義
const PrintSettings: React.FC<PrintSettingsProps> = ({
  copies = 1,
  doubleSided = false,
  combine = true,
  booklet = true,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <SettingList>
        <SettingItem>
          <input type="checkbox" checked={doubleSided} readOnly />
          <label>帳票兼命令書(その他 B／S)</label>
        </SettingItem>
        <SettingItem>
          <input type="checkbox" />
          <label>支払通知書</label>
        </SettingItem>
        <SettingItem>
          <input type="checkbox" checked={combine} readOnly />
          <label>支払負担行為同書(その他 前渡)</label>
        </SettingItem>
        <SettingItem>
          <input type="checkbox" checked={booklet} readOnly />
          <label>債権者一覧</label>
        </SettingItem>
      </SettingList>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリングの定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 300px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const SettingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SettingItem = styled.li`
  margin-bottom: 8px;

  label {
    margin-left: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>印刷設定画面</h1>
      <PrintSettings />
    </div>
  );
};

export default App;