import React from 'react';
import styled from 'styled-components';

// 財源情報の型定義
interface FundingSource {
  name: string;
  type: string;
  budget: number;
  count: number;
  total: number;
}

// 財源情報コンポーネントのプロパティの型定義
interface FundingSourcesTableProps {
  fundingSources: FundingSource[];
  totalBudget: number;
  totalCount: number;
  grandTotal: number;
}

// 財源情報コンポーネント
const FundingSourcesTable: React.FC<FundingSourcesTableProps> = ({
  fundingSources,
  totalBudget,
  totalCount,
  grandTotal,
}) => {
  return (
    <TableWrapper>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>財源名称</TableHeaderCell>
            <TableHeaderCell>区分</TableHeaderCell>
            <TableHeaderCell>単価</TableHeaderCell>
            <TableHeaderCell>員数</TableHeaderCell>
            <TableHeaderCell>金額</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fundingSources.map((source, index) => (
            <TableRow key={index}>
              <TableCell>{source.name}</TableCell>
              <TableCell>{source.type}</TableCell>
              <TableCell>{source.budget.toLocaleString()}</TableCell>
              <TableCell>{source.count.toLocaleString()}</TableCell>
              <TableCell>{source.total.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TotalRow>
        <TotalCell colSpan={2}>合計</TotalCell>
        <TotalCell>{totalBudget.toLocaleString()}</TotalCell>
        <TotalCell>{totalCount.toLocaleString()}</TotalCell>
        <TotalCell>{grandTotal.toLocaleString()}</TotalCell>
      </TotalRow>
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
  font-size: 14px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  text-align: right;
  border: 1px solid #ddd;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const TotalCell = styled.td`
  padding: 8px;
  text-align: right;
  border: 1px solid #ddd;
`;

// サンプルデータ
const sampleData: FundingSource[] = [
  { name: '自己財源', type: '信託対象', budget: 3000000, count: 1000, total: 3000000 },
  { name: '工事負担金', type: '信託対象', budget: 4000000, count: 500, total: 4000000 },
];

// 使用例
const FundingSourcesTableExample: React.FC = () => {
  const totalBudget = sampleData.reduce((sum, source) => sum + source.budget, 0);
  const totalCount = sampleData.reduce((sum, source) => sum + source.count, 0);
  const grandTotal = sampleData.reduce((sum, source) => sum + source.total, 0);

  return (
    <FundingSourcesTable
      fundingSources={sampleData}
      totalBudget={totalBudget}
      totalCount={totalCount}
      grandTotal={grandTotal}
    />
  );
};

export default FundingSourcesTableExample;