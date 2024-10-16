import React from 'react';
import styled from '@emotion/styled';

// Card component props type definition
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

// Style for card component using Emotion
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;

  @media (max-width: 480px) {
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
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin: 0 0 16px;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardTag = styled.span`
  font-size: 12px;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

// Card component
const Card: React.FC<CardProps> = ({ title, description, imageUrl, tags }) => {
  return (
    <CardWrapper>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardTags>
          {tags.map((tag, index) => (
            <CardTag key={index}>{tag}</CardTag>
          ))}
        </CardTags>
      </CardContent>
    </CardWrapper>
  );
};

// Sample data for CardList component
const sampleData = [
  {
    title: 'Card 1',
    description: 'This is the description for Card 1.',
    imageUrl: 'https://example.com/image1.jpg',
    tags: ['Tag 1', 'Tag 2'],
  },
  {
    title: 'Card 2',
    description: 'This is the description for Card 2.',
    imageUrl: 'https://example.com/image2.jpg',
    tags: ['Tag 3', 'Tag 4'],
  },
];

// CardList component for displaying Card components
const CardList: React.FC = () => {
  return (
    <div>
      {sampleData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          tags={card.tags}
        />
      ))}
    </div>
  );
};

export default CardList;