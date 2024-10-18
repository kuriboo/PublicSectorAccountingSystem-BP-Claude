import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  節: string;
  細節: string;
  明細: string;
  配賦比率: number;
  設計金額: number;
  設計金額_税込: number;
  設計金額_消費税: number;
};

type ReservationTableProps = {
  data: ReservationData[];
};

type DateSelectionProps = {
  予算節: string;
  予算細節: string;
  予算明細: string;
  配賦比率: number;
  設計金額_税込: number;
  設計金額_税抜: number;
  設計金額_消費税: number;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const DateSelectionContainer = styled.div`
  margin-top: 16px;
`;

const DateInput = styled.input`
  margin-right: 8px;
  padding: 4px;
`;

// 予算内訳テーブルコンポーネント
const ReservationTable: React.FC<ReservationTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>節</th>
          <th>細節</th>
          <th>明細</th>
          <th>配賦比率</th>
          <th>設計金額</th>
          <th>設計金額(税込)</th>
          <th>設計金額(消費税)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.節}</td>
            <td>{item.細節}</td>
            <td>{item.明細}</td>
            <td>{item.配賦比率}</td>
            <td>{item.設計金額.toLocaleString()}</td>
            <td>{item.設計金額_税込.toLocaleString()}</td>
            <td>{item.設計金額_消費税.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// 予算日選択コンポーネント 
const DateSelection: React.FC<DateSelectionProps> = ({
  予算節,
  予算細節,
  予算明細,
  配賦比率,
  設計金額_税込,
  設計金額_税抜,
  設計金額_消費税,
}) => {
  return (
    <DateSelectionContainer>
      <label>予算科目</label>
      <div>
        <DateInput type="text" value={予算節} readOnly />
        <DateInput type="text" value={予算細節} readOnly />
        <DateInput type="text" value={予算明細} readOnly />
      </div>
      <div>
        <label>配賦比率:</label>
        <DateInput type="number" value={配賦比率} readOnly />%
      </div>
      <div>
        <label>設計金額(税込):</label>
        <DateInput type="number" value={設計金額_税込} readOnly />
      </div>
      <div>
        <label>設計金額(税抜):</label>
        <DateInput type="number" value={設計金額_税抜} readOnly />
      </div>
      <div>
        <label>設計金額(消費税):</label>
        <DateInput type="number" value={設計金額_消費税} readOnly />
      </div>
    </DateSelectionContainer>
  );
};

// サンプルデータ
const sampleData: ReservationData[] = [
  {
    節: '節水管理部門',
    細節: '節水管理工事',
    明細: '機器交換工事費',
    配賦比率: 0,
    設計金額: 782000,
    設計金額_税込: 724075,
    設計金額_消費税: 57925,
  },
  {
    節: '節水管理部門',
    細節: '節水管理改良工事',
    明細: '整地・変地工事費',
    配賦比率: 0,
    設計金額: 1250000,  
    設計金額_税込: 1157408,
    設計金額_消費税: 92592,
  },
  {
    節: '節水管理部門',
    細節: '節水管理改良工事',
    明細: '埋設・変地工事費',
    配賦比率: 0,
    設計金額: 1186200,
    設計金額_税込: 1098334,
    設計金額_消費税: 87866,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>予算内訳</h2>
      <ReservationTable data={sampleData} />
      <DateSelection
        予算節=""
        予算細節=""
        予算明細=""
        配賦比率={0}
        設計金額_税込={0} 
        設計金額_税抜={0}
        設計金額_消費税={0}
      />
    </div>
  );
};

export default App;