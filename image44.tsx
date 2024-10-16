以下は、指定された画像を元にNext.js + TypeScriptで実装したコンポーネントのコードです。

import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #1e88e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// サンプルデータを使用したコンポーネントの使用例
const ExampleComponent: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  const cardData = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
  ];

  return (
    <div>
      <h1>Example Component</h1>
      <Button label="Click me" onClick={handleClick} />
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default ExampleComponent;