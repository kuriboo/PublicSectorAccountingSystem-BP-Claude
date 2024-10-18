import React from 'react';
import styled from '@emotion/styled';

// 定数
const COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
};

// スタイル定義
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  background-color: ${COLORS.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Cardコンポーネント
type CardProps = {
  title?: string;
  text?: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const Card: React.FC<CardProps> = ({ 
  title = 'Card Title',
  text = 'Card description goes here.',
  imageUrl = 'https://via.placeholder.com/300x200',
  buttonText = 'Go somewhere',
  onButtonClick = () => {},
}) => {
  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt="Card" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
      </CardBody>
    </CardWrapper>
  );
};

// サンプルデータ
const sampleCards = [
  {
    title: 'Card 1',
    text: 'This is the first sample card.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Card+1',
    buttonText: 'Click me',
  },
  {
    title: 'Card 2',
    text: 'This is the second sample card.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Card+2',
    buttonText: 'Click me too',
  },
];

// サンプル表示用コンポーネント
const CardList: React.FC = () => {
  return (
    <div>
      {sampleCards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
          onButtonClick={() => alert(`Clicked card ${index + 1}`)}
        />
      ))}
    </div>
  );
};

export default CardList;