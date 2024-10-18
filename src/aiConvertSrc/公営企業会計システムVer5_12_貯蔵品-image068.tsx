import React from 'react';
import styled from 'styled-components';

// 売上データの型定義
type SalesData = {
  category: string;
  subCategory: string;
  currentMonth: number;
  previousMonth: number;
  yearToDate: number;
  previousYearToDate: number;
};

// SalesTableコンポーネントのプロパティの型定義
type SalesTableProps = {
  data: SalesData[];
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  // レスポンシブデザイン
  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

// 売上テーブルコンポーネント
const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
  // 合計値の計算
  const totalCurrentMonth = data.reduce((sum, item) => sum + item.currentMonth, 0);
  const totalPreviousMonth = data.reduce((sum, item) => sum + item.previousMonth, 0);
  const totalYearToDate = data.reduce((sum, item) => sum + item.yearToDate, 0);
  const totalPreviousYearToDate = data.reduce((sum, item) => sum + item.previousYearToDate, 0);

  return (
    <Table>
      <thead>
        <tr>
          <th>区分</th>
          <th>小区分</th>
          <th>当月</th>
          <th>前月</th>
          <th>当期</th>
          <th>前期</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.subCategory}</td>
            <td>{item.currentMonth.toLocaleString()}</td>
            <td>{item.previousMonth.toLocaleString()}</td>
            <td>{item.yearToDate.toLocaleString()}</td>
            <td>{item.previousYearToDate.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={2}>合計</th>
          <td>{totalCurrentMonth.toLocaleString()}</td>
          <td>{totalPreviousMonth.toLocaleString()}</td>
          <td>{totalYearToDate.toLocaleString()}</td>
          <td>{totalPreviousYearToDate.toLocaleString()}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

// サンプルデータ
const sampleData: SalesData[] = [
  {
    category: '売上高',
    subCategory: '小売',
    currentMonth: 6383.40,
    previousMonth: 6674.19,
    yearToDate: 6383.40,
    previousYearToDate: 0,
  },
  {
    category: '売上高',
    subCategory: 'ﾎｰﾙｾｰﾙ',
    currentMonth: 8028.76,
    previousMonth: 8674.25,
    yearToDate: 8028.76,
    previousYearToDate: 0,
  },
  {
    category: '売上高',
    subCategory: 'その他',
    currentMonth: 8383.95,
    previousMonth: 8891.62,
    yearToDate: 8383.95,
    previousYearToDate: 0,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>売上テーブル</h1>
      <SalesTable data={sampleData} />
    </div>
  );
};

export default App;