import React from 'react';
import styled from 'styled-components';

// APグループコードとグループ名称の型定義
type ApGroup = {
  code: string;
  name: string;
};

// プロパティの型定義
type Props = {
  apGroups: ApGroup[];
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

// APグループ一覧マスタコンポーネント
const ApGroupMaster: React.FC<Props> = ({ apGroups }) => {
  return (
    <Container>
      <Title>APグループコード　個別設定可能フラグ</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>APグループコード</TableHeader>
            <TableHeader>個別設定</TableHeader>
            <TableHeader>グループ名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {apGroups.map((group) => (
            <TableRow key={group.code}>
              <TableCell>{group.code}</TableCell>
              <TableCell>{group.name ? '可' : '否'}</TableCell>
              <TableCell>{group.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ApGroupMaster;

// コンポーネントの使用例
const SampleData: ApGroup[] = [
  { code: '00000101', name: '可' },
  { code: '00000065', name: '可' },
  { code: '00000102', name: '可' },
  { code: '00000002', name: '可' },
  { code: '00000103', name: '可' },
  { code: '00000104', name: '可' },
  { code: '00000105', name: '可' },
  { code: '99999999', name: '可' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>APグループ一覧マスタ</h1>
      <ApGroupMaster apGroups={SampleData} />
    </div>
  );
};