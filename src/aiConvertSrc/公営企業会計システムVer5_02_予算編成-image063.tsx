import React from 'react';
import styled from '@emotion/styled';

// 予算集計表のプロパティの型定義
type BudgetTableProps = {
  fiscalYear: string;
  department: string;
  segment: string;
  accountTitle: string;
  executionType: string;
  budgetAmount: number;
  forecastAmount: number;
  startDate: string;
  endDate: string;
  taxRate: number;
  taxType: string;
  notes: string;
};

// 予算集計表のスタイル定義
const TableContainer = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    text-align: left;
  }
`;

const RowGroup = styled.tbody`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

// 予算集計表のコンポーネント
const BudgetTable: React.FC<BudgetTableProps> = ({
  fiscalYear,
  department,
  segment,
  accountTitle,
  executionType,
  budgetAmount,
  forecastAmount,
  startDate,
  endDate,
  taxRate,
  taxType,
  notes,
}) => {
  return (
    <TableContainer>
      <h2>予算集計表</h2>
      <Table>
        <thead>
          <tr>
            <th>年度</th>
            <th>予算編成区分</th>
            <th>回数</th>
            <th>帳票種別</th>
            <th>最終査定値</th>
            <th>科目レベル</th>
            <th>範囲指定（所属）</th>
            <th>範囲指定（予算科目）</th>
            <th>税率指定</th>
            <th>集計対象</th>
          </tr>
        </thead>
        <RowGroup>
          <tr>
            <td>{fiscalYear}</td>
            <td>{segment || '-'}</td>
            <td>{department || '-'}</td>
            <td>{executionType || '-'}</td>
            <td>{accountTitle || '-'}</td>
            <td>日</td>
            <td>{startDate || '-'} 〜 {endDate || '-'}</td>
            <td>{budgetAmount.toLocaleString() || '-'} 〜 {forecastAmount.toLocaleString() || '-'}</td>
            <td>{taxRate}% {taxType}</td>
            <td>{notes || '-'}</td>
          </tr>
        </RowGroup>
      </Table>
    </TableContainer>
  );
};

// サンプルデータ
const sampleData: BudgetTableProps = {
  fiscalYear: '令和05年07月24日',
  department: '当初予算',
  segment: '',
  accountTitle: '所属別',
  executionType: '見積要求額',
  budgetAmount: 0,
  forecastAmount: 9999999,
  startDate: '0000000',
  endDate: '9999999',
  taxRate: 10,
  taxType: '軽減税率',
  notes: '全体',
};

// サンプルデータを使用した表示用コンポーネント
const BudgetTableSample: React.FC = () => {
  return <BudgetTable {...sampleData} />;
};

export default BudgetTableSample;