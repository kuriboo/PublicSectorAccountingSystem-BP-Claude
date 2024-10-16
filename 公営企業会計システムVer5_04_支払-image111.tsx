import React from 'react';
import styled from 'styled-components';

// 型定義
type AlertProps = {
  message: string;
  onClose?: () => void;
};

// アラートコンポーネント
const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  // メッセージが空の場合はnullを返す
  if (!message) return null;

  return (
    <AlertWrapper>
      <Message>{message}</Message>
      {onClose && <CloseButton onClick={onClose}>OK</CloseButton>}
    </AlertWrapper>
  );
};

// アラートのスタイル
const AlertWrapper = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Message = styled.p`
  margin: 0;
  font-size: 16px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

// 使用例
const AlertExample: React.FC = () => {
  const [showAlert, setShowAlert] = React.useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <h1>アラートの使用例</h1>
      {showAlert && (
        <Alert
          message="指輪伝票が処理されていません。"
          onClose={handleCloseAlert}
        />
      )}
      <p>その他のコンテンツ...</p>
    </div>
  );
};

export default AlertExample;