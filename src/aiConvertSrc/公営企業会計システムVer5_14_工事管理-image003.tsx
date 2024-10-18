import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
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
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: #666;
`;

const CardPrice = styled.p`
  margin: 8px 0;
  font-size: 16px;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

// Define the ProductCard component
const ProductCard: React.FC<CardProps> = ({ 
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  // Handle cases where prop values are missing
  const sanitizedTitle = title || 'Unknown Product';
  const sanitizedDescription = description || 'No description available';
  const sanitizedPrice = price || 0;

  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={sanitizedTitle} />}
      <CardContent>
        <CardTitle>{sanitizedTitle}</CardTitle>
        <CardDescription>{sanitizedDescription}</CardDescription>
        <CardPrice>${sanitizedPrice.toFixed(2)}</CardPrice>
        <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};

// Example usage of the ProductCard component
const ExampleUsage: React.FC = () => {
  const handleAddToCart = () => {
    console.log('Product added to cart');
  };

  return (
    <ProductCard
      imageUrl="https://example.com/product-image.jpg"
      title="Sample Product"
      description="This is a sample product description."
      price={19.99}
      onAddToCart={handleAddToCart}
    />
  );
};

export default ProductCard;