import React, { useState } from 'react';
import styled from 'styled-components';

// マスタリスト作成画面のプロパティ定義
interface MasterListProps {
  title: string;
  onSubmit: (apGroupCode: string) => void;
}

// マスタリスト作成画面のコンポーネント
const MasterList: React.FC<MasterListProps> = ({ title, onSubmit }) => {
  const [apGroupCode, setApGroupCode] = useState('');

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(apGroupCode);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          APグループコード
          <Input
            type="text"
            value={apGroupCode}
            onChange={(e) => setApGroupCode(e.target.value)}
            required
            pattern="\d{9}"
            title="9桁の数字を入力してください"
          />
        </Label>
        <ButtonContainer>
          <Button type="submit">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

// スタイルコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (apGroupCode: string) => {
    console.log('Submitted AP Group Code:', apGroupCode);
    // 送信処理等を実装
  };

  return (
    <MasterList
      title="アプリケーションマスタリスト作成"
      onSubmit={handleSubmit}
    />
  );
};

export default MasterList;