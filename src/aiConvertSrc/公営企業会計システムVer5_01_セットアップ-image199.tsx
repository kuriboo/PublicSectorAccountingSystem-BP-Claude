import React from 'react';
import styled from '@emotion/styled';

// メインビジュアルのコンポーネント
const MainVisual: React.FC<MainVisualProps> = ({ title, description, imageUrl, imageAlt, buttonText, onButtonClick }) => {
  return (
    <MainVisualWrapper>
      <MainVisualImage src={imageUrl} alt={imageAlt} />
      <MainVisualContent>
        <MainVisualTitle>{title}</MainVisualTitle>
        <MainVisualDescription>{description}</MainVisualDescription>
        <MainVisualButton onClick={onButtonClick}>{buttonText}</MainVisualButton>
      </MainVisualContent>
    </MainVisualWrapper>
  );
};

// メインビジュアルのプロパティ型
type MainVisualProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  onButtonClick: () => void;
};

// メインビジュアルのスタイル
const MainVisualWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MainVisualImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainVisualContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const MainVisualTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const MainVisualDescription = styled.p`
  font-size: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MainVisualButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// メインビジュアルの使用例
const MainVisualExample: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <MainVisual
      title="Welcome to Our Website"
      description="Discover amazing products and services"
      imageUrl="https://example.com/image.jpg"
      imageAlt="Website main visual"
      buttonText="Learn More"
      onButtonClick={handleButtonClick}
    />
  );
};

export default MainVisualExample;