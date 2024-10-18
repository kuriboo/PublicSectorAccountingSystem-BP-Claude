import React from 'react';
import styled from '@emotion/styled';

type ConfirmationDialogProps = {
  title: string;
  message: string;
  collectDate: string;
  onOk: () => void;
  onCancel: () => void;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  message,
  collectDate,
  onOk,
  onCancel,
}) => {
  return (
    <DialogWrapper>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Message>{message}</Message>
        <CollectDate>集計日時　{collectDate}</CollectDate>
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={onCancel}>終了</CancelButton>
        <OkButton onClick={onOk}>OK</OkButton>
      </DialogActions>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  width: 300px;
`;

const DialogTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DialogContent = styled.div`
  margin-bottom: 16px;
`;

const Message = styled.p`
  white-space: pre-wrap;
`;

const CollectDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin-left: 8px;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <ConfirmationDialog
      title="経営分析表集計処理"
      message="経営分析表データを作成します。"
      collectDate="平成29年09月04日"
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default App;