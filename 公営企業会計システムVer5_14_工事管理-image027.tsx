import React from 'react';
import styled from '@emotion/styled';

// メインビジュアルコンポーネントの型定義
type MainVisualProps = {
  imageUrl: string;
  altText?: string;
  label: string;
};

// メインビジュアルコンポーネント
const MainVisual: React.FC<MainVisualProps> = ({ imageUrl, altText = '', label }) => {
  return (
    <MainVisualWrapper>
      <MainVisualImage src={imageUrl} alt={altText} />
      <MainVisualLabel>{label}</MainVisualLabel>
    </MainVisualWrapper>
  );
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

const MainVisualLabel = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// サンプルデータを用いたメインビジュアルの使用例
const MainVisualSample: React.FC = () => {
  // サンプルデータ
  const sampleData: MainVisualProps = {
    imageUrl: 'https://example.com/image.jpg',
    altText: 'Sample Image',
    label: '株式会社ぎょうせい',
  };

  return (
    <div>
      <h2>Main Visual Sample</h2>
      <MainVisual {...sampleData} />
    </div>
  );
};

export default MainVisual;

// サンプルコンポーネントも合わせてエクスポート
export { MainVisualSample };