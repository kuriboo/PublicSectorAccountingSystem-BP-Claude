import React from 'react';

import { FC } from 'react';
import styled from '@emotion/styled';

// カードコンポーネントの型定義
interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

// カードコンポーネント
const Card: FC<CardProps> = ({ title, description, image, price }) => {
  return (
    <CardWrapper>
      {/* 画像 */}
      <CardImage src={image} alt={title} />
      
      <CardContent>
        {/* タイトル */}
        <CardTitle>{title || 'タイトルなし'}</CardTitle>
        
        {/* 説明文 */}
        <CardDescription>{description || '説明文なし'}</CardDescription>
        
        {/* 価格 */}
        <CardPrice>¥{price ? price.toLocaleString() : '価格未設定'}</CardPrice>
      </CardContent>
    </CardWrapper>
  );
};

// サンプルデータ
const sampleData: CardProps = {
  title: '絵葉書',
  description: 'きょうしえいです',
  image: 'sample.jpg',
  price: 100,
};

// 使用例
const App: FC = () => {
  return (
    <div>
      <h1>カードコンポーネントの使用例</h1>
      <Card {...sampleData} />
    </div>
  );
};

// スタイリング
const CardWrapper = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #f00;
`;

export default Card;