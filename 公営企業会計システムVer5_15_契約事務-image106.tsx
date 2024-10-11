import React from 'react';
import styled from '@emotion/styled';

// カード全体のスタイル
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
  }
`;

// カードのタイトルスタイル
const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding: 16px;
  margin: 0;
  background-color: #f0f0f0;
`;

// カードの説明文スタイル
const CardDescription = styled.p`
  font-size: 16px;
  padding: 16px;
  margin: 0;
`;

// カードのプロパティ型定義
interface CardProps {
  title: string;
  description: string;
}

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
    </CardWrapper>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData = [
    { title: 'カード1', description: 'これはカード1の説明文です。' },
    { title: 'カード2', description: 'これはカード2の説明文です。' },
    { title: 'カード3', description: 'これはカード3の説明文です。' },
  ];

  return (
    <div>
      {sampleData.map((data, index) => (
        <Card key={index} title={data.title} description={data.description} />
      ))}
    </div>
  );
};

export default App;