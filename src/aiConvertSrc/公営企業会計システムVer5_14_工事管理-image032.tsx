import React from 'react';
import styled from '@emotion/styled';

type CompletionCheckDialogProps = {
  title: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const Dialog = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 16px;
`;

const Message = styled.p`
  margin: 0 0 16px;
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;
  padding: 6px 12px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompletionCheckDialog: React.FC<CompletionCheckDialogProps> = ({
  title,
  message,
  onOk,
  onCancel,
  onClose,
}) => {
  return (
    <Dialog>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonContainer>
    </Dialog>
  );
};

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    // Handle OK button click
  };

  const handleCancel = () => {
    // Handle Cancel button click
  };

  const handleClose = () => {
    // Handle Close button click
  };

  return (
    <CompletionCheckDialog
      title="完成工事データチェック"
      message={`直営工事及び貸出行為額が全額執行済のデータを対象に完成工事データとして更新します。\n\n更新後、指定年度の全ての工事伝票データを対象とした一覧表を出力します。`}
      onOk={handleOk}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;