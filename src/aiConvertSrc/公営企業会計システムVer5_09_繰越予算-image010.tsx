import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティ型定義
type CardProps = {
  title?: string;
  description?: string;
};

// カードのスタイル定義
const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// カードコンポーネントの実装
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
    </CardWrapper>
  );
};

// サンプルデータ
const sampleCards = [
  {
    title: '絹ごし豆腐',
    description: 'しっとりとした食感が特徴の豆腐です。',
  },
  {
    title: '木綿豆腐',
    description: 'ふわっとした食感が楽しめる豆腐です。',
  },
];

// カードリストコンポーネントの実装
const CardList: React.FC = () => {
  return (
    <div>
      {sampleCards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;