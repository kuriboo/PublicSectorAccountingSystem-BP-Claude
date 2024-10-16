import React from 'react';
import styled from 'styled-components';

// 伝票明細の型定義
type DetailItem = {
  date: string;
  division: string;
  description: string;
  summary: string;
  amount: number;
};

// 伝票明細テーブルのプロパティ型定義
type DetailTableProps = {
  items: DetailItem[];
};

// 伝票明細テーブルコンポーネント
const DetailTable: React.FC<DetailTableProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>振替日</Th>
          <Th>所属</Th>
          <Th>摘要</Th>
          <Th>伝票番号</Th>
          <Th>金額</Th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <Td>{item.date}</Td>
            <Td>{item.division}</Td>
            <Td>{item.description}</Td>
            <Td>{item.summary}</Td>
            <Td>{item.amount.toLocaleString()}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td`
  white-space: nowrap;
`;

// サンプルデータ
const sampleData: DetailItem[] = [
  {
    date: '06/01/18',
    division: '開発部',
    description: '302(7)開発調査-日付範囲外',
    summary: '304',
    amount: 5500,
  },
  {
    date: '06/01/19',
    division: '総務部',
    description: '309(2)給与外手当',
    summary: '304',
    amount: 55000,
  },
  {
    date: '06/01/23',
    division: '総務部',
    description: '304',
    summary: '',
    amount: 950000,
  },
  {
    date: '06/01/31',
    division: '開発',
    description: '306[前受]振替1',
    summary: '',
    amount: 1210,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>伝票明細テーブル</h2>
      <DetailTable items={sampleData} />
    </div>
  );
};

export default App;