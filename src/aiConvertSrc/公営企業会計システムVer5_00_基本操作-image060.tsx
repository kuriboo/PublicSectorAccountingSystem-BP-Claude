import React from 'react';
import styled from 'styled-components';

// 行のデータ型定義
type RowData = {
  year: number;
  branch: string;
  code: string;
  childCode1?: string;
  childCode2?: string;
  childCode3?: string;
  childCodeName1?: string;
  childCodeName2?: string;
  test1: string;
  test2?: string;
  test3?: string;
  test4?: string;
  test5?: string;
};

// テーブルのプロパティ型定義
type TableProps = {
  data: RowData[];
};

// テーブルのスタイリング
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>会計年度</th>
          <th>予算</th>
          <th>事業コード</th>
          <th>項コード</th>
          <th>目コード</th>
          <th>節コード</th>
          <th>細節コード</th>
          <th>明細コード</th>
          <th>名称</th>
          <th>テスト</th>
          <th>テスト3</th>
          <th>加入金</th>
          <th>次年度繰越金</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.branch}</td>
            <td>{row.code}</td>
            <td>{row.childCode1 || '--'}</td>
            <td>{row.childCode2 || '--'}</td>
            <td>{row.childCode3 || '--'}</td>
            <td>{row.childCodeName1 || '----'}</td>
            <td>{row.childCodeName2 || '----'}</td>
            <td>{row.test1}</td>
            <td>{row.test2 || '--'}</td>
            <td>{row.test3 || '--'}</td>
            <td>{row.test4 || '--'}</td>
            <td>{row.test5 || '--'}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

// サンプルデータ
const sampleData: RowData[] = [
  {
    year: 2018,
    branch: '予算',
    code: '001',
    childCode1: '01',
    childCode2: '01',
    childCode3: '01',
    childCodeName1: '0001',
    childCodeName2: '0002',
    test1: '001',
    test2: '01',
    test3: '01',
    test4: '01',
    test5: '01',
  },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>テーブル例</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default App;