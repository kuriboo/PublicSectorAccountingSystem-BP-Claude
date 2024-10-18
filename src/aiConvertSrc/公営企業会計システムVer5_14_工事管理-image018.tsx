import React from 'react';
import styled from 'styled-components';

// 工事台帳の型定義
interface ContractorRecord {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  amount: number;
}

// ContractorRecordItemコンポーネントの型定義
interface ContractorRecordItemProps {
  record: ContractorRecord;
}

// ContractorRecordItemコンポーネント
const ContractorRecordItem: React.FC<ContractorRecordItemProps> = ({ record }) => {
  return (
    <tr>
      <td>{record.id}</td>
      <td>{record.name}</td>
      <td>{record.unitPrice}</td>
      <td>{record.quantity}</td>
      <td>{record.amount}</td>
    </tr>
  );
};

// ContractorRecordTableコンポーネントの型定義
interface ContractorRecordTableProps {
  records: ContractorRecord[];
}

// ContractorRecordTableコンポーネント
const ContractorRecordTable: React.FC<ContractorRecordTableProps> = ({ records }) => {
  // レコードが空の場合の処理
  if (records.length === 0) {
    return <p>工事台帳のデータがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>関連区分</th>
          <th>収支区分</th>
          <th>年度</th>
          <th>番号</th>
          <th>税抜金額</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <ContractorRecordItem key={record.id} record={record} />
        ))}
      </tbody>
    </Table>
  );
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

// サンプルデータ
const sampleData: ContractorRecord[] = [
  {
    id: 1,
    name: '工事1',
    unitPrice: 16000,
    quantity: 5,
    amount: 80000,
  },
  {
    id: 2,
    name: '工事2',
    unitPrice: 20000,
    quantity: 3,
    amount: 60000,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>工事台帳</h1>
      <ContractorRecordTable records={sampleData} />
    </div>
  );
};

export default App;