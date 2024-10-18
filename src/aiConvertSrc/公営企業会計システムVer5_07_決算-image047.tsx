import React from 'react';
import styled from '@emotion/styled';

// サンプルデータ
const sampleData = {
  title: 'タイトル',
  description: '説明文が入ります。説明文が入ります。説明文が入ります。',
};

// コンポーネントのProps型定義
type CardProps = {
  title?: string;
  description?: string;
};

// カードのスタイル定義
const CardWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description }) => {
  // タイトルが未指定の場合はデフォルトのタイトルを使用
  const cardTitle = title || 'デフォルトのタイトル';
  
  return (
    <CardWrapper>
      <CardTitle>{cardTitle}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardWrapper>
  );
};

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <Card title={sampleData.title} description={sampleData.description} />
      <Card title="タイトル2" />
      <Card description="説明文のみのカード" />
    </div>
  );
};

export default App;