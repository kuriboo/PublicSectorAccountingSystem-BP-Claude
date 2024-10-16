import React from 'react';
import styled from '@emotion/styled';

// エラーメッセージのスタイルを定義
const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
  color: #ff0000;
`;

// エラーメッセージのアイコンのスタイルを定義
const ErrorIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  font-size: 20px;
`;

// エラーメッセージのプロパティの型を定義
type ErrorMessageProps = {
  message: string;
};

// エラーメッセージのコンポーネントを定義
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  // メッセージが空の場合はnullを返す
  if (!message) return null;

  return (
    <ErrorMessageWrapper>
      <ErrorIcon>⚠️</ErrorIcon>
      {message}
    </ErrorMessageWrapper>
  );
};

// エラーメッセージのサンプルデータ
const sampleMessage = '正常に処理されませんでした。';

// エラーメッセージのコンポーネントの使用例
const ErrorMessageExample: React.FC = () => {
  return (
    <div style={{ width: 400, height: 200 }}>
      <ErrorMessage message={sampleMessage} />
    </div>
  );
};

export default ErrorMessage;