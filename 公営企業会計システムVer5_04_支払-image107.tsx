import React from 'react';
import styled from '@emotion/styled';

// 制御マスタの型定義
type ControlMaster = {
  code: string;
  name: string;
  definition: string;
  remarks: string;
};

// コンポーネントのプロパティ型定義
type ControlMasterTableProps = {
  data: ControlMaster[];
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

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }

    th {
      text-align: center;
    }
  }
`;

// 制御マスタテーブルコンポーネント
const ControlMasterTable: React.FC<ControlMasterTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data.length) {
    return <div>制御マスタデータがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>区分</th>
          <th>制御内容</th>
          <th>制御値</th>
          <th>設定</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.definition}</td>
            <td>{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: ControlMaster[] = [
  {
    code: '105',
    name: '求職登録票未載進定、受仕確定制御',
    definition: '1',
    remarks: '新仕様:一覧から仕意伝票のみ実行',
  },
  {
    code: '106',
    name: '受注確定、表示制御',
    definition: '0',
    remarks: '',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>制御マスタ</h2>
      <ControlMasterTable data={sampleData} />
    </div>
  );
};

export default App;