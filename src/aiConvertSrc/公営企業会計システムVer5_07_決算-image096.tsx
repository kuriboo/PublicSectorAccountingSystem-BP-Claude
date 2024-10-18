import React from 'react';
import styled from '@emotion/styled';

type DecisionReportFormProps = {
  title: string;
  description: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const DecisionReportForm: React.FC<DecisionReportFormProps> = ({
  title,
  description,
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TextArea placeholder="決算報告書データを作成します" />
      <ButtonGroup>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styling with Emotion
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  margin-bottom: 20px;
  padding: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission logic
  };

  const handleCancel = () => {
    // Handle form cancellation logic
  };

  const handleClose = () => {
    // Handle form closing logic
  };

  return (
    <DecisionReportForm
      title="決算報告書集計処理"
      description="管理者 予算科目登録確認者 さようせい 太郎"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;