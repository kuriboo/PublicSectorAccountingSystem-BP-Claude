import React from 'react';
import styled from '@emotion/styled';

// タイトルのスタイル
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

// リストアイテムのスタイル
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// アイコンのスタイル
const Icon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #007bff;
  border-radius: 50%;
  margin-right: 8px;
`;

// リストコンポーネントの型定義
interface ListProps {
  title: string;
  items: string[];
}

// リストコンポーネント
const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div>
      {title && <Title>{title}</Title>}
      <ul>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Icon />
            {item}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

// サンプルデータ
const sampleData = {
  title: '特徴',
  items: ['シンプルなデザイン', '使いやすいインターフェース', '高速なパフォーマンス'],
};

// 使用例
const ListExample: React.FC = () => {
  // タイトルが空の場合の処理
  const title = sampleData.title || '';

  // アイテムが空の場合の処理
  const items = sampleData.items.length > 0 ? sampleData.items : ['アイテムがありません'];

  return <List title={title} items={items} />;
};

export default ListExample;