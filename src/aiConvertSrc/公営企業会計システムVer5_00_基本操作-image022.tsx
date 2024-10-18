import React from 'react';
import styled from 'styled-components';

// MainMenuProps interface defines the properties for the MainMenu component
interface MainMenuProps {
  title?: string;
}

// MainMenu component
const MainMenu: React.FC<MainMenuProps> = ({ title = 'メインメニュー' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>
        会計担当からお知らせ<br />
        今月の会計締処理は〇日(△)となります。伝票提出漏れがないようによろしくお願いいたします。
      </Message>
      <Message>
        管財課からのお知らせ<br />
        電気設備点検を、以下の日程で実施いたします。<br />
        9月2日(土) 本庁舎 3日(日)を予備日とします。
      </Message>
      <ButtonContainer>
        <Button>支払</Button>
        <Button>調定・収納</Button>
        <Button>月例</Button>
      </ButtonContainer>
      <Maintenance>
        <MaintenanceButton>セットアップ</MaintenanceButton>
      </Maintenance>
      <OptionsContainer>
        <Option>固定資産</Option>
        <Option>貯蔵品</Option>
        <Option>工事管理</Option>
        <Option>継続費</Option>
        <Option>契約事務</Option>
        <Option>給排水受付</Option>
        <Option>企業債管理</Option>
      </OptionsContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Maintenance = styled.div`
  margin-bottom: 20px;
`;

const MaintenanceButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const Option = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Sample usage of the MainMenu component
const App: React.FC = () => {
  return (
    <div>
      <MainMenu />
    </div>
  );
};

export default App;