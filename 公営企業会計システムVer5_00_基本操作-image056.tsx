import React from 'react';
import styled from 'styled-components';

// 予算仕訳テーブルのプロパティ型定義
type BudgetJournalProps = {
  data: {
    year: number;
    entries: {
      [key: string]: number | null;
    }[];
  }[];
};

// 予算仕訳テーブルコンポーネント
const BudgetJournalTable: React.FC<BudgetJournalProps> = ({ data }) => {
  // テーブルヘッダー
  const headers = ['', '会計年度（半角西暦）', ...Object.keys(data[0].entries[0]).slice(1)];

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              <td>{row.year}</td>
              {Object.values(row.entries[0]).slice(1).map((value, colIndex) => (
                <td key={colIndex}>{value ?? '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleData = [
  {
    year: 2018,
    entries: [
      {
        予算: 1,
        執行: 1,
        繰越: 1,
        戻入: null,
        予算現額: null,
        支出: null,
        翌年度繰越: null,
        不用額: null,
        国庫金額: 1,
        一般財源: null,
        特定財源_その他: null,
        特定財源_地方債: null,
        特定財源_国県支出金: null,
        前年度繰越事業費充当特定財源: 6,
        前年度繰越事業費充当一般財源: 100,
      },
    ],
  },
  // ... 他の年度のデータ
];

// 使用例
const App = () => {
  return (
    <div>
      <h1>予算仕訳テーブル</h1>
      <BudgetJournalTable data={sampleData} />
    </div>
  );
};

export default App;