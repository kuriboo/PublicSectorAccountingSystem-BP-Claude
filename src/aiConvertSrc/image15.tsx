import React from 'react';
import styled from '@emotion/styled';

// Component props type definition
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onBuy: () => void;
};

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

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

const CardPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

// Card component
const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onBuy }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title || 'Untitled'}</CardTitle>
        <CardDescription>{description || 'No description available.'}</CardDescription>
        <CardPrice>${price.toFixed(2)}</CardPrice>
        <BuyButton onClick={onBuy}>Buy Now</BuyButton>
      </CardContent>
    </CardContainer>
  );
};

// Sample data for demonstration
const sampleData = {
  title: 'Sample Product',
  description: 'This is a sample product description.',
  imageUrl: 'https://example.com/sample-image.jpg',
  price: 19.99,
};

// Usage example component
const CardExample: React.FC = () => {
  const handleBuy = () => {
    console.log('Buy button clicked!');
  };

  return <Card {...sampleData} onBuy={handleBuy} />;
};

export default CardExample;