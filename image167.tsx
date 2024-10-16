import React from 'react';
import styled from '@emotion/styled';

// 映画作品のプロパティの型定義
type MovieProps = {
  movieCode: string;
  subtitle?: string;
};

// 映画タイトルのコンポーネント
const MovieTitle: React.FC<MovieProps> = ({ movieCode, subtitle }) => {
  return (
    <TitleContainer>
      <TitleLabel>画面タイトルコード</TitleLabel>
      <TitleCode>{movieCode}</TitleCode>
      {subtitle && <Subtitle>～{subtitle}</Subtitle>}
    </TitleContainer>
  );
};

// スタイリング
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const TitleCode = styled.span`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Subtitle = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: #666;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: MovieProps = {
    movieCode: 'MAD00002',
    subtitle: 'SLPD99999',
  };

  return (
    <div>
      <h1>画面タイトルマスタリスト作成</h1>
      <MovieTitle {...sampleData} />
      {/* 他のコンポーネントや処理を追加 */}
    </div>
  );
};

export default App;