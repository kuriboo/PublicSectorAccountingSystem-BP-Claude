import React from 'react';
import styled from '@emotion/styled';

// 仕訳性質区分マスタの型定義
type AccountType = {
  code: string;
  name: string;
};

type AccountTypeListProps = {
  accountTypes: AccountType[];
};

// 仕訳性質区分マスタコンポーネント
const AccountTypeList: React.FC<AccountTypeListProps> = ({ accountTypes }) => {
  return (
    <Container>
      <Title>仕訳性質区分マスタ</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {accountTypes.map((accountType) => (
            <tr key={accountType.code}>
              <TableData>{accountType.code}</TableData>
              <TableData>{accountType.name}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

// サンプルデータ
const sampleAccountTypes: AccountType[] = [
  { code: '050', name: '貯蔵入庫仕訳' },
  { code: '051', name: '貯蔵入庫生品損害仕訳' },
  { code: '062', name: '貯蔵出庫卸仕訳' },
  { code: '060', name: '貯蔵出庫仕訳' },
  { code: '062', name: '貯蔵出庫調節仕訳' },
  { code: '070', name: '貯蔵棚卸評価損仕訳' },
  { code: '081', name: '給与連携支払方法 口座振込' },
  { code: '082', name: '給与連携支払方法 納付書払(例)' },
  { code: '088', name: '給与連携支払方法 窓口払い(例)' },
  { code: '099', name: '固定決算仕訳' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <AccountTypeList accountTypes={sampleAccountTypes} />
    </div>
  );
};

export default App;