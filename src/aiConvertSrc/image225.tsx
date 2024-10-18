import React from 'react';
import styled from 'styled-components';

// 型定義
type DealingProps = {
  id: number;
  date: string;
  description: string;
  amount: number;
  balance: number;
};

type DealingsTableProps = {
  dealings: DealingProps[];
  fromDate?: string;
  toDate?: string;
  shop?: string;
  staff?: string;
  terminal?: string;
  minAmount?: number;
  maxAmount?: number;
};

// スタイル定義
const Container = styled.div`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;
`;

const TdCenter = styled(Td)`
  text-align: center;
`;

// コンポーネント定義
const DealingsTable: React.FC<DealingsTableProps> = ({
  dealings,
  fromDate,
  toDate,
  shop,
  staff,
  terminal,
  minAmount,
  maxAmount,
}) => {
  // 指定された条件でフィルタリング
  const filteredDealings = dealings.filter((dealing) => {
    if (fromDate && dealing.date < fromDate) return false;
    if (toDate && dealing.date > toDate) return false;
    if (shop && !dealing.description.includes(shop)) return false;
    if (staff && !dealing.description.includes(staff)) return false;
    if (terminal && !dealing.description.includes(terminal)) return false;
    if (minAmount && dealing.amount < minAmount) return false;
    if (maxAmount && dealing.amount > maxAmount) return false;
    return true;
  });

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>処理日</Th>
            <Th>決定番号</Th>
            <Th>取引種別</Th>
            <Th>決定額</Th>
            <Th>摘要</Th>
          </tr>
        </thead>
        <tbody>
          {filteredDealings.map((dealing) => (
            <tr key={dealing.id}>
              <TdCenter>{dealing.date}</TdCenter>
              <Td>{dealing.id}</Td>
              <TdCenter>{dealing.description}</TdCenter>
              <Td>{dealing.amount.toLocaleString()}</Td>
              <Td>{dealing.description}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DealingsTable;

// 使用例
const sampleData = [
  {
    id: 97,
    date: '23/06/17',
    description: '工事(負担金)',
    amount: 98,
    balance: 10000,
  },
  {
    id: 99,
    date: '23/06/17',
    description: '一般(負担無)',
    amount: 431700,
    balance: 25000,
  },
  {
    id: 100,
    date: '23/06/17',
    description: '一般(負担無)',
    amount: 1000,
    balance: 19900,
  },
];

const SampleUsage = () => {
  return (
    <DealingsTable
      dealings={sampleData}
      fromDate="23/06/17"
      toDate="23/06/25"
      minAmount={1000}
      maxAmount={100000}
    />
  );
};