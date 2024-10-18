import React from 'react';
import styled from '@emotion/styled';

interface FeaturedArticleProps {
  date: string;
  title: string;
  excerpt: string;
}

const FeaturedArticleWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const ArticleDate = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ArticleTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ date, title, excerpt }) => {
  // 日付、タイトル、抜粋のいずれかが空の場合は何も表示しない
  if (!date || !title || !excerpt) {
    return null;
  }

  return (
    <FeaturedArticleWrapper>
      <ArticleDate>{date}</ArticleDate>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleExcerpt>{excerpt}</ArticleExcerpt>
    </FeaturedArticleWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleArticle = {
    date: '令和23年8月13日',
    title: '育児処理日',
    excerpt: '育児処理日とは、社員が育児のための特別な休暇を取得できる制度です。育児処理日を利用することで、子育てと仕事の両立がしやすくなります。',
  };

  return (
    <div>
      <h1>注目記事</h1>
      <FeaturedArticle
        date={sampleArticle.date}
        title={sampleArticle.title}
        excerpt={sampleArticle.excerpt}
      />
    </div>
  );
};

export default App;