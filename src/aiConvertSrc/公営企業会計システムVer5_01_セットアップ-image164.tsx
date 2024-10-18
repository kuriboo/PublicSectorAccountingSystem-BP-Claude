import React from 'react';
import styled from '@emotion/styled';

type ElectricMasterData = {
  id: string;
  name: string;
  account: string;
  debitAccount: string;
  note: string;
  connection: string;
  isEdit: boolean;
};

type Props = {
  data: ElectricMasterData[];
};

const ElectricMaster: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Title>電子決裁連携マスタ</Title>
      <Table>
        <thead>
          <tr>
            <Th>画面ID</Th>
            <Th>帳票ID</Th>
            <Th>名称</Th>
            <Th>表示件名</Th>
            <Th>帳票</Th>
            <Th>連携有無</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.account}</Td>
              <Td>{item.name}</Td>
              <Td>{item.debitAccount}</Td>
              <Td>{item.note}</Td>
              <Td>{item.connection}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Sample data for preview
const sampleData: ElectricMasterData[] = [
  {
    id: 'MAD0010',
    name: '予定支出負担入力(一般)',
    account: '予定(一般)',
    debitAccount: '-',
    note: '必須',
    connection: '有',
    isEdit: false,
  },
  {
    id: 'MAP0011',
    name: '入札執行依頼書(一般)',
    account: '-',
    debitAccount: '-',
    note: '任意',
    connection: '有',
    isEdit: false,
  },
  // ...
];

const ElectricMasterPreview: React.FC = () => {
  return <ElectricMaster data={sampleData} />;
};

export default ElectricMasterPreview;

// Styles
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
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td`
  word-break: break-all;
`;