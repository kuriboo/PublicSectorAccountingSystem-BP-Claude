import React from 'react';
import styled from '@emotion/styled';

// Cardコンポーネントの型定義
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

// Cardコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, url }) => {
  return (
    <CardWrapper href={url} target="_blank" rel="noopener noreferrer">
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

// スタイリング用のコンポーネント
const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #666;
`;

// サンプルデータ
const sampleData = [
  {
    title: 'Sample Card 1',
    description: 'This is a sample card description.',
    imageUrl: 'https://example.com/image1.jpg',
    url: 'https://example.com/link1',
  },
  {
    title: 'Sample Card 2',
    description: 'This is another sample card description.',
    imageUrl: 'https://example.com/image2.jpg',
    url: 'https://example.com/link2',
  },
];

// サンプル表示用コンポーネント
const SampleCardList: React.FC = () => {
  return (
    <div>
      {sampleData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default Card;