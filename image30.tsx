import React from 'react';
import styled from '@emotion/styled';

// 警告メッセージのスタイルを定義
const AlertWrapper = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  color: #856404;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const AlertIcon = styled.span`
  font-size: 24px;
  margin-right: 15px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const AlertMessage = styled.div`
  flex: 1;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// 警告メッセージのプロパティを定義
type AlertProps = {
  message: string;
  icon?: string;
};

// 警告メッセージコンポーネントを実装
const Alert: React.FC<AlertProps> = ({ message, icon = '⚠️' }) => {
  // メッセージが空の場合は何も表示しない
  if (!message) {
    return null;
  }

  return (
    <AlertWrapper>
      <AlertIcon>{icon}</AlertIcon>
      <AlertMessage>{message}</AlertMessage>
    </AlertWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <Alert message="調査番号 '10' で、納入通知書登録されました。" />
      <Alert message="" /> {/* 空のメッセージの場合は表示されない */}
    </div>
  );
};

export default Alert;