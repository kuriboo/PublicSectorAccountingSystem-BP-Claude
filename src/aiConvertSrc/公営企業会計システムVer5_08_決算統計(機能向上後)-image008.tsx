import React from 'react';
import styled from 'styled-components';

// 貸出対照表コンポーネントのプロパティ型定義
type LoanReferenceProps = {
  authorName: string;
  title: string;
  issueDate: string;
  lendingPeriod: string;
  numberOfBooks: number;
  processingDivision: string;
  readerName: string;
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
};

// 貸出対照表コンポーネント
const LoanReference: React.FC<LoanReferenceProps> = ({
  authorName,
  title,
  issueDate,
  lendingPeriod,
  numberOfBooks,
  processingDivision,
  readerName,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  return (
    <Container>
      <Title>決算統計貸借対照表</Title>
      <Row>
        <Label>作者日</Label>
        <Value>{authorName || '未設定'}</Value>
      </Row>
      <Row>
        <Label>タイトル</Label>
        <Value>{title || '未設定'}</Value>
      </Row>
      <Row>
        <Label>責任者</Label>
        <Value>{issueDate || '未設定'}</Value>
      </Row>
      <Row>
        <Label>開始号</Label>
        <Value>{lendingPeriod || '1'}</Value>
      </Row>
      <ProcessingText>
        決算統計貸借対照表を作成します。
      </ProcessingText>
      <ButtonContainer>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onPrint}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const ProcessingText = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = () => {
    // 送信処理
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  const handlePrint = () => {
    // 印刷処理
  };

  return (
    <LoanReference
      authorName="山田太郎"
      title="決算統計"
      issueDate="2023年6月1日"
      lendingPeriod="1ヶ月"
      numberOfBooks={1}
      processingDivision="総務部"
      readerName="田中花子"
      onSubmit={handleSubmit}
      onCancel={handleCancel}  
      onPrint={handlePrint}
    />
  );
};

export default App;