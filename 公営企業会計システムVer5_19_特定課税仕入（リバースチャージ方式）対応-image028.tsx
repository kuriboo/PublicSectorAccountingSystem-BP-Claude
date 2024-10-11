以下は、画像の表データを元に作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

type TaxItem = {
  name: string;
  type: string;
  calculation: string;
  taxRate: number;
  isSpecialTax: boolean;
  amount: number;
};

type TaxTableProps = {
  items: TaxItem[];
};

const TaxTable: React.FC<TaxTableProps> = ({ items }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>支出</Th>
            <Th>不課税支出</Th>
            <Th>収益的支出</Th>
            <Th>不課税</Th>
            <Th>税率</Th>
            <Th>金額</Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.type}</Td>
              <Td>{item.calculation}</Td>
              <Td>{item.isSpecialTax ? '不課税' : ''}</Td>
              <Td>{item.taxRate}</Td>
              <Td>{item.amount.toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }

    th {
      text-align: center;
    }
  }
`;

const Th = styled.th`
  font-weight: bold;
`;

const Td = styled.td`
  white-space: nowrap;
`;

// サンプルデータ
const sampleData: TaxItem[] = [
  {
    name: '支出',
    type: '不課税支出',
    calculation: '収益的支出', 
    taxRate: 3,
    isSpecialTax: false,
    amount: 1137468
  },
  {
    name: '支出',
    type: '不課税支出',
    calculation: '収益的支出',
    taxRate: 3,
    isSpecialTax: false, 
    amount: 21300
  },
  // ... 他のデータ
];

// 使用例
const TaxTableExample: React.FC = () => {
  return (
    <div>
      <h2>税金表</h2>
      <TaxTable items={sampleData} />
    </div>
  );
};

export default TaxTableExample;