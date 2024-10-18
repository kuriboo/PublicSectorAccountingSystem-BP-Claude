以下は、指定された要件に基づいて生成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

interface ErrorProps {
  title?: string;
  message?: string;
  details?: string;
  onClose?: () => void;
}

const ErrorContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

const ErrorDetails = styled.pre`
  font-size: 12px;
  white-space: pre-wrap;
  margin-bottom: 8px;
`;

const CloseButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const Error: React.FC<ErrorProps> = ({ title = 'システムエラー', message = 'エラーが発生しました', details, onClose }) => {
  return (
    <ErrorContainer>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      {details && <ErrorDetails>{details}</ErrorDetails>}
      {onClose && <CloseButton onClick={onClose}>閉鎖</CloseButton>}
    </ErrorContainer>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleError: React.FC = () => {
  const sampleData: ErrorProps = {
    title: 'システムエラーが発生しました',
    message: '例外が発生しました: java.lang.NullPointerException (120:29)',
    details: `発生箇所:
http://192.168.3.115/crs/crscom/comSQL.crs`,
    onClose: () => console.log('Error closed'),
  };

  return <Error {...sampleData} />;
};

export default Error;