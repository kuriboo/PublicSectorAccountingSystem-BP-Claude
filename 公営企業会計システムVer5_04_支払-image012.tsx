import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, icon, color }) => {
  return (
    <CardContainer color={color}>
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

// カードのスタイル定義
const CardContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ color }) => color};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 16px;
  text-align: center;
`;

// 使用例
const Example: React.FC = () => {
  return (
    <div>
      <Card
        title="Card 1"
        description="This is the description for Card 1."
        icon={<span>🌟</span>}
        color="#FFD700"
      />
      <Card
        title="Card 2"
        description="This is the description for Card 2."
        icon={<span>🚀</span>}
        color="#87CEEB"
      />
    </div>
  );
};

export default Example;