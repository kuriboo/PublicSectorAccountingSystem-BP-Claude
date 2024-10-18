import React from 'react';
import styled from 'styled-components';

// 資金予算予定入力のデータ型定義
type BudgetData = {
  category: string;
  currentMonth: number;
  nextMonth: number;
};

// 資金予算予定入力コンポーネントのプロパティ型定義
type BudgetTableProps = {
  data: BudgetData[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      margin-bottom: 10px;
    }
  }
`;

// 合計行のスタイル定義
const TotalRow = styled.tr`
  font-weight: bold;
`;

/**
 * 資金予算予定入力テーブルコンポーネント
 */
const BudgetTable: React.FC<BudgetTableProps> = ({ data }) => {
  // 当月と翌月の合計を計算
  const currentMonthTotal = data.reduce((sum, item) => sum + item.currentMonth, 0);
  const nextMonthTotal = data.reduce((sum, item) => sum + item.nextMonth, 0);

  return (
    <Table>
      <thead>
        <tr>
          <th>項目名称</th>
          <th>当月金額</th> 
          <th>翌月金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.currentMonth.toLocaleString()}</td>
            <td>{item.nextMonth.toLocaleString()}</td>
          </tr>
        ))}
        <TotalRow>
          <td>合計</td>
          <td>{currentMonthTotal.toLocaleString()}</td>
          <td>{nextMonthTotal.toLocaleString()}</td>
        </TotalRow>
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: BudgetData[] = [
  { category: '水道事業収益（前受金除く）', currentMonth: 7000, nextMonth: 6000 },  
  { category: '給水収益', currentMonth: 7000, nextMonth: 6000 },
  { category: '受託工事収益', currentMonth: 0, nextMonth: 0 },
  { category: '下水道使用料等預り金', currentMonth: 0, nextMonth: 0 },
  { category: '特別利益', currentMonth: 0, nextMonth: 0 },
  { category: '工事負担金', currentMonth: 0, nextMonth: 0 },
  { category: 'その他', currentMonth: 0, nextMonth: 0 },  
  { category: '資本的収入（前受金除く）', currentMonth: 0, nextMonth: 0 },
  { category: '企業債', currentMonth: 0, nextMonth: 0 },  
  { category: '工事負担金', currentMonth: 0, nextMonth: 0 },
  { category: '補助金', currentMonth: 0, nextMonth: 0 },
  { category: '受託金', currentMonth: 0, nextMonth: 0 },
  { category: '国庫補助金収入', currentMonth: 0, nextMonth: 0 },
  { category: '投資有価証券預金', currentMonth: 0, nextMonth: 0 },
  { category: '出資金', currentMonth: 0, nextMonth: 0 },
  { category: 'その他収入', currentMonth: 0, nextMonth: 0 },
  { category: '過年度未収金', currentMonth: 0, nextMonth: 0 },    
];

// サンプルデータを使用して資金予算予定入力テーブルを表示
const App: React.FC = () => {
  return (
    <div>
      <h2>資金予算予定入力</h2>
      <BudgetTable data={sampleData} />
    </div>
  );  
};

export default App;