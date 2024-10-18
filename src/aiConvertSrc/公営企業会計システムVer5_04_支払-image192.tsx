import React from 'react';
import styled from 'styled-components';

// 収入予算差引簿照会コンポーネントの型定義
type IncomeStatementProps = {
  year: number;
  month: number;
  department: string;
  estimatedIncome: number;
  actualIncome: number;
  estimatedExpense: number;
  actualExpense: number;
  balance: number;
  details: Array<{
    date: string;
    item: string;
    description: string;
    month: number;
    day: number;
    numberOfStaff: number;
    amount: number;
    monthlyTotal: number;
  }>;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ccc;
`;

// 収入予算差引簿照会コンポーネント
const IncomeStatement: React.FC<IncomeStatementProps> = ({
  year,
  month,
  department,
  estimatedIncome,
  actualIncome,
  estimatedExpense,
  actualExpense,
  balance,
  details,
}) => {
  return (
    <Container>
      <Header>
        <Title>収入予算差引簿照会</Title>
        <div>
          {year}年{month}月{department}
        </div>
      </Header>
      <div>
        <div>予算・執行情報</div>
        <div>
          <div>前年度繰越金: {estimatedIncome.toLocaleString()}</div>
          <div>予算現額: {actualIncome.toLocaleString()}</div>
          <div>執行額: {actualExpense.toLocaleString()}</div>
          <div>合計: {balance.toLocaleString()}</div>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>日</TableHeader>
            <TableHeader>処理</TableHeader>
            <TableHeader>摘要</TableHeader>
            <TableHeader>月分</TableHeader>
            <TableHeader>回目</TableHeader>
            <TableHeader>人数</TableHeader>
            <TableHeader>執行額</TableHeader>
            <TableHeader>内訳累積額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {details.map((row, i) => (
            <tr key={i}>
              <TableCell>{`${row.month}/${row.day}`}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.day}</TableCell>
              <TableCell>{row.numberOfStaff}</TableCell>
              <TableCell>{row.amount.toLocaleString()}</TableCell>
              <TableCell>{row.monthlyTotal.toLocaleString()}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: IncomeStatementProps = {
  year: 2029,
  month: 6,
  department: '予算・会計担当 ぎょうせい太郎',
  estimatedIncome: 5607664,
  actualIncome: 5607664,
  estimatedExpense: 1,
  actualExpense: 5607665,
  balance: 1,
  details: [
    {
      date: '2029年6月17日',
      item: '水道料金',
      description: '水道料金の調整',
      month: 4,
      day: 22,
      numberOfStaff: 1,
      amount: 1,
      monthlyTotal: 74,
    },
    {
      date: '2029年6月17日',
      item: '細定規額',
      description: '水道料金の調整',
      month: 4,
      day: 4,
      numberOfStaff: 5,
      amount: -1,
      monthlyTotal: -74,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <IncomeStatement {...sampleData} />
    </div>
  );
};

export default App;