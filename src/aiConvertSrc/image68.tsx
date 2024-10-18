import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface GiyouSeiProps {
  name: string;
  image: string;
  description: string;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

// コンポーネントの実装
const GiyouSei: React.FC<GiyouSeiProps> = ({ name, image, description }) => {
  return (
    <Container>
      <ImageWrapper>
        {image ? (
          <Image src={image} alt={name} />
        ) : (
          <Image src="/placeholder.jpg" alt="Placeholder" />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <Name>{name || 'Unknown'}</Name>
        <Description>{description || 'No description available.'}</Description>
      </ContentWrapper>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const giyouSeiData: GiyouSeiProps = {
    name: '技能士 太郎',
    image: '/path/to/image.jpg',
    description: '技能士の資格を持つ熟練の職人です。',
  };

  return (
    <div>
      <h1>技能士紹介</h1>
      <GiyouSei {...giyouSeiData} />
    </div>
  );
};

export default App;