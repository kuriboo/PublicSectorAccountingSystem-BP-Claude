import React from 'react';
import styled from '@emotion/styled';

// ボタンの型定義
type ButtonProps = {
  label: string;
  onClick?: () => void;
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイル定義
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// ダイアログの型定義
type DialogProps = {
  title?: string;
  message?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

// ダイアログコンポーネント
const Dialog: React.FC<DialogProps> = ({ title, message, onOk, onCancel, onClose }) => {
  return (
    <DialogOverlay>
      <DialogContent>
        {title && <DialogTitle>{title}</DialogTitle>}
        {message && <DialogMessage>{message}</DialogMessage>}
        <DialogButtons>
          {onOk && <Button label="OK" onClick={onOk} />}
          {onCancel && <Button label="キャンセル" onClick={onCancel} />}
          {onClose && <Button label="閉じる" onClick={onClose} />}
        </DialogButtons>
      </DialogContent>
    </DialogOverlay>
  );
};

// ダイアログのスタイル定義
const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
`;

const DialogTitle = styled.h2`
  margin: 0 0 10px;
`;

const DialogMessage = styled.p`
  margin: 0 0 20px;
`;

const DialogButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// サンプルデータ
const sampleData = {
  title: 'サンプルダイアログ',
  message: 'これはサンプルメッセージです。',
  onOk: () => console.log('OKがクリックされました'),
  onCancel: () => console.log('キャンセルがクリックされました'),
  onClose: () => console.log('閉じるがクリックされました'),
};

// 使用例コンポーネント
const Example: React.FC = () => {
  return (
    <div>
      <Dialog {...sampleData} />
    </div>
  );
};

export default Example;