import React from 'react';
import styled from '@emotion/styled';

// 型定義
type MasterListProps = {
  masterData: {
    openId: string;
    closeId: string;
    startRange: string;
    endRange: string;
    apValueRange: string;
  };
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f9f9f9;
  }
`;

// マスタリストコンポーネント
const MasterList: React.FC<MasterListProps> = ({ masterData }) => {
  // プロパティが空の場合の処理
  if (!masterData) {
    return <div>マスタデータがありません。</div>;
  }

  const { openId, closeId, startRange, endRange, apValueRange } = masterData;

  return (
    <Container>
      <Title>範囲指定</Title>
      <Table>
        <tbody>
          <tr>
            <th>所属</th>
            <td>{openId}</td>
            <td>～</td>
            <td>{closeId}</td>
          </tr>
          <tr>
            <th>担当コード</th>
            <td>{startRange}</td>
            <td>～</td>
            <td>{endRange}</td>
          </tr>
          <tr>
            <th>APグループコード</th>
            <td colSpan={3}>{apValueRange}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleData = {
  openId: '0000001',
  closeId: '9999999',
  startRange: '000',
  endRange: '999',
  apValueRange: '00000000 ～ 99999999',
};

const UsageExample = () => {
  return (
    <div>
      <h1>マスタリストの使用例</h1>
      <MasterList masterData={SampleData} />
    </div>
  );
};

export default UsageExample;