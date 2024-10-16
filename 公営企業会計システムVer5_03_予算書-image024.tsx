import React from 'react';
import styled from 'styled-components';

// 各ボタンのProps型定義
type ButtonProps = {
  label: string;
  onClick: () => void;
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイル定義
const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

// 確認ダイアログのProps型定義
type ConfirmDialogProps = {
  title: string;
  value: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// 確認ダイアログコンポーネント
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  value,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <DialogContainer>
      <DialogTitle>{title}</DialogTitle>
      <InputContainer>
        <Input type="text" value={value} readOnly />
      </InputContainer>
      <ButtonContainer>
        <Button label="OK" onClick={onOk} />
        <Button label="クリア" onClick={onClear} />
        <Button label="キャンセル" onClick={onCancel} />
      </ButtonContainer>
    </DialogContainer>
  );
};

// 確認ダイアログのスタイル定義
const DialogContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
`;

const DialogTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

// 使用例
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OKがクリックされました');
  };

  const handleClear = () => {
    console.log('クリアがクリックされました');
  };

  const handleCancel = () => {
    console.log('キャンセルがクリックされました');
  };

  return (
    <ConfirmDialog
      title="上下水道"
      value="3"
      onOk={handleOk}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default App;