import React from 'react';
import styled from '@emotion/styled';

// 計算書の項目の型定義
type Item = {
  id: string;
  name: string;
  value: string;
  gf: string;
};

// キャッシュフロー計算書コンポーネントのプロパティの型定義
type CashFlowStatementProps = {
  items: Item[];
  years: string[];
};

// キャッシュフロー計算書コンポーネント
const CashFlowStatement: React.FC<CashFlowStatementProps> = ({ items, years }) => {
  // 項目が未定義の場合は何も表示しない
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Statement>
      <Header>
        <HeaderCell>項目</HeaderCell>
        {years.map((year) => (
          <HeaderCell key={year}>{year}</HeaderCell>
        ))}
        <HeaderCell>GFS分</HeaderCell>
      </Header>
      <Body>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.name}</Cell>
            <Cell>{item.value}</Cell>
            <Cell>{item.gf}</Cell>
          </Row>
        ))}
      </Body>
    </Statement>
  );
};

// スタイリング
const Statement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Header = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
`;

const Body = styled.tbody``;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

// サンプルデータ
const sampleItems: Item[] = [
  { id: '1', name: '業務活動によるキャッシュ・フロー', value: '計算値', gf: '業務活動' },
  { id: '2', name: '10 当年度純利益', value: '当期純利益', gf: '業務活動' },
  { id: '3', name: '15 減価償却費', value: '未出明細', gf: '業務活動' },
  // 他の項目...
];

const sampleYears = ['項目', '項目区分', 'GFS分'];

// サンプルコンポーネント
const SampleCashFlowStatement: React.FC = () => {
  return <CashFlowStatement items={sampleItems} years={sampleYears} />;
};

export default SampleCashFlowStatement;