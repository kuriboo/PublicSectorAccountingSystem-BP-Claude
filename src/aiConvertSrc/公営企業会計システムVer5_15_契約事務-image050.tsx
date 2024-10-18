import React from 'react';
import styled from 'styled-components';

// 明細エントリーのプロパティ型定義
type EntryProps = {
  code: string;
  name: string;
  amount1: number;
  amount2: number;
  amount3: number;
  amount4: number;
  amount5: number;
  amount6: number;
  amount7: number;
  amount8: number;
  amount9: number;
  amount10: number;
  total: number;
};

// 明細エントリーコンポーネント
const Entry: React.FC<EntryProps> = ({
  code,
  name,
  amount1,
  amount2,
  amount3,
  amount4,
  amount5,
  amount6,
  amount7,
  amount8,
  amount9,
  amount10,
  total,
}) => {
  return (
    <StyledEntry>
      <td>{code}</td>
      <td>{name}</td>
      <td>{amount1.toLocaleString()}</td>
      <td>{amount2.toLocaleString()}</td>
      <td>{amount3.toLocaleString()}</td>
      <td>{amount4.toLocaleString()}</td>
      <td>{amount5.toLocaleString()}</td>
      <td>{amount6.toLocaleString()}</td>
      <td>{amount7.toLocaleString()}</td>
      <td>{amount8.toLocaleString()}</td>
      <td>{amount9.toLocaleString()}</td>
      <td>{amount10.toLocaleString()}</td>
      <td>{total.toLocaleString()}</td>
    </StyledEntry>
  );
};

// 明細エントリーのスタイリング
const StyledEntry = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    padding: 8px;
    text-align: right;
  }
`;

// 明細リストのプロパティ型定義
type DetailProps = {
  entries: EntryProps[];
};

// 明細リストコンポーネント
const DetailList: React.FC<DetailProps> = ({ entries }) => {
  // エントリーが空の場合の処理
  if (entries.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>業者コード</th>
          <th>業者名</th>
          <th>第1回入札金額</th>
          <th>第2回入札金額</th>
          <th>第3回入札金額</th>
          <th>第4回入札金額</th>
          <th>第5回入札金額</th>
          <th>第6回入札金額</th>
          <th>第7回入札金額</th>
          <th>第8回入札金額</th>
          <th>第9回入札金額</th>
          <th>第10回入札金額</th>
          <th>第2回入札金額</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <Entry key={index} {...entry} />
        ))}
      </tbody>
    </StyledTable>
  );
};

// テーブルのスタイリング
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    text-align: center;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    th,
    td {
      padding: 4px;
    }
  }
`;

// サンプルデータ
const sampleData: EntryProps[] = [
  {
    code: '0000001',
    name: 'しんきほ工務店',
    amount1: 0,
    amount2: 0,
    amount3: 0,
    amount4: 0,
    amount5: 0,
    amount6: 0,
    amount7: 0,
    amount8: 0,
    amount9: 0,
    amount10: 0,
    total: 9800000,
  },
  {
    code: '0000002',
    name: 'こうどう総合建築株式会社',
    amount1: 0,
    amount2: 0,
    amount3: 0,
    amount4: 0,
    amount5: 0,
    amount6: 0,
    amount7: 0,
    amount8: 0,
    amount9: 0,
    amount10: 0,
    total: 4000000,
  },
  // ...
];

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>入札詳細</h1>
      <DetailList entries={sampleData} />
    </div>
  );
};

export default App;