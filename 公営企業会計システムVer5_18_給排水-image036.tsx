import React from 'react';
import styled from '@emotion/styled';

// カードコンポーネントの型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onButtonClick: () => void;
}

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick={onButtonClick}>クリック</CardButton>
      </CardContent>
    </CardContainer>
  );
};

// カードコンポーネントのスタイリング
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
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

const CardButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  title: 'サンプルカード',
  description: 'これはサンプルカードの説明です。',
  imageUrl: 'https://example.com/sample-image.jpg',
};

// 使用例コンポーネント
const App: React.FC = () => {
  const handleButtonClick = () => {
    console.log('ボタンがクリックされました');
  };

  return (
    <div>
      <h1>カードコンポーネントの使用例</h1>
      <Card
        title={sampleData.title}
        description={sampleData.description}
        imageUrl={sampleData.imageUrl}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default App;