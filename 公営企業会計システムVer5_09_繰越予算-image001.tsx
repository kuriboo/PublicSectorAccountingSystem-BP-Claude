import React from 'react';
import styled from 'styled-components';

// Interface for GinyouCard component props
interface GinyouCardProps {
  name: string;
  description: string;
  imageUrl: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
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

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  margin: 8px 0;
  font-size: 14px;
`;

const FavoriteButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.isFavorite ? '#ff4081' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isFavorite ? '#e91e63' : '#999')};
  }
`;

// GinyouCard component
const GinyouCard: React.FC<GinyouCardProps> = ({
  name,
  description,
  imageUrl,
  isFavorite = false,
  onFavoriteClick,
}) => {
  // Handle favorite button click
  const handleFavoriteClick = () => {
    if (onFavoriteClick) {
      onFavoriteClick();
    }
  };

  return (
    <CardContainer>
      {imageUrl ? (
        <CardImage src={imageUrl} alt={name} />
      ) : (
        <div>No image available</div>
      )}
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </FavoriteButton>
      </CardContent>
    </CardContainer>
  );
};

// Sample data for demonstration
const sampleData = {
  name: '銀葉',
  description: '銀葉は、その美しい銀色の葉が特徴的な植物です。',
  imageUrl: 'https://example.com/ginyou.jpg',
};

// Usage example component
const GinyouCardExample: React.FC = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <GinyouCard
      {...sampleData}
      isFavorite={isFavorite}
      onFavoriteClick={handleFavoriteClick}
    />
  );
};

export default GinyouCard;