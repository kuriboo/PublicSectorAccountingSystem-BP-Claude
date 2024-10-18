// InspectionScheduleTable.tsx
import React from 'react';
import styled from '@emotion/styled';

// 検査項目の型定義
type InspectionItem = {
  id: string;
  name: string;
  time: string;
};

// コンポーネントのProps型定義
type Props = {
  inspectionItems: InspectionItem[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

// 検査項目テーブルコンポーネント
const InspectionScheduleTable: React.FC<Props> = ({ inspectionItems }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>検査項目</th>
          <th>検査結果</th>
        </tr>
      </thead>
      <tbody>
        {inspectionItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InspectionScheduleTable;

// 使用例
const SampleInspectionSchedule: React.FC = () => {
  // サンプルデータ
  const sampleData: InspectionItem[] = [
    { id: '001', name: '水漏', time: '01:なし' },
    { id: '002', name: '漏電', time: '01:なし' },
    { id: '003', name: '障害', time: '02:やや有り' },
    { id: '004', name: 'ひび割れ', time: '01:なし' },
    { id: '005', name: 'クラック', time: '01:なし' },
    { id: '006', name: '連結リサイクル法', time: '03:適用外' },
    { id: '007', name: '総合評価', time: '02:B' },
    { id: '008', name: '修繕要否', time: '02:経過観察' },
    { id: '010', name: '備考', time: '03:不要' },
  ];

  return (
    <div>
      <h2>検査項目一覧</h2>
      <InspectionScheduleTable inspectionItems={sampleData} />
    </div>
  );
};