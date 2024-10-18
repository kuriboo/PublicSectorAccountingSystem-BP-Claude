```typescript
import React from 'react';
import styled from 'styled-components';

// CSVデータの型定義
type CsvData = {
  [key: string]: string;
}[];

// CSVTableコンポーネントのプロパティ型定義
interface CsvTableProps {
  data: CsvData;
}

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
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

// CSVTableコンポーネント
const CsvTable: React.FC<CsvTableProps> = ({ data }) => {
  // ヘッダー行の取得
  const headerRow = data[0];

  // データ行の取得
  const dataRows = data.slice(1);

  return (
    <Table>
      <thead>
        <tr>
          {/* ヘッダー行のセル */}
          {Object.values(headerRow).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* データ行のセル */}
        {dataRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: CsvData = [
  { A: 'CSV取込', B: 'クリア', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '' },
  // ... 省略
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>CSVテーブル</h1>
      <CsvTable data={sampleData} />
    </div>
  );
};

export default App;
```

上記のコードでは、CSVデータをテーブル形式で表示するCSVTableコンポーネントを実装しています。主な特徴は以下の通りです：

1. TypeScriptの型定義を使用し、CsvDataとCsvTablePropsの型を定義しています。
2. styled-componentsを使用してテーブルのスタイリングを行っています。レスポンシブデザインを考慮し、モバイル画面でのフォントサイズ調整も行っています。
3. コンポーネントのプロパティとしてdataを受け取り、再利用可能な形式になっています。
4. ヘッダー行とデータ行を別々にマッピングし、テーブルのヘッダーと本体を生成しています。
5. コメントを適宜記載し、コードの理解を助けています。
6. サンプルデータを用意し、使用例としてAppコンポーネントでCSVTableコンポーネントを呼び出しています。

これにより、CSVデータをテーブル形式で表示するコンポーネントが完成します。プロパティを通じてデータを渡すことで、異なるCSVデータにも対応できる汎用的なコンポーネントとなっています。