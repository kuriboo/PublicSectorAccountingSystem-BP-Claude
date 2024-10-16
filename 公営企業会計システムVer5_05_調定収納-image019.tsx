import React from 'react';
import styled from '@emotion/styled';

type SystemMessageProps = {
  title: string;
  message: string;
  date: string;
  onClose: () => void;
  onOk: () => void;
};

const SystemMessage: React.FC<SystemMessageProps> = ({ title, message, date, onClose, onOk }) => {
  return (
    <Container>
      {/* ヘッダー */}
      <Header>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
      </Header>

      {/* メッセージ */}
      <Message>{message}</Message>

      {/* ボタン */}
      <ButtonContainer>
        <Button onClick={onClose}>閉じる</Button>
        <Button primary onClick={onOk}>
          終了
        </Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const DateText = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
`;

const Message = styled.p`
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  border: 1px solid ${({ primary }) => (primary ? '#007bff' : '#ccc')};
  border-radius: 4px;
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }
`;

// 使用例
const App: React.FC = () => {
  const handleClose = () => {
    console.log('Close button clicked');
  };

  const handleOk = () => {
    console.log('OK button clicked');
  };

  return (
    <SystemMessage
      title="調定収納データー抽出録"
      message="水道料金システムから出力したCSVファイルを参照し、調定収納データーを一括登録します。参照ボタンを押し、CSVファイルを選択してください。"
      date="平成29年06月21日"
      onClose={handleClose}
      onOk={handleOk}
    />
  );
};

export default App;