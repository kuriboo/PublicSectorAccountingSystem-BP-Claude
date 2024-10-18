import React from 'react';
import styled from '@emotion/styled';

// Cardコンポーネントの型定義
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

// Cardコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>¥{price.toLocaleString()}</CardPrice>
      </CardContent>
    </CardContainer>
  );
};

// Cardコンポーネントのスタイリング
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

// サンプルデータ
const sampleData: CardProps = {
  title: 'Sample Product',
  description: 'This is a sample product description.',
  imageUrl: 'https://example.com/sample-image.jpg',
  price: 9800,
};

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>Product Card</h1>
      <Card {...sampleData} />
    </div>
  );
};

export default App;