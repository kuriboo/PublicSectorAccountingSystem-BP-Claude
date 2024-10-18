import React from 'react';
import styled from '@emotion/styled';

// 画像URLの型定義
type ImageUrl = string;

// ヘッダーコンポーネントのプロパティ型定義
type HeaderProps = {
  title: string;
  subtitle: string;
  backgroundImage: ImageUrl;
};

// ヘッダーコンポーネント
const Header: React.FC<HeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <HeaderWrapper backgroundImage={backgroundImage}>
      <HeaderContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

// ヘッダーのスタイル
const HeaderWrapper = styled.header<{ backgroundImage: ImageUrl }>`
  width: 100%;
  height: 400px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Header
        title="Welcome to My Website"
        subtitle="Discover amazing things"
        backgroundImage="https://example.com/header-background.jpg"
      />
      {/* その他のコンテンツ */}
    </div>
  );
};

export default App;

// 例外処理
const SafeHeader: React.FC<HeaderProps> = (props) => {
  const { title = '', subtitle = '', backgroundImage = '' } = props;

  return <Header title={title} subtitle={subtitle} backgroundImage={backgroundImage} />;
};