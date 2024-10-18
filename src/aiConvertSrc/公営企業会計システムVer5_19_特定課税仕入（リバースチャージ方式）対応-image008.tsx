import React from 'react';
import styled from '@emotion/styled';

// メッセージ表示用のコンポーネント
const MessageBox = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #eee;
  color: #333;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ddd;
  }
`;

interface ConfirmationDialogProps {
  message: string;
  onOk: () => void;
  onCancel?: () => void;
}

// 確認ダイアログのコンポーネント
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ 
  message, 
  onOk,
  onCancel
}) => {
  // メッセージが空の場合のデフォルト値
  const displayMessage = message || '正常に処理されました。';
  
  return (
    <div>
      <MessageBox>{displayMessage}</MessageBox>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        {onCancel && <Button onClick={onCancel}>キャンセル</Button>}
      </ButtonContainer>
    </div>
  );
};

// 使用例
const SampleUsage: React.FC = () => {
  const handleOk = () => {
    console.log('OKがクリックされました');
  };

  const handleCancel = () => {  
    console.log('キャンセルがクリックされました');
  };

  return (
    <div>
      <h2>サンプル</h2>
      <ConfirmationDialog
        message="本当に処理を実行しますか？"
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ConfirmationDialog;