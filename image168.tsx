import React from 'react';
import styled from '@emotion/styled';

interface TitleMasterListProps {
  title: string;
  description: string;
  isOpen?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

const TitleMasterList: React.FC<TitleMasterListProps> = ({
  title,
  description,
  isOpen = false,
  onOk,
  onCancel,
}) => {
  return (
    <Container isOpen={isOpen}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div>
      <TitleMasterList
        title="帳票タイトルマスタリスト作成"
        description="帳票タイトルは、年度及び範囲指定の設定がありません。出力される場合には、OKボタンを選択してください。"
        isOpen
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;