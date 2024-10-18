以下は、Next.js + TypeScriptを使用して、画像の会計連携データ出力画面をコンポーネント化したコードです。

```typescript
import React from 'react';
import styled from 'styled-components';

// 会計連携データ出力の型定義
type AccountingData = {
  id: number;
  division: string;
  year: number;
  startDate: string;
  endDate: string;
  issuedAmount: number;
  taxAmount: number;
  totalAmount: number;
};

// 会計連携データ出力のプロパティ型定義
type AccountingDataOutputProps = {
  data: AccountingData[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// 会計連携データ出力コンポーネント
const AccountingDataOutput: React.FC<AccountingDataOutputProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>事業区分(大)</th>
          <th>事業区分(小)</th>
          <th>会計年度</th>
          <th>業務区分</th>
          <th>調定年度</th>
          <th>摘要</th>
          <th>金額</th>
          <th>合計金額</th>
          <th>使用料消費税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>ぎょうせい地区</td>
            <td>ぎょうせい地区</td>
            <td>{item.year}</td>
            <td>収入</td>
            <td>{item.year}</td>
            <td>
              収納(基本+{item.startDate.slice(5)} ~ {item.endDate.slice(5)})
            </td>
            <td>{item.issuedAmount.toLocaleString()}</td>
            <td>{item.totalAmount.toLocaleString()}</td>
            <td>{item.taxAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: AccountingData[] = [
  {
    id: 1,
    division: '水道事業',
    year: 2017,
    startDate: '2017/09/01',
    endDate: '2017/09/25',
    issuedAmount: 1000,
    taxAmount: 0,
    totalAmount: 1000,
  },
  {
    id: 2,
    division: '水道事業',
    year: 2017,
    startDate: '2017/09/20',
    endDate: '2017/09/29',
    issuedAmount: 2240,
    taxAmount: 107,
    totalAmount: 2133,
  },
  {
    id: 3,
    division: '下水道事業',
    year: 2017,
    startDate: '2017/09/20',
    endDate: '2017/09/29',
    issuedAmount: 1760,
    taxAmount: 130,
    totalAmount: 1630,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>会計連携データ出力</h1>
      <AccountingDataOutput data={sampleData} />
    </div>
  );
};

export default App;
```

このコードでは、以下の点に注意しています：

1. TypeScriptの型定義を使用し、`AccountingData`と`AccountingDataOutputProps`の型を定義しています。
2. styled-componentsを使用してCSSスタイルを定義し、レスポンシブデザインを考慮しています。
3. `AccountingDataOutput`コンポーネントは、プロパティ`data`を受け取り、テーブル形式で会計連携データを表示します。
4. `map`関数を使用して、データの配列をテーブルの行に変換しています。
5. サンプルデータを定義し、`App`コンポーネント内で`AccountingDataOutput`コンポーネントを使用しています。
6. 数値は`toLocaleString`メソッドを使用してカンマ区切りの文字列に変換しています。
7. 日付は`slice`メソッドを使用して必要な部分のみを表示しています。

このコンポーネントを使用することで、会計連携データを整形されたテーブル形式で表示することができます。プロパティ`data`に異なるデータを渡すことで、様々な会計連携データに対応できます。