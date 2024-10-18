import React from 'react';
import styled from '@emotion/styled';

type NewsCardProps = {
  thumbnail?: string;
  title: string;
  date: string;
  category: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ thumbnail, title, date, category }) => {
  return (
    <CardWrapper>
      {thumbnail && <Thumbnail src={thumbnail} alt="ニュースのサムネイル" />}
      <ContentWrapper>
        <Title>{title}</Title>
        <MetaWrapper>
          <Date>{date}</Date>
          <Category>{category}</Category>
        </MetaWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

const Date = styled.time`
  margin-right: 16px;
`;

const Category = styled.span`
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

// サンプルデータを用いた使用例
const SampleNewsCard: React.FC = () => {
  const sampleData: NewsCardProps = {
    thumbnail: 'https://example.com/news-thumbnail.jpg',
    title: '新製品リリースのお知らせ',
    date: '2023-05-28',
    category: 'プレスリリース',
  };

  return <NewsCard {...sampleData} />;
};

export default NewsCard;