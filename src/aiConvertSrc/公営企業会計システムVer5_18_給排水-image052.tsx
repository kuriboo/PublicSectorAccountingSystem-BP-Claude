import React from 'react';
import styled from '@emotion/styled';

interface AlertProps {
  /**
   * アラートメッセージ本文
   */
  message?: string;
}

/**
 * 警告アラートを表示するコンポーネント
 */
const Alert: React.FC<AlertProps> = ({ message = '受付番号"16"で、受付登録されています。' }) => {
  return (
    <AlertWrapper>
      <AlertIcon>&#9888;</AlertIcon>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF3CD;
  border: 1px solid #FFEEBA;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  color: #856404;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px;
  }
`;

const AlertIcon = styled.div`
  margin-right: 8px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const AlertMessage = styled.div`
  word-break: break-all;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Alert />
      <Alert message="別のアラートメッセージ" />
    </div>
  );
};

export default App;