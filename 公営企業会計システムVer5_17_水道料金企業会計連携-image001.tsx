import React from 'react';
import styled from '@emotion/styled';

// 定数
const COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
};

// カードコンポーネントのProps型定義
type CardProps = {
  title: string;
  description: string;
  color?: keyof typeof COLORS;
};

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, color = 'light' }) => {
  // colorの値が定義されたCOLORSに含まれない場合はデフォルト値のlightを使用
  const backgroundColor = COLORS[color] || COLORS.light;

  return (
    <CardWrapper backgroundColor={backgroundColor}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

// カードコンポーネントのスタイル定義
const CardWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  
  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

// サンプルデータ
const sampleCards = [
  {
    title: 'Card 1',
    description: 'This is a sample card.',
    color: 'primary',
  },
  {
    title: 'Card 2',
    description: 'Another sample card.',
    color: 'success',
  },
  {
    title: 'Card 3',
    description: 'Yet another sample card.',
  },
];

// サンプル表示用コンポーネント
const SampleCardDisplay: React.FC = () => {
  return (
    <div>
      {sampleCards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} color={card.color} />
      ))}
    </div>
  );
};

export default Card;