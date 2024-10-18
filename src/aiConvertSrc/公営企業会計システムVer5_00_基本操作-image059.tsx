import React from 'react';
import styled from 'styled-components';

// 出力プロパティの型定義
interface OutputProps {
  text: string;
}

// 出力コンポーネント
const Output: React.FC<OutputProps> = ({ text }) => {
  return <OutputText>{text}</OutputText>;
};

// 出力のスタイル
const OutputText = styled.div`
  margin-bottom: 10px;
`;

// ボタンプロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// ボタンコンポーネント 
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイル
const StyledButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// ダイアログプロパティの型定義
interface DialogProps {
  title: string;
  message: string;
  okLabel?: string;
  cancelLabel?: string;
  onOk: () => void;
  onCancel: () => void;
}

// ダイアログコンポーネント
const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  okLabel = 'OK',
  cancelLabel = 'キャンセル',
  onOk,
  onCancel,
}) => {
  return (
    <DialogWrapper>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <Output text={message} />
        <DialogButtons>
          <Button label={okLabel} onClick={onOk} />
          <Button label={cancelLabel} onClick={onCancel} />
        </DialogButtons>
      </DialogContent>
    </DialogWrapper>
  );
};

// ダイアログのスタイル
const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 300px;

  @media (max-width: 600px) {
    min-width: 80%;
  }
`;

const DialogTitle = styled.h2`
  margin-top: 0;
`;

const DialogButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  > button {
    margin-left: 10px;
  }
`;

// サンプルデータを用いたダイアログの使用例
const SampleDialog = () => {
  return (
    <Dialog
      title="EXCEL出力"
      message="検索条件シートのあり・なし"
      okLabel="OK"
      cancelLabel="キャンセル"
      onOk={() => console.log('OKがクリックされました')}
      onCancel={() => console.log('キャンセルがクリックされました')}
    />
  );
};

export default SampleDialog;