import React from 'react';
import styled from '@emotion/styled';

// Card component props interface
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;

  @media (max-width: 600px) {
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

const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
`;

// Card component
const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onAddToCart }) => {
  // Handle missing prop values
  const fallbackImage = 'https://via.placeholder.com/300x200';
  const displayTitle = title || 'Untitled';
  const displayDescription = description || 'No description available';
  const displayPrice = price ? `$${price.toFixed(2)}` : 'Price not available';

  return (
    <CardContainer>
      <CardImage src={imageUrl || fallbackImage} alt={displayTitle} />
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
const sampleData = {
  title: 'Product Name',
  description: 'This is a sample product description.',
  imageUrl: 'https://example.com/product-image.jpg',
  price: 19.99,
};

const SampleUsage: React.FC = () => {
  const handleAddToCart = () => {
    console.log('Added to cart');
  };

  return <Card {...sampleData} onAddToCart={handleAddToCart} />;
};

export default Card;