import React from 'react';
import styled from 'styled-components';

// 型定義
type ApplicationMasterProps = {
  data?: {
    code: string;
    title: string;
    groupCode: string;
  }[];
};

// スタイル定義
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

// アプリケーションマスタコンポーネント
const ApplicationMaster: React.FC<ApplicationMasterProps> = ({ data }) => {
  // データが空の場合は空のフラグメントを返す
  if (!data || data.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <Title>アプリケーションマスタ</Title>
      <Table>
        <thead>
          <tr>
            <th>画面タイトルコード</th>
            <th>画面タイトル</th>
            <th>APグループコード</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.title}</td>
              <td>{item.groupCode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData = [
  { code: 'BFD1010', title: '当年度データ作成', groupCode: '00000008' },
  { code: 'BFD1100', title: '単価計算', groupCode: '00000006' },
  { code: 'BFD1030', title: '当初予算データ作成', groupCode: '00000006' },
  { code: 'BFD1040', title: 'シーリング設定', groupCode: '00000006' },
  { code: 'BFD1050', title: '枠配分登録', groupCode: '00000006' },
  { code: 'BFD2010', title: '予算データ削除', groupCode: '00000006' },
  { code: 'BFD2011', title: '施策単位明細登録', groupCode: '00000008' },
  { code: 'BFD2020', title: '施策内訳別決算見込登録', groupCode: '00000006' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>公営企業会計システム</h1>
      <ApplicationMaster data={sampleData} />
    </div>
  );
};

export default App;