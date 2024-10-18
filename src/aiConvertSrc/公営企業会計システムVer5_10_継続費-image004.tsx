import React from 'react';
import styled from '@emotion/styled';

// 型定義
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onAddToCart: () => void;
};

// スタイル定義
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
  margin: 0 0 8px;
  font-size: 18px;
`;

const CardDescription = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
`;

const CardPrice = styled.p`
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onAddToCart }) => {
  // 値が入っていない場合のデフォルト値を設定
  const defaultImageUrl = 'https://via.placeholder.com/300x200';
  const defaultPrice = 0;

  return (
    <CardContainer>
      <CardImage src={imageUrl || defaultImageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>価格: ¥{price || defaultPrice}</CardPrice>
        <AddToCartButton onClick={onAddToCart}>カートに追加</AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};

// 使用例
const App: React.FC = () => {
  // サンプルデータ
  const sampleData = {
    title: '商品名',
    description: '商品の説明文',
    imageUrl: 'https://example.com/image.jpg',
    price: 1000,
  };

  return (
    <div>
      <h1>商品カード</h1>
      <Card
        title={sampleData.title}
        description={sampleData.description}
        imageUrl={sampleData.imageUrl}
        price={sampleData.price}
        onAddToCart={() => console.log('カートに追加')}
      />
    </div>
  );
};

export default App;