import React from 'react';
import styled from '@emotion/styled';

type MessageProps = {
  message: string;
  onCancel?: () => void;
};

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MessageBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MessageComponent: React.FC<MessageProps> = ({ message, onCancel }) => {
  return (
    <MessageWrapper>
      <MessageBox>
        <Message>{message}</Message>
        {onCancel && <CancelButton onClick={onCancel}>キャンセル</CancelButton>}
      </MessageBox>
    </MessageWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleCancel = () => {
    // Handle cancel logic
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>Message Component Example</h1>
      <MessageComponent
        message="読み取りに失敗してください。"
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;