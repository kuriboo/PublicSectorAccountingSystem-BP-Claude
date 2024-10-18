import React from 'react';
import styled from '@emotion/styled';

// メインビジュアルの型定義
type MainVisualProps = {
  imageUrl: string;
  altText?: string;
  children?: React.ReactNode;
};

// メインビジュアルのスタイル定義
const MainVisualWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${(props: MainVisualProps) => props.imageUrl});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const MainVisualContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

// メインビジュアルコンポーネント
const MainVisual: React.FC<MainVisualProps> = ({ imageUrl, altText = '', children }) => {
  // 画像URLが設定されていない場合は何も表示しない
  if (!imageUrl) return null;

  return (
    <MainVisualWrapper imageUrl={imageUrl}>
      <MainVisualContent>
        {children}
      </MainVisualContent>
    </MainVisualWrapper>
  );
};

// メインビジュアルのサンプル表示用コンポーネント
const SampleMainVisual: React.FC = () => {
  return (
    <MainVisual imageUrl="/sample-image.jpg" altText="サンプル画像">
      <h1>Sample Main Visual</h1>
      <p>This is a sample usage of the MainVisual component.</p>
    </MainVisual>
  );
};

export default MainVisual;