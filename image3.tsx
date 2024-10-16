import React from 'react';
import styled from 'styled-components';

// メインのコンポーネントの型定義
interface MainProps {
  title: string;
  subtitle: string;
}

// メインのコンポーネント
const Main: React.FC<MainProps> = ({ title, subtitle }) => {
  return (
    <MainWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </MainWrapper>
  );
};

// メインのコンポーネントのスタイル
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// サンプルデータを用いて使用する表示用のコンポーネント
const SamplePage: React.FC = () => {
  const sampleData = {
    title: '駐車きょうせい',
    subtitle: '駐車場の利用に関する情報を提供します。',
  };

  return (
    <div>
      {/* サンプルデータが存在する場合のみMainコンポーネントを表示 */}
      {sampleData.title && sampleData.subtitle && (
        <Main title={sampleData.title} subtitle={sampleData.subtitle} />
      )}
    </div>
  );
};

export default SamplePage;