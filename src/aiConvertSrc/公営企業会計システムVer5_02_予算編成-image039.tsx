import React from 'react';
import styled from 'styled-components';

// 事業部署登録情報の型定義
type CompanyData = {
  code: string;
  name: string;
  sales: number;
  profit: number;
  count: number;
};

// コンポーネントのProps型定義
type Props = {
  data: CompanyData[];
};

// スタイリング用のコンポーネント
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

const CompanyTable: React.FC<Props> = ({ data }) => {
  // 合計値の計算
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0);
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Table>
      <thead>
        <tr>
          <th>事業</th>
          <th>種別</th>
          <th>当年度</th>
          <th>前年度</th>
          <th>比較</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.sales}</td>
            <td>{item.profit}</td>
            <td>{item.count}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>合計</td>
          <td>{totalSales}</td>
          <td>{totalProfit}</td>
          <td>{totalCount}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: CompanyData[] = [
  { code: '01', name: '日本航空', sales: 76, profit: 0, count: 76 },
  { code: '01', name: '日本航空(国際)', sales: 71, profit: 0, count: 71 },
  { code: '001', name: '宿泊・輸送等', sales: 5, profit: 0, count: 5 },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>事業部署登録情報</h2>
      <CompanyTable data={sampleData} />
    </div>
  );
};

export default App;