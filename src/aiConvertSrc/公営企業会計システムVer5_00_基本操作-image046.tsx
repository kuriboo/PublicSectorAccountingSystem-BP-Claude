import React from 'react';
import styled from 'styled-components';

// Blogの型定義
interface BlogProps {
  title: string;
  content: string;
  tags: string[];
  date: string;
}

// Blog コンポーネント
const Blog: React.FC<BlogProps> = ({ title, content, tags, date }) => {
  return (
    <BlogWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>{tag}</TagItem>
        ))}
      </TagList>
      <Date>{date}</Date>
    </BlogWrapper>
  );
};

// Blog コンポーネントのスタイル
const BlogWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TagList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
`;

const TagItem = styled.li`
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 2px 6px;
    margin-right: 6px;
  }
`;

const Date = styled.p`
  font-size: 14px;
  color: #888;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleBlog: BlogProps = {
  title: 'Sample Blog',
  content: 'This is a sample blog content.',
  tags: ['sample', 'blog', 'example'],
  date: '2023-06-11',
};

// 使用例コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>Blog Example</h1>
      <Blog {...sampleBlog} />
    </div>
  );
};

export default App;