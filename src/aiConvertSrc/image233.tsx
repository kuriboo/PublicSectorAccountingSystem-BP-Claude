import React from 'react';
import styled from 'styled-components';

// 決裁区分テーブルの型定義
type DecisionCategory = {
  id: string;
  name: string;
};

// 決裁区分テーブルのプロパティ
type DecisionCategoryTableProps = {
  data: DecisionCategory[];
};

// 決裁区分テーブルのコンポーネント
const DecisionCategoryTable: React.FC<DecisionCategoryTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <HeaderCell>決裁区分コード</HeaderCell>
          <HeaderCell>決裁区分名称</HeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {data.map((category) => (
          <TableRow key={category.id}>
            <BodyCell>{category.id}</BodyCell>
            <BodyCell>{category.name}</BodyCell>
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const BodyCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

// サンプルデータ
const sampleData: DecisionCategory[] = [
  { id: '01', name: '管理者 予物' },
  { id: '02', name: '部長 予物' },
  { id: '03', name: '総務課長 予物' },
  { id: '04', name: '所管課長予物' },
  { id: '06', name: '管理者 負物' },
  { id: '08', name: '部長 負物' },
  { id: '09', name: '総務課長負物' },
  { id: '10', name: '所管課長負物' },
  { id: '11', name: '部長 予工' },
  { id: '12', name: '総務課長予工' },
  { id: '13', name: '所管課長予工' },
  { id: '14', name: '部長 負工' },
  { id: '15', name: '総務課長負工' },
  { id: '16', name: '所管課長負工' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>決裁区分テーブル</h1>
      <DecisionCategoryTable data={sampleData} />
    </div>
  );
};

export default App;