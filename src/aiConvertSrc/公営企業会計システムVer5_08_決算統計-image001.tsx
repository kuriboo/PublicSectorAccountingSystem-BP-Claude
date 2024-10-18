import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  onBuyClick: () => void;
}

// スタイリング
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;

  @media (max-width: 480px) {
    width: 100%;
    margin: 16px 0;
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
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 0 0 16px;
`;

const CardPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, image, price, onBuyClick }) => {
  return (
    <CardContainer>
      {image && <CardImage src={image} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>価格: ¥{price}</CardPrice>
        <BuyButton onClick={onBuyClick}>購入する</BuyButton>
      </CardContent>
    </CardContainer>
  );
};

// サンプルデータ
const sampleData = {
  title: 'サンプル商品',
  description: 'これはサンプル商品の説明です。',
  image: 'https://example.com/sample-image.jpg',
  price: 1000,
};

// 使用例コンポーネント
const SampleUsage: React.FC = () => {
  const handleBuyClick = () => {
    console.log('購入ボタンがクリックされました');
  };

  return (
    <div>
      <h2>カードコンポーネントの使用例</h2>
      <Card
        title={sampleData.title}
        description={sampleData.description}
        image={sampleData.image}
        price={sampleData.price}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
};

export default Card;