// 権限マスタリスト作成コンポーネント
import React from 'react';
import styled from 'styled-components';

// 権限マスタリストの型定義
type AuthorizationMasterListProps = {
  gamenId: string;
  kengenCode: string;
  startDate: string;
  endDate: string;
  apGroupCode: string;
};

// 権限マスタリストコンポーネント
const AuthorizationMasterList: React.FC<AuthorizationMasterListProps> = ({
  gamenId,
  kengenCode,
  startDate,
  endDate,
  apGroupCode,
}) => {
  return (
    <Container>
      <Title>範囲指定</Title>
      <TableContainer>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>所属</TableHeader>
              <TableData>{kengenCode}</TableData>
              <TableHeader>～</TableHeader>
              <TableData>{kengenCode}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>担当コード</TableHeader>
              <TableData>{startDate}</TableData>
              <TableHeader>～</TableHeader>
              <TableData>{endDate}</TableData>
            </TableRow>
            <TableRow>
              <TableHeader>APグループコード</TableHeader>
              <TableData>{apGroupCode}</TableData>
              <TableHeader>～</TableHeader>
              <TableData>{apGroupCode}</TableData>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  background-color: white;
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const TableHeader = styled.td`
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  text-align: left;
  white-space: nowrap;
  width: 1px;
`;

const TableData = styled.td`
  font-size: 14px;
  padding: 5px 10px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: AuthorizationMasterListProps = {
    gamenId: 'H29',
    kengenCode: '000001',
    startDate: '000',
    endDate: '999',
    apGroupCode: '00000000',
  };

  return (
    <div>
      <h2>権限マスタリスト</h2>
      <AuthorizationMasterList {...sampleData} />
    </div>
  );
};

export default SampleUsage;