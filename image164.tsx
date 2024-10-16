import React from 'react';
import styled from '@emotion/styled';

interface StoreInfoProps {
  storeName?: string;
  storeAddress?: string;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ storeName = '', storeAddress = '' }) => {
  return (
    <Container>
      <Header>
        <HeaderText>編集</HeaderText>
        <HeaderText>行削除</HeaderText>
      </Header>
      <Content>
        <Row>
          <Cell width={20}>No</Cell>
          <Cell width={80}>名称</Cell>
        </Row>
        <Row>
          <Cell width={20}>1</Cell>
          <Cell width={80}>{storeName || 'ぎょうせい銀行 市役所支店'}</Cell>
        </Row>
      </Content>
      <InputContainer>
        <Input value={storeAddress || 'ぎょうせい銀行 市役所支店'} readOnly />
        <Button>行確定</Button>
      </InputContainer>
      <Footer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>キャンセル</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Meiryo', sans-serif;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const HeaderText = styled.span`
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  background-color: white;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const Cell = styled.div<{ width: number }>`
  box-sizing: border-box;
  width: ${({ width }) => width}%;
  padding: 4px;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 4px 8px;
  background-color: ${({ primary }) => (primary ? '#4CAF50' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  > button {
    margin-left: 8px;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Store Info</h1>
      <StoreInfo storeName="ABC Bank" storeAddress="123 Main St, City" />
    </div>
  );
};

export default App;