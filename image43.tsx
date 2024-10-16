import React from 'react';
import styled from '@emotion/styled';

// メインビジュアルのプロパティ型定義
type MainVisualProps = {
  imageUrl: string;
  altText: string;
  heading: string;
  description: string;
};

// メインビジュアルのスタイル定義
const MainVisualWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

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

const MainVisualHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainVisualDescription = styled.p`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// メインビジュアルのコンポーネント定義
const MainVisual: React.FC<MainVisualProps> = ({
  imageUrl,
  altText,
  heading,
  description,
}) => {
  // 必須プロパティのチェック
  if (!imageUrl || !altText || !heading) {
    console.warn('MainVisual: 必須プロパティが指定されていません');
    return null;
  }

  return (
    <MainVisualWrapper>
      <MainVisualImage src={imageUrl} alt={altText} />
      <MainVisualContent>
        <MainVisualHeading>{heading}</MainVisualHeading>
        {description && (
          <MainVisualDescription>{description}</MainVisualDescription>
        )}
      </MainVisualContent>
    </MainVisualWrapper>
  );
};

// サンプルデータを用いたメインビジュアルの使用例
const SampleMainVisual = () => {
  const sampleData = {
    imageUrl: 'https://example.com/main-visual.jpg',
    altText: 'メインビジュアル画像',
    heading: '契約番号',
    description: 'サンプルのメインビジュアルです',
  };

  return <MainVisual {...sampleData} />;
};

export default MainVisual;