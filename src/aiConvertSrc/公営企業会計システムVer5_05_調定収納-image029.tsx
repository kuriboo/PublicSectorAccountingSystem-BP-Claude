import React from 'react';
import styled from '@emotion/styled';

interface ProductCardProps {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
  productRating: number;
}

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 16px 0 8px;
  font-size: 18px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const ProductPrice = styled.p`
  margin: 16px 0;
  font-size: 16px;
  font-weight: bold;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingStar = styled.span`
  color: #f8ce0b;
  font-size: 18px;
  margin-right: 4px;
`;

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productDescription,
  productPrice,
  productImage,
  productRating,
}) => {
  // 例外処理: 必須プロパティのチェック
  if (!productName || !productDescription || !productPrice || !productImage) {
    throw new Error('Missing required props for ProductCard');
  }

  // 例外処理: 評価の範囲チェック（1〜5）
  if (productRating < 1 || productRating > 5) {
    throw new Error('Invalid product rating. Rating should be between 1 and 5.');
  }

  // 評価の星を生成
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < productRating; i++) {
      stars.push(<RatingStar key={i}>★</RatingStar>);
    }
    return stars;
  };

  return (
    <ProductCardContainer>
      <ProductImage src={productImage} alt={productName} />
      <ProductName>{productName}</ProductName>
      <ProductDescription>{productDescription}</ProductDescription>
      <ProductPrice>¥{productPrice.toLocaleString()}</ProductPrice>
      <RatingContainer>{renderRatingStars()}</RatingContainer>
    </ProductCardContainer>
  );
};

// 使用例
const SampleProductCard = () => {
  const sampleProduct = {
    productName: 'Sample Product',
    productDescription: 'This is a sample product description.',
    productPrice: 9999,
    productImage: 'https://example.com/sample-product.jpg',
    productRating: 4,
  };

  return <ProductCard {...sampleProduct} />;
};

export default ProductCard;