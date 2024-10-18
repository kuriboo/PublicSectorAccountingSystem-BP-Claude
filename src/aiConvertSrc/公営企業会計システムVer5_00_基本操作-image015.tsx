import React from 'react';
import styled from '@emotion/styled';

type AlertProps = {
  /** アラートメッセージ */
  message: string;
};

const AlertWrapper = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  color: #856404;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Alert: React.FC<AlertProps> = ({ message }) => {
  // メッセージが空の場合は何も表示しない
  if (!message) {
    return null;
  }

  return <AlertWrapper>{message}</AlertWrapper>;
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <Alert message="新パスワードを設定いただき、再入力してください。" />
      <Alert message="" />
    </div>
  );
};

export default SampleUsage;