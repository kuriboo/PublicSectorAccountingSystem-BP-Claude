import React from 'react';
import styled from '@emotion/styled';

// 補正料明細の型定義
type AdjustmentItem = {
  id: number;
  name: string;
  amount: number;
};

// 補正料明細コンポーネントのProps型定義
type AdjustmentItemsProps = {
  items: AdjustmentItem[];
};

// 補正料明細コンポーネント
const AdjustmentItems: React.FC<AdjustmentItemsProps> = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <Row>
          <HeaderCell>行番号</HeaderCell>
          <HeaderCell>精算基礎</HeaderCell>
          <HeaderCell>単価/数量</HeaderCell>
          <HeaderCell>金額(円)</HeaderCell>
          <HeaderCell>精算</HeaderCell>
        </Row>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.id}</Cell>
            <Cell>{item.name}</Cell>
            <Cell>*</Cell>
            <Cell>{item.amount.toLocaleString()}</Cell>
            <Cell>積算</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Cell = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

// 使用例
const sampleData: AdjustmentItem[] = [
  { id: 10, name: '6年度当初予算', amount: 30000000 },
  { id: 15, name: '令和6年度補正予算', amount: 42000000 },
  { id: 25, name: '令和6年度補正予定', amount: 42000000 },
];

const AdjustmentItemsExample: React.FC = () => {
  return (
    <div>
      <h2>補正料明細</h2>
      <AdjustmentItems items={sampleData} />
    </div>
  );
};

export default AdjustmentItemsExample;