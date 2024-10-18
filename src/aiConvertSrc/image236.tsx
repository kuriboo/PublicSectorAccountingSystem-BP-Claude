import React from 'react';
import styled from '@emotion/styled';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 300px;
  margin: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <CardWrapper>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardTitle>{title || 'No title provided'}</CardTitle>
      <CardDescription>{description || 'No description provided'}</CardDescription>
    </CardWrapper>
  );
};

// Usage example
const sampleData = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    title: 'Card 1',
    description: 'This is the first card',
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    title: 'Card 2',
    description: 'This is the second card',
  },
];

const CardList: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {sampleData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;