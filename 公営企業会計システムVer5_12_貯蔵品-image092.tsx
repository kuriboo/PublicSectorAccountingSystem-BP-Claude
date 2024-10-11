import React from 'react';
import styled from '@emotion/styled';

type DeleteConfirmationProps = {
  title: string;
  message: string;
  onCancel: () => void;
  onDelete: () => void;
  onClose: () => void;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  title,
  message,
  onCancel,
  onDelete,
  onClose,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>
        {message}
        <Note>注）データの削除が必要な場合は、必ずシステム管理者が責任を持って行ってください。</Note>
      </Message>
      <ButtonArea>
        <Button onClick={onDelete}>削除</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonArea>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  margin-bottom: 20px;
`;

const Note = styled.p`
  font-size: 14px;
  color: #666;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <DeleteConfirmation
      title="貯蔵品不要データ削除"
      message="削除範囲指定"
      onCancel={handleCancel}
      onDelete={handleDelete}
      onClose={handleClose}
    />
  );
};

export default App;