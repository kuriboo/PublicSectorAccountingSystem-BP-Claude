import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティ定義
interface CardProps {
  title: string;
  description: string;
}

// カードコンポーネント
const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
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
    width: 300px;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// サンプルデータ
const sampleData = [
  {
    title: '驚きようせい',
    description: '説明文が入ります。',
  },
  {
    title: '',
    description: '',
  },
];

// サンプルデータを使用した表示用コンポーネント
const SampleCardList: React.FC = () => {
  return (
    <div>
      {sampleData.map((data, index) => (
        <Card
          key={index}
          title={data.title || 'タイトルなし'}
          description={data.description || '説明文なし'}
        />
      ))}
    </div>
  );
};

export default SampleCardList;