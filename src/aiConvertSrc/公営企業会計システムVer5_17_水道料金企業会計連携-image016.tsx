import React from 'react';
import styled from 'styled-components';

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    
    th, td {
      padding: 6px;
    }
  }
`;

// テーブルのプロパティ型定義
type TableData = {
  id: string;
  date1: string;
  date2: string;
  value1: string;
  value2: string;
  value3: string;
  price: number;
  digits: string;
}

// テーブルコンポーネントのプロパティ型定義
type TableProps = {
  data: TableData[];
}

// テーブルコンポーネント
const SampleTable: React.FC<TableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>日付1</th>
          <th>日付2</th>
          <th>値1</th>
          <th>値2</th>
          <th>値3</th>
          <th>価格</th>
          <th>桁数</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id || '-'}</td>
            <td>{row.date1 || '-'}</td>
            <td>{row.date2 || '-'}</td>
            <td>{row.value1 || '-'}</td>
            <td>{row.value2 || '-'}</td>
            <td>{row.value3 || '-'}</td>
            <td>{row.price || 0}</td>
            <td>{row.digits || '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: TableData[] = [
  {
    id: '1',
    date1: '2017/9/1',
    date2: '2017/9/1',
    value1: '収納(基本・経過)',
    value2: 'ぎょうせい地区',
    value3: '平成28年11月分',
    price: 1000,
    digits: '1000 0 0 0 1',
  },
  {
    id: '2',
    date1: '2017/9/20',
    date2: '2017/9/20',
    value1: '収納(基本・経過)',
    value2: 'ぎょうせい地区',
    value3: '平成29年1月分',
    price: 2240,
    digits: '2133 107 0 0 1',
  },
  // 他のサンプルデータ...
];

// サンプルデータを使用したテーブルコンポーネントの表示
export default function App() {
  return (
    <div>
      <h1>サンプルテーブル</h1>
      <SampleTable data={sampleData} />
    </div>
  );
}