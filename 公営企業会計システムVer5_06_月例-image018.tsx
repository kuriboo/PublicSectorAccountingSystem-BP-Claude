import React from 'react';
import styled from 'styled-components';

// 予算流用戻し入力フォームのプロパティ型定義
type FormProps = {
  date: string;
  onDateChange: (date: string) => void;
  note: string;
  onNoteChange: (note: string) => void;
  percentage: number;
  onPercentageChange: (percentage: number) => void;
  onSubmit: () => void;
};

// 予算流用戻し入力フォームコンポーネント
const Form: React.FC<FormProps> = ({
  date,
  onDateChange,
  note,
  onNoteChange,
  percentage,
  onPercentageChange,
  onSubmit,
}) => {
  return (
    <StyledForm>
      <div>
        <label>
          流用元日付:{' '}
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          摘要:{' '}
          <input
            type="text"
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          流用導入振戻予算の％:{' '}
          <input
            type="number"
            value={percentage}
            onChange={(e) => onPercentageChange(Number(e.target.value))}
            min={0}
            max={100}
            required
          />
        </label>
      </div>
      <button type="button" onClick={onSubmit}>
        登録
      </button>
    </StyledForm>
  );
};

// テーブル行のプロパティ型定義
type RowProps = {
  date: string;
  division: string;
  item: string;
  note: string;
  amount: number;
  restoredAmount: number;
};

// テーブル行コンポーネント
const TableRow: React.FC<RowProps> = ({
  date,
  division,
  item,
  note,
  amount,
  restoredAmount,
}) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{division}</td>
      <td>{item}</td>
      <td>{note}</td>
      <td>{amount.toLocaleString()}</td>
      <td>{restoredAmount.toLocaleString()}</td>
    </tr>
  );
};

// テーブルのプロパティ型定義
type TableProps = {
  data: RowProps[];
};

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  // データが空の場合の処理
  if (data.length === 0) {
    return <p>データがありません。</p>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>日付</th>
          <th>部門</th>
          <th>明細</th>
          <th>摘要</th>
          <th>金額</th>
          <th>予算残額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </tbody>
    </StyledTable>
  );
};

// スタイリング
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin-bottom: 2rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 使用例
const sampleData: RowProps[] = [
  {
    date: '2023-09-04',
    division: '原発・委託材',
    item: '分析測定業務委託',
    note: '水運用センター',
    amount: 30000,
    restoredAmount: 208824544,
  },
  {
    date: '2023-09-04',
    division: '原発・委託材',
    item: '施設管理業務委託',
    note: '485-1755',
    amount: 30000,
    restoredAmount: 30000,
  },
];

const App: React.FC = () => {
  // 状態管理（実際の使用ではフォームの状態管理が必要）
  const handleSubmit = () => {
    // フォームの送信処理
  };

  return (
    <div>
      <h1>予算流用戻し入力</h1>
      <Form
        date=""
        onDateChange={() => {}}
        note=""
        onNoteChange={() => {}}
        percentage={0}
        onPercentageChange={() => {}}
        onSubmit={handleSubmit}
      />
      <h2>流用料</h2>
      <Table data={sampleData} />
      <h2>増額料</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default App;