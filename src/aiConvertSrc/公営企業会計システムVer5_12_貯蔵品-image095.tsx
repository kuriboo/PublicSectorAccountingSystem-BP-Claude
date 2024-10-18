import React from 'react';
import styled from 'styled-components';

// 単価リストの型定義
type UnitPriceItem = {
  code: string;
  name: string;
  nameKana: string;
  price: number;
};

type UnitPriceListProps = {
  items: UnitPriceItem[];
};

// 単価リストコンポーネント
const UnitPriceList: React.FC<UnitPriceListProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>名称</TableHeader>
          <TableHeader>名称(カナ)</TableHeader>
          <TableHeader>単価</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableRow key={item.code}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.nameKana}</TableCell>
            <TableCell>{item.price.toLocaleString()}円</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleItems: UnitPriceItem[] = [
  { code: '001000', name: '運水器 新品', nameKana: '運水器 新品', price: 123456 },
  { code: '000000', name: '運水器 パーター', nameKana: '運水器 パーター', price: 98765 },
  { code: '000300', name: '運水器 改造', nameKana: '運水器 改造', price: 55555 },
];

// 使用例
const UnitPriceListExample: React.FC = () => {
  return (
    <div>
      <h2>単価リスト</h2>
      <UnitPriceList items={sampleItems} />
    </div>
  );
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export default UnitPriceList;