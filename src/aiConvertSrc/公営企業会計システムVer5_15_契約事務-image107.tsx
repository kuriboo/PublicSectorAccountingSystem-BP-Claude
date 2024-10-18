import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onClick: () => void;
};

// カードのスタイル定義
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
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
  margin: 0 0 8px;
  font-size: 18px;
`;

const CardDescription = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// カードコンポーネントの定義
const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText, onClick }) => {
  // プロパティのデフォルト値を設定
  const defaultImageUrl = 'https://via.placeholder.com/300x200';

  return (
    <CardWrapper>
      {imageUrl ? (
        <CardImage src={imageUrl} alt={title} />
      ) : (
        <CardImage src={defaultImageUrl} alt="Default" />
      )}
      <CardContent>
        <CardTitle>{title || 'タイトルなし'}</CardTitle>
        <CardDescription>{description || '説明なし'}</CardDescription>
        <CardButton onClick={onClick}>{buttonText || 'ボタン'}</CardButton>
      </CardContent>
    </CardWrapper>
  );
};

// サンプルデータを使用したカードの表示用コンポーネント
const SampleCard: React.FC = () => {
  const sampleData = {
    title: 'サンプルカード',
    description: 'これはサンプルカードの説明です。',
    imageUrl: 'https://example.com/sample-image.jpg',
    buttonText: '詳細を見る',
    onClick: () => {
      console.log('カードがクリックされました');
    },
  };

  return <Card {...sampleData} />;
};

export default SampleCard;