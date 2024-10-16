import React from 'react';
import styled from 'styled-components';

// 検査項目の型定義
type InspectionItem = {
  id: string;
  name: string;
  result: string;
};

// コンポーネントのプロパティの型定義
type InspectionResultsProps = {
  items: InspectionItem[];
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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// 検査結果テーブルコンポーネント
const InspectionResults: React.FC<InspectionResultsProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>検査項目</th>
          <th>検査結果</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.result}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// テストデータ
const testData: InspectionItem[] = [
  { id: '001', name: '水漏', result: '01:なし' },
  { id: '002', name: '亀裂', result: '01:なし' },
  { id: '003', name: '腐食', result: '02:やや有り' },
  { id: '004', name: 'ひび割れ', result: '01:なし' },
  { id: '005', name: 'クラック', result: '01:なし' },
  { id: '006', name: '連結リサイクル法', result: '03:適用外' },
  { id: '007', name: '総合評価', result: '02:B' },
  { id: '008', name: '修繕要否', result: '02:経過観察' },
  { id: '010', name: '破損', result: '02:不足' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>検結果検査項目</h2>
      <InspectionResults items={testData} />
    </div>
  );
};

export default App;