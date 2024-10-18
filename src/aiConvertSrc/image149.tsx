import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';

// 摘要データの型定義
type SummaryItem = {
  code: string;
  name: string;
  count1: number;
  count2: number;
};

// コンポーネントのProps型定義
type SummaryTableProps = {
  data: SummaryItem[];
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

// 摘要テーブルコンポーネント
const SummaryTable = ({ data }: SummaryTableProps) => {
  // ページネーション用のstate
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // 表示するデータの範囲を計算
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>摘要コード</th>
            <th>内容(1)</th>
            <th>内容(2)</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>
                {item.count1}件
                {item.count2 > 0 && <span>（{item.count2}）</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* ページネーション用のボタン */}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          前へ
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= data.length}
        >
          次へ
        </button>
      </div>
    </div>
  );
};

// 使用例
const App = () => {
  const sampleData: SummaryItem[] = [
    { code: '001001', name: '事務用/消耗品', count1: 10, count2: 1 },
    { code: '001002', name: '作業用/消耗品', count1: 5, count2: 0 },
    // ... その他のサンプルデータ
  ];

  return (
    <div>
      <h1>摘要検索</h1>
      <SummaryTable data={sampleData} />
    </div>
  );
};

export default App;