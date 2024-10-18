import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonClick: () => void;
}

// カードのスタイル定義
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 16px;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// カードコンポーネント
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
}) => {
  // タイトルが空の場合のデフォルト値
  const cardTitle = title || 'Default Title';

  // 説明文が空の場合のデフォルト値  
  const cardDescription = description || 'No description available.';

  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={cardTitle} />}
      <CardTitle>{cardTitle}</CardTitle>
      <CardDescription>{cardDescription}</CardDescription>
      <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
    </CardContainer>
  );
};

// サンプルデータを用いたカードコンポーネントの使用例
const App: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Card
        title="Sample Card"
        description="This is a sample card component."
        imageUrl="https://example.com/image.jpg"
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;