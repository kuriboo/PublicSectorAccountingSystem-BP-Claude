import React from 'react';
import styled from 'styled-components';

// 予算編成マスタの型定義
type ReserveMaster = {
  code: number;
  name: string;
  startDate: string;
}

// 予算編成マスタコンポーネントのプロパティ
type ReserveMasterProps = {
  reserveMasters: ReserveMaster[];
}

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 予算編成マスタコンポーネント
const ReserveMasterComponent: React.FC<ReserveMasterProps> = ({ reserveMasters }) => {
  // 予算編成マスタが空の場合の処理
  if (!reserveMasters || reserveMasters.length === 0) {
    return <div>予算編成マスタが登録されていません。</div>;
  }

  return (
    <Container>
      <Title>予算編成マスタ</Title>
      <Table>
        <thead>
          <tr>
            <th>予算編成区分コード</th>
            <th>名称</th>
            <th>予算編成開始月日</th>
          </tr>
        </thead>
        <tbody>
          {reserveMasters.map(master => (
            <tr key={master.code}>
              <td>{master.code}</td>
              <td>{master.name}</td>
              <td>{master.startDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReserveMasterComponent;

// 使用例
const sampleData = [
  { code: 0, name: '当初予算', startDate: '令和02年04月01日' },
  { code: 1, name: '補正①', startDate: '令和02年04月01日' },
  { code: 2, name: '第1号補正予算', startDate: '令和02年04月01日' },
  { code: 3, name: '決算見込', startDate: '令和02年04月01日' },
];

const UsageExample = () => {
  return (
    <div>
      <h2>予算編成マスタ</h2>
      <ReserveMasterComponent reserveMasters={sampleData} />
    </div>
  );
};