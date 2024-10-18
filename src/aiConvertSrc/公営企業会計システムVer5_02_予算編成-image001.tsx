import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  onReadMore: () => void;
}

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 600px) {
    max-width: 100%;
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
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const CardDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
`;

const ReadMoreButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Define the ArticleCard component
const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  onReadMore,
}) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDate>{date}</CardDate>
        <ReadMoreButton onClick={onReadMore}>Read More</ReadMoreButton>
      </CardContent>
    </CardContainer>
  );
};

// Example usage of the ArticleCard component
const ExampleUsage: React.FC = () => {
  const handleReadMore = () => {
    console.log('Read More clicked');
  };

  return (
    <ArticleCard
      title="Sample Article"
      description="This is a sample article description."
      date="May 20, 2023"
      imageUrl="https://example.com/image.jpg"
      onReadMore={handleReadMore}
    />
  );
};

export default ArticleCard;