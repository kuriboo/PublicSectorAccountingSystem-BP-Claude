以下は、Next.js + TypeScriptを使用して、指定された画像のテーブルデータを表示するコンポーネントの実装例です。

import React from 'react';
import styled from 'styled-components';

// テーブルデータの型定義
interface TableData {
  id: number;
  購入日: string;
  購入店舗: string;
  商品名: string;
  商品単価: number;
  数量: number;
  入庫年月: string;
  入庫番号: number;
  入庫数量: number;
  原価コード: number;
}

// コンポーネントのプロパティの型定義
interface TableProps {
  data: TableData[];
}

// テーブルのスタイリング
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>購入日</th>
          <th>購入店舗</th>
          <th>商品名</th>
          <th>商品単価</th>
          <th>数量</th>
          <th>入庫年月</th>
          <th>入庫番号</th>
          <th>入庫数量</th>
          <th>原価コード</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.購入日}</td>
            <td>{item.購入店舗}</td>
            <td>{item.商品名}</td>
            <td>{item.商品単価}</td>
            <td>{item.数量}</td>
            <td>{item.入庫年月}</td>
            <td>{item.入庫番号}</td>
            <td>{item.入庫数量}</td>
            <td>{item.原価コード}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

// 使用例
const sampleData: TableData[] = [
  {
    id: 1,
    購入日: '2022/01/01',
    購入店舗: '店舗A',
    商品名: '商品X',
    商品単価: 2500,
    数量: 5,
    入庫年月: '2022/01',
    入庫番号: 1001,
    入庫数量: 100,
    原価コード: 1234,
  },
  // その他のサンプルデータ...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>購入データ</h1>
      <Table data={sampleData} />
    </div>
  );
};

上記のコードでは、TypeScriptの型定義を使用してテーブルデータとコンポーネントのプロパティを定義しています。
また、styled-componentsを使用してテーブルのスタイリングを行い、レスポンシブデザインにも対応しています。
テーブルコンポーネントでは、データが空の場合の処理も行っています。
最後に、サンプルデータを用いて使用例を示しています。