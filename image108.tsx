import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

// スタイル定義
const Card = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: calc(50% - 16px);
    margin-right: 16px;
  }

  @media (min-width: 1024px) {
    width: calc(33.33% - 16px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #f60;
`;

// 商品カードコンポーネント
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <Card>
      {imageUrl && <ProductImage src={imageUrl} alt={title} />}
      <ProductTitle>{title || 'タイトルなし'}</ProductTitle>
      <ProductDescription>{description || '説明文なし'}</ProductDescription>
      <ProductPrice>¥{price ? price.toLocaleString() : '0'}</ProductPrice>
    </Card>
  );
};

// サンプルデータ
const sampleProducts = [
  {
    imageUrl: 'https://example.com/product1.jpg',
    title: '商品1',
    description: 'これは商品1の説明文です。',
    price: 1000,
  },
  {
    imageUrl: 'https://example.com/product2.jpg',  
    title: '商品2',
    description: 'これは商品2の説明文です。',
    price: 2000,
  },
  {
    title: '商品3',
    description: 'これは商品3の説明文です。',
    price: 3000,
  },
];

// 表示用コンポーネント
const ProductList: React.FC = () => {
  return (
    <div>
      {sampleProducts.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;