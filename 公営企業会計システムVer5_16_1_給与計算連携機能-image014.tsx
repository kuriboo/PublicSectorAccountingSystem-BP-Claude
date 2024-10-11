import React from 'react';
import styled from '@emotion/styled';

// Card component props
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

// Card component
const Card: React.FC<CardProps> = ({ title, description, imageUrl, ctaText, ctaLink }) => {
  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {ctaText && ctaLink && (
          <CardCTA href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </CardCTA>
        )}
      </CardContent>
    </CardWrapper>
  );
};

// Styled components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  color: #666;
`;

const CardCTA = styled.a`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleCard: React.FC = () => {
  return (
    <Card
      title="Sample Card"
      description="This is a sample card component created using Next.js and TypeScript."
      imageUrl="https://example.com/sample-image.jpg"
      ctaText="Learn More"
      ctaLink="https://example.com"
    />
  );
};

export default Card;