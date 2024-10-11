import React from 'react';
import styled from 'styled-components';

// カード型のコンポーネント
type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

const Card: React.FC<CardProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
    </CardWrapper>
  );
};

// カードのスタイリング
const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

// カードコンポーネントの使用例
const CardExample: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Card
        title="Card 1"
        description="This is the description for Card 1."
        buttonText="Click me!"
        onButtonClick={handleButtonClick}
      />
      <Card
        title="Card 2"
        description="This is the description for Card 2."
        buttonText="Click me too!"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default CardExample;