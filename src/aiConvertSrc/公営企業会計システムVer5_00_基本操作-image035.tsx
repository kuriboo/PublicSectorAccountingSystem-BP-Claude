import React from 'react';
import styled from 'styled-components';

interface DateProps {
  /** 日付の値 */
  value: string;
}

const DateWrapper = styled.div`
  display: inline-block;
  background-color: #c00;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
`;

/**
 * 日付を表示するコンポーネント
 */
const Date: React.FC<DateProps> = ({ value }) => {
  if (!value) {
    // 日付の値がない場合は何も表示しない
    return null;
  }

  return <DateWrapper>{value}</DateWrapper>;
};

interface PostTitleProps {
  /** 投稿のタイトル */
  title: string;
}

const PostTitleWrapper = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

/**
 * 投稿のタイトルを表示するコンポーネント
 */
const PostTitle: React.FC<PostTitleProps> = ({ title }) => {
  if (!title) {
    // タイトルがない場合は代替テキストを表示
    return <PostTitleWrapper>タイトルなし</PostTitleWrapper>;
  }

  return <PostTitleWrapper>{title}</PostTitleWrapper>;
};

interface PostProps {
  /** 投稿の日付 */
  date: string;
  /** 投稿のタイトル */  
  title: string;
  /** 投稿の内容 */
  content: string;
}

const PostWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const PostContent = styled.p`
  margin: 0;
  line-height: 1.6;
`;

/**
 * 投稿を表示するコンポーネント
 */
const Post: React.FC<PostProps> = ({ date, title, content }) => {
  return (
    <PostWrapper>
      <Date value={date} />
      <PostTitle title={title} />
      <PostContent>{content}</PostContent>
    </PostWrapper>
  );
};

// サンプルデータ
const samplePosts = [
  {
    date: '2023年2月15日',
    title: 'サンプル投稿1',
    content: 'これはサンプルの投稿です。',
  },
  {
    date: '2023年2月14日',
    title: 'サンプル投稿2',  
    content: 'これは2つ目のサンプル投稿です。改行を含みます。\n改行されました。',
  },
];

/**
 * 投稿一覧を表示するコンポーネント
 */
const PostList: React.FC = () => {
  return (
    <div>
      {samplePosts.map((post, index) => (
        <Post key={index} date={post.date} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;