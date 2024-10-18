import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onBuyClick: () => void;
}

// カードのスタイル定義
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
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// カードコンポーネントの定義
const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onBuyClick }) => {
  // 値が入っていない場合の例外処理
  if (!title || !description || !imageUrl || !price) {
    return null;
  }

  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>${price.toFixed(2)}</CardPrice>
        <BuyButton onClick={onBuyClick}>Buy</BuyButton>
      </CardContent>
    </CardContainer>
  );
};

// サンプルデータ
const sampleData = {
  title: 'Sample Product',
  description: 'This is a sample product description.',
  imageUrl: 'https://example.com/sample-image.jpg',
  price: 19.99,
};

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  const handleBuyClick = () => {
    console.log('Buy button clicked');
  };

  return (
    <div>
      <h2>Sample Component</h2>
      <Card
        title={sampleData.title}
        description={sampleData.description}
        imageUrl={sampleData.imageUrl}
        price={sampleData.price}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
};

export default Card;