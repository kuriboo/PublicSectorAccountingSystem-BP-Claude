import React from 'react';
import styled from '@emotion/styled';

// データシステム事業部のプロパティ型定義
interface DataSystemProps {
  title?: string;
  description?: string;
}

// データシステム事業部のコンポーネント
const DataSystem: React.FC<DataSystemProps> = ({ title = '株式会社ぎょうせい', description = 'データ・システム事業部' }) => {
  return (
    <DataSystemWrapper>
      <Logo />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </DataSystemWrapper>
  );
};

// データシステム事業部のスタイル定義
const DataSystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0 0;
  
  @media (min-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

// サンプルデータを使用した表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <DataSystem />
      <DataSystem title="株式会社ABC" description="XYZ事業部" />
    </div>
  );
};

export default App;