import React from 'react';
import styled from '@emotion/styled';

type CashFlowProps = {
  incomeDetails: string[];
  expenseDetails: string[];
  incomeAmounts: number[];
  expenseAmounts: number[];
  totalIncome: number;
  totalExpense: number;
  netCashFlow: number;
};

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const CashFlow: React.FC<CashFlowProps> = ({
  incomeDetails,
  expenseDetails,
  incomeAmounts,
  expenseAmounts,
  totalIncome,
  totalExpense,
  netCashFlow,
}) => {
  // 収入明細と金額の行を生成
  const incomeRows = incomeDetails.map((detail, index) => (
    <tr key={`income-${index}`}>
      <td>{detail}</td>
      <td>{incomeAmounts[index]}</td>
    </tr>
  ));

  // 支出明細と金額の行を生成
  const expenseRows = expenseDetails.map((detail, index) => (
    <tr key={`expense-${index}`}>
      <td>{detail}</td>
      <td>{expenseAmounts[index]}</td>
    </tr>
  ));

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>収入</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {incomeRows}
          <TotalRow>
            <td>合計</td>
            <td>{totalIncome}</td>
          </TotalRow>
        </tbody>
      </Table>

      <Table>
        <thead>
          <tr>
            <th>支出</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {expenseRows}
          <TotalRow>
            <td>合計</td>
            <td>{totalExpense}</td>
          </TotalRow>
        </tbody>
      </Table>

      <p>現在額: {netCashFlow}</p>
    </TableContainer>
  );
};

// サンプルデータを用いた使用例
const CashFlowExample: React.FC = () => {
  const incomeDetails = ['給与', '利息', '配当金'];
  const expenseDetails = ['家賃', '食費', '交通費', '水道光熱費'];
  const incomeAmounts = [300000, 500, 2000];
  const expenseAmounts = [80000, 30000, 10000, 15000];

  const totalIncome = incomeAmounts.reduce((sum, amount) => sum + amount, 0);
  const totalExpense = expenseAmounts.reduce((sum, amount) => sum + amount, 0);
  const netCashFlow = totalIncome - totalExpense;

  return (
    <CashFlow
      incomeDetails={incomeDetails}
      expenseDetails={expenseDetails}
      incomeAmounts={incomeAmounts}
      expenseAmounts={expenseAmounts}
      totalIncome={totalIncome}
      totalExpense={totalExpense}
      netCashFlow={netCashFlow}
    />
  );
};

export default CashFlowExample;