import React from 'react';
import styled from '@emotion/styled';

// 工事台帳の型定義
type ConstructionRecord = {
  id: number;
  name: string;
  section: string;
  field: string;
  flag: string;
  note: string;
};

// コンポーネントのProps型定義
interface ConstructionTableProps {
  records: ConstructionRecord[];
  fiscalYear: number;
}

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
`;

// 工事台帳テーブルコンポーネント
const ConstructionTable: React.FC<ConstructionTableProps> = ({ records, fiscalYear }) => {
  if (!records || records.length === 0) {
    return <p>表示するデータがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>工事台帳番号</TableHeader>
          <TableHeader>工事名称</TableHeader>
          <TableHeader>工事場所</TableHeader>
          <TableHeader>フラグ</TableHeader>
          <TableHeader>摘要</TableHeader>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <TableCell>{record.id}</TableCell>
            <TableCell>{record.name}</TableCell>
            <TableCell>
              {record.section}
              {record.field === '(第1工区)' || record.field === '(第1・2工区)' ? record.field : ''}
            </TableCell>
            <TableCell>{record.flag}</TableCell>
            <TableCell>{record.note}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: ConstructionRecord[] = [
  { id: 1, name: '〇〇地区配水管改良工事', section: '〇〇', field: '', flag: '継続', note: 'H29年度' },
  { id: 2, name: '工事台帳登録', section: '', field: '', flag: '計上', note: 'H29年度' },
  { id: 3, name: '下水道工事に伴う配水管移設工事', section: '', field: '(第1工区)', flag: '計上', note: 'H29年度' },
  { id: 4, name: '下水道工事に伴う配水管移設工事', section: '', field: '(第1・2工区)', flag: '計上', note: 'H29年度' },
];

// サンプル表示用コンポーネント
const SampleConstructionTable: React.FC = () => {
  return (
    <div>
      <h2>平成29年 工事指示入力</h2>
      <ConstructionTable records={sampleData} fiscalYear={29} />
    </div>
  );
};

export default SampleConstructionTable;