import React from 'react';
import styled from '@emotion/styled';

// Card component props
interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  onAddToCart: () => void;
}

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
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

const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Card component
const Card: React.FC<CardProps> = ({ title, description, image, price, onAddToCart }) => {
  // Handle missing data
  const displayTitle = title || 'Unknown Product';
  const displayDescription = description || 'No description available';
  const displayImage = image || 'https://via.placeholder.com/300x200?text=No+Image';
  const displayPrice = price ? `$${price.toFixed(2)}` : 'Price not available';

  return (
    <CardContainer>
      <CardImage src={displayImage} alt={displayTitle} />
      <CardContent>
        <CardTitle>{displayTitle}</CardTitle>
        <CardDescription>{displayDescription}</CardDescription>
        <CardPrice>{displayPrice}</CardPrice>
        <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};

// Sample usage
const SampleProductCard: React.FC = () => {
  const sampleProduct = {
    title: 'Sample Product',
    description: 'This is a sample product description.',
    image: 'https://via.placeholder.com/300x200?text=Sample+Product',
    price: 19.99,
  };

  const handleAddToCart = () => {
    console.log('Product added to cart');
  };

  return (
    <Card
      title={sampleProduct.title}
      description={sampleProduct.description}
      image={sampleProduct.image}
      price={sampleProduct.price}
      onAddToCart={handleAddToCart}
    />
  );
};

export default SampleProductCard;