import React from 'react';
import styled from 'styled-components';

interface AlertMessageProps {
  message?: string;
}

const AlertMessageWrapper = styled.div`
  background-color: #f0ad4e;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const AlertMessage: React.FC<AlertMessageProps> = ({ message }) => {
  // 表示するメッセージがない場合は何も表示しない
  if (!message) {
    return null;
  }

  return (
    <AlertMessageWrapper>
      {message}
    </AlertMessageWrapper>
  );
};

// サンプルデータを使用した使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <AlertMessage message="認証情報を示す項目が大半度の結果明確ではなかったようですね。" />
      <AlertMessage />
    </div>
  );
};

export default AlertMessage;