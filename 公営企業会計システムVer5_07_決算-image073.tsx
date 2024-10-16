import React from 'react';
import styled from '@emotion/styled';

// メインビジュアルのプロパティ
type MainVisualProps = {
  imageUrl: string;
  altText: string;
};

// メインビジュアルのスタイル
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

const MainVisualTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

/**
 * メインビジュアルコンポーネント
 */
const MainVisual: React.FC<MainVisualProps> = ({ imageUrl, altText }) => {
  // 画像URLが空の場合は代替テキストのみ表示
  if (!imageUrl) {
    return <MainVisualTitle>{altText}</MainVisualTitle>;
  }

  return (
    <MainVisualWrapper>
      <MainVisualImage src={imageUrl} alt={altText} />
      <MainVisualTitle>{altText}</MainVisualTitle>
    </MainVisualWrapper>
  );
};

// サンプルデータ
const sampleData = {
  imageUrl: 'https://example.com/image.jpg',
  altText: '魅惑きょうせい',
};

/**
 * メインビジュアルを表示するサンプルコンポーネント
 */
const App: React.FC = () => {
  return (
    <div>
      <MainVisual {...sampleData} />
      {/* 他のコンテンツ */}
    </div>
  );
};

export default App;