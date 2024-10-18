import React from 'react';
import styled from 'styled-components';

// 予定変更確認ダイアログのプロパティ
interface ScheduleChangeConfirmDialogProps {
  message?: string; // 表示メッセージ
  onOk?: () => void; // OKボタンクリック時の処理 
  onCancel?: () => void; // キャンセルボタンクリック時の処理
}

// 予定変更確認ダイアログコンポーネント
const ScheduleChangeConfirmDialog: React.FC<ScheduleChangeConfirmDialogProps> = ({
  message = '変更予定変更は自由行為伺書（一般）',
  onOk = () => {},
  onCancel = () => {},
}) => {
  return (
    <DialogContainer>
      {/* メッセージ */}
      <Message>{message}</Message>

      {/* ボタン */}
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </DialogContainer>
  );
};

// ダイアログのスタイリング
const DialogContainer = styled.div`
  background-color: white;
  border: 1px solid gray;
  padding: 16px;
  width: 300px;
`;

// メッセージのスタイリング
const Message = styled.p`
  margin-bottom: 16px;
`;

// ボタングループのスタイリング
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// ボタンのスタイリング
const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  cursor: pointer;
`;

// サンプル使用例
const SampleUsage: React.FC = () => {
  // OKボタンクリック時の処理
  const handleOk = () => {
    console.log('OK button clicked');
  };

  // キャンセルボタンクリック時の処理  
  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  return (
    <ScheduleChangeConfirmDialog
      message="予定変更を行いますか？"
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;