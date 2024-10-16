import React from 'react';
import styled from '@emotion/styled';

// Card component props type definition
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  onClick?: () => void;
};

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
  font-size: 24px;
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;

const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  margin-top: 16px;
  cursor: pointer;
`;

// Card component
const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText = 'Learn More', onClick }) => {
  return (
    <CardContainer>
      {/* Render image only if imageUrl is provided */}
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        {/* Render title only if it's provided */}
        {title && <CardTitle>{title}</CardTitle>}
        {/* Render description only if it's provided */}
        {description && <CardDescription>{description}</CardDescription>}
        {/* Render button only if onClick is provided */}
        {onClick && <CardButton onClick={onClick}>{buttonText}</CardButton>}
      </CardContent>
    </CardContainer>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3',
      imageUrl: 'https://example.com/image3.jpg',
    },
  ];

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} {...card} onClick={() => console.log(`Clicked on ${card.title}`)} />
      ))}
    </div>
  );
};

export default Card;