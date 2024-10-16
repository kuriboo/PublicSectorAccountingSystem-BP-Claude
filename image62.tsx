以下のように、TypeScriptとNext.jsを用いてコンポーネントを実装しました。

```tsx
import React from 'react';
import styled from '@emotion/styled';

// 収支データの型定義
type IncomeExpenseData = {
  category: string;
  amount: number;
};

// 収支合計の型定義
type TotalData = {
  incomeTotal: number;
  expenseTotal: number;
  total: number;
};

// コンポーネントのプロパティの型定義
type FinancialStatementProps = {
  incomeData: IncomeExpenseData[];
  expenseData: IncomeExpenseData[];
  totalData: TotalData;
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TotalTable = styled.table`
  width: 300px;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// 収支のテーブルを生成するコンポーネント
const IncomeExpenseTable: React.FC<{ data: IncomeExpenseData[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>データがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>項目</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.amount.toLocaleString()}円</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// 収支合計のテーブルを生成するコンポーネント 
const TotalDataTable: React.FC<TotalData> = ({ incomeTotal, expenseTotal, total }) => {
  return (
    <TotalTable>
      <tbody>
        <tr>
          <th>収入合計</th>
          <td>{incomeTotal.toLocaleString()}円</td>
        </tr>
        <tr>
          <th>支出合計</th>
          <td>{expenseTotal.toLocaleString()}円</td>
        </tr>
        <tr>
          <th>合計</th>
          <td>{total.toLocaleString()}円</td>
        </tr>
      </tbody>
    </TotalTable>
  );
};

// 収支報告書のメインコンポーネント
const FinancialStatement: React.FC<FinancialStatementProps> = ({ incomeData, expenseData, totalData }) => {
  return (
    <div>
      <h2>収入の部</h2>
      <IncomeExpenseTable data={incomeData} />
      
      <h2>支出の部</h2>
      <IncomeExpenseTable data={expenseData} />
      
      <h2>合計</h2>
      <TotalDataTable {...totalData} />
    </div>
  );
};

// サンプルデータ
const sampleData: FinancialStatementProps = {
  incomeData: [
    { category: '事業収入', amount: 4181009 },
    { category: 'その他', amount: 5000 },
  ],
  expenseData: [
    { category: '商品仕入', amount: 2970000 },
    { category: '支払手数料', amount: 5200 },
    { category: '法人税等充当金', amount: 221000 },
    { category: '地方法人税等', amount: 21000 },
    { category: '事業税', amount: 35000 },
  ],
  totalData: {
    incomeTotal: 4186009,
    expenseTotal: 3252200,
    total: 933809,
  },
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>令和3年度収支報告書</h1>
      <FinancialStatement {...sampleData} />
    </div>
  );
};

export default App;
```

ポイントは以下の通りです。

- 収支データと収支合計データの型定義を行い、コンポーネントのプロパティにも型を指定
- emotion/styledを使ってCSS-in-JSでスタイリング
- レスポンシブデザインを考慮し、モバイル表示にも対応
- 収支のテーブルと収支合計のテーブルをそれぞれ別コンポーネントとして作成し、再利用性を高める
- データがない場合の例外処理を追加
- サンプルデータを定義し、使用例としてAppコンポーネントを実装

これにより、再利用可能で、データに応じた表示が可能な収支報告書のコンポーネントが実装できました。必要に応じてプロパティを変更することで、様々な収支データを表示できます。