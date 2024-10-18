import React from 'react';
import styled from '@emotion/styled';

interface BudgetData {
  category: string;
  currentAmount: number;
  budget: number;
  actualAmount: number;
  plannedAmount: number;
  carryOver: number;
  actualCarryOver: number;
}

interface BudgetTableProps {
  data: BudgetData[];
  totalBudget: number;
  totalActualAmount: number;
  totalPlannedAmount: number;
  totalCarryOver: number;
  totalActualCarryOver: number;
}

const BudgetTable: React.FC<BudgetTableProps> = ({
  data,
  totalBudget,
  totalActualAmount,
  totalPlannedAmount,
  totalCarryOver,
  totalActualCarryOver,
}) => {
  return (
    <TableWrapper>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>科目</HeaderCell>
          <HeaderCell>内訳区分</HeaderCell>
          <AmountHeaderCell>残額前</AmountHeaderCell>
          <AmountHeaderCell>修正残額計</AmountHeaderCell>
          <AmountHeaderCell>翌期額</AmountHeaderCell>
          <AmountHeaderCell>修正翌期額計</AmountHeaderCell>
          <AmountHeaderCell>繰越計</AmountHeaderCell>
          <AmountHeaderCell>修正繰越計</AmountHeaderCell>
        </HeaderRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <BodyRow key={index}>
            <BodyCell>{item.category}</BodyCell>
            <BodyCell>{item.currentAmount.toLocaleString()}</BodyCell>
            <AmountCell>{item.budget.toLocaleString()}</AmountCell>
            <AmountCell>{item.actualAmount.toLocaleString()}</AmountCell>
            <AmountCell>{item.plannedAmount.toLocaleString()}</AmountCell>
            <AmountCell>{item.carryOver.toLocaleString()}</AmountCell>
            <AmountCell>{item.actualCarryOver.toLocaleString()}</AmountCell>
          </BodyRow>
        ))}
      </TableBody>
      <TableFooter>
        <FooterRow>
          <FooterCell colSpan={2}>合計</FooterCell>
          <AmountCell>{totalBudget.toLocaleString()}</AmountCell>
          <AmountCell>{totalActualAmount.toLocaleString()}</AmountCell>
          <AmountCell>{totalPlannedAmount.toLocaleString()}</AmountCell>
          <AmountCell>{totalCarryOver.toLocaleString()}</AmountCell>
          <AmountCell>{totalActualCarryOver.toLocaleString()}</AmountCell>
        </FooterRow>
      </TableFooter>
    </TableWrapper>
  );
};

// Styled components
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const HeaderRow = styled.tr``;

const BodyRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const FooterRow = styled.tr`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const AmountHeaderCell = styled(HeaderCell)`
  text-align: right;
`;

const BodyCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const AmountCell = styled(BodyCell)`
  text-align: right;
`;

const FooterCell = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

// Sample usage
const BudgetTableSample: React.FC = () => {
  const sampleData: BudgetData[] = [
    {
      category: '自己資源',
      currentAmount: 1260,
      budget: 569928,
      actualAmount: 541432,
      plannedAmount: 15831,
      carryOver: 15,089,
      actualCarryOver: 526,393,
    },
    {
      category: '上記資源',
      currentAmount: 1260,
      budget: 150,072,
      actualAmount: 142,568,
      plannedAmount: 4,169,
      carryOver: 3,907,
      actualCarryOver: 138,607,
    },
  ];

  const totalBudget = 720000;
  const totalActualAmount = 684000;
  const totalPlannedAmount = 20000;
  const totalCarryOver = 19000;
  const totalActualCarryOver = 665000;

  return (
    <BudgetTable
      data={sampleData}
      totalBudget={totalBudget}
      totalActualAmount={totalActualAmount}
      totalPlannedAmount={totalPlannedAmount}
      totalCarryOver={totalCarryOver}
      totalActualCarryOver={totalActualCarryOver}
    />
  );
};

export default BudgetTableSample;