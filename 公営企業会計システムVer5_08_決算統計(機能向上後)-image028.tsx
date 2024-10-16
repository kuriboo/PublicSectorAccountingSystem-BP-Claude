以下は、Next.js + TypeScriptを使用して、画像の処理履歴画面を実装したコンポーネントのコード例です。

import React from 'react';
import styled from 'styled-components';

// 処理履歴の型定義
type ProcessingHistoryItem = {
  menu: string;
  title: string;
  status: string;
  timestamp: string;
  processor: string;
};

// コンポーネントのプロパティの型定義
type ProcessingHistoryProps = {
  title: string;
  items: ProcessingHistoryItem[];
};

// スタイルコンポーネントの定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 処理履歴コンポーネント
const ProcessingHistory: React.FC<ProcessingHistoryProps> = ({ title, items }) => {
  // itemsが空の場合の例外処理
  if (!items.length) {
    return <Container>処理履歴がありません。</Container>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>メニュー</TableHeader>
            <TableHeader>種類</TableHeader>
            <TableHeader>状況</TableHeader>
            <TableHeader>最終処理日時</TableHeader>
            <TableHeader>職員名</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <TableCell>{item.menu}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.timestamp}</TableCell>
              <TableCell>{item.processor}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProcessingHistory;

// 使用例
const sampleData: ProcessingHistoryItem[] = [
  {
    menu: '基幹処理',
    title: '決算統計マスタ作成',
    status: '済',
    timestamp: '2021/04/30 00:00:00',
    processor: '全権限',
  },
  // ... 他のサンプルデータ
];

const App: React.FC = () => {
  return (
    <div>
      <ProcessingHistory title="決算統計処理履歴" items={sampleData} />
    </div>
  );
};

このコンポーネントは、処理履歴の情報を表示するためのもので、タイトルとアイテムの配列をプロパティとして受け取ります。また、styled-componentsを使用してスタイリングを行い、レスポンシブデザインにも対応しています。サンプルデータを使用してコンポーネントの使用例も示しています。