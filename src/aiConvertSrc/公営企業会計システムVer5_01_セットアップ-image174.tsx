import React from 'react';
import styled from '@emotion/styled';

// 型定義
type ApplicationMasterListProps = {
  applicationCode?: string;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  color: #555;
`;

const Input = styled.input`
  width: 200px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

// コンポーネント
const ApplicationMasterList: React.FC<ApplicationMasterListProps> = ({ applicationCode = '' }) => {
  return (
    <Container>
      <Title>アプリケーションマスタリスト作成</Title>
      <Form>
        <Label htmlFor="applicationCode">範囲指定</Label>
        <Input
          type="text"
          id="applicationCode"
          value={applicationCode}
          placeholder="00000000 〜 99999999"
        />
        <ButtonContainer>
          <button type="button">OK</button>
          <button type="button">クリア</button>
          <button type="button">終了</button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};


// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>アプリケーション</h1>
      <ApplicationMasterList applicationCode="12345678" />
    </div>
  );
};

export default App;