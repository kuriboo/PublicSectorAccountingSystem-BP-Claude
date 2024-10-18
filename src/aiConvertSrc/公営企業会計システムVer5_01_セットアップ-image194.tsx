// 仕訳性質区分マスタコンポーネント
import React from 'react';
import styled from '@emotion/styled';

// 仕訳性質区分の型定義
type AccountingType = {
  code: string;
  name: string;
};

// コンポーネントのプロパティ型定義
type Props = {
  accountingTypes: AccountingType[];
};

const AccountingTypeMaster: React.FC<Props> = ({ accountingTypes }) => {
  return (
    <Container>
      <Title>仕訳性質区分マスタ</Title>
      <Table>
        <thead>
          <tr>
            <Th>コード</Th>
            <Th>名称</Th>
          </tr>
        </thead>
        <tbody>
          {accountingTypes.map((type) => (
            <tr key={type.code}>
              <Td>{type.code}</Td>
              <Td>{type.name}</Td>
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

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  font-weight: bold;
`;

const Td = styled.td`
  text-align: center;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: AccountingType[] = [
    { code: '050', name: '貯蔵入庫仕訳' },
    { code: '051', name: '貯蔵入庫残生品損害仕訳' },
    { code: '062', name: '貯蔵入庫調整仕訳' },
    { code: '060', name: '貯蔵出庫仕訳' },
    { code: '062', name: '貯蔵出庫調整仕訳' },
    { code: '070', name: '貯蔵廃却仕訳' },
    { code: '081', name: '給与連携支払方法' },
    { code: '082', name: '給与連携支払方法' },
    { code: '089', name: '給与連携支払方法' },
    { code: '099', name: '固定決算仕訳' },
  ];

  return <AccountingTypeMaster accountingTypes={sampleData} />;
};

export default SampleUsage;