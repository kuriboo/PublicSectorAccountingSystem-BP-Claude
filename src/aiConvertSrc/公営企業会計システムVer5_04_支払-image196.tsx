以下は、画像を元にしたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 締め処理状況一覧の型定義
type ProcessingStatusItem = {
  所属: string;
  起票日: string;
  種別: string;
  区分: string;
  伝票No: string;
  調定日: string;
  締め完了: string;
  収納日: string;
  締め完了日: string;
  摘要: string;
  合計金額: number;
};

type ProcessingStatusTableProps = {
  data: ProcessingStatusItem[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 締め処理状況一覧テーブルコンポーネント
const ProcessingStatusTable: React.FC<ProcessingStatusTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>所属</th>
          <th>起票日</th>
          <th>種別</th>
          <th>区分</th>
          <th>伝票No</th>
          <th>調定日</th>
          <th>締め完了</th>
          <th>収納日</th>
          <th>締め完了日</th>
          <th>摘要</th>
          <th>合計金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.所属}</td>
            <td>{item.起票日}</td>
            <td>{item.種別}</td>
            <td>{item.区分}</td>
            <td>{item.伝票No}</td>
            <td>{item.調定日}</td>
            <td>{item.締め完了}</td>
            <td>{item.収納日}</td>
            <td>{item.締め完了日}</td>
            <td>{item.摘要}</td>
            <td>{item.合計金額}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const sampleData: ProcessingStatusItem[] = [
  {
    所属: '経営企画課',
    起票日: '29/05/30',
    種別: '個別',
    区分: '未',
    伝票No: '25',
    調定日: '29/05/30',
    締め完了: '未',
    収納日: '末入力',
    締め完了日: '',
    摘要: '仕訳科目細別入力の仕訳',
    合計金額: 12.0,
  },
  // ... 他のサンプルデータ
];

const App: React.FC = () => {
  return (
    <div>
      <h1>締め処理状況一覧</h1>
      <ProcessingStatusTable data={sampleData} />
    </div>
  );
};

export default App;

上記のコードは、画像にある締め処理状況一覧をテーブル形式で表示するコンポーネントです。主な特徴は以下の通りです：

1. TypeScriptの型定義を使用し、データの型を明確にしています。
2. styled-componentsを使ってテーブルのスタイルを定義しています。
3. コンポーネントはPropsを受け取り、再利用可能になっています。
4. データが空の場合の処理も考慮しています。
5. サンプルデータを用いて使用例を示しています。