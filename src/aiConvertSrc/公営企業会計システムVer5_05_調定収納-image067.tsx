以下は、画像を元にしたNext.js + TypeScriptのコンポーネントのコードです。

import React from 'react';
import styled from 'styled-components';

// 型定義
type Props = {
  startDate: string;
  endDate: string;
  workName: string;
  workDetails: string;
  department: string;
  expenses: {
    expenseTypes: string[];
    amounts: number[];
    taxOptions: string[];
  };
  applyForTreatment: string;
  customerCharge: number;
  taxRate: number;
  totalAmount: number;
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 5px;
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const CompanyExpenseReportForm: React.FC<Props> = ({
  startDate,
  endDate,
  workName,
  workDetails,
  department,
  expenses,
  applyForTreatment,
  customerCharge,
  taxRate,
  totalAmount,
}) => {
  // 経費の合計を計算
  const totalExpenses = expenses.amounts.reduce((sum, amount) => sum + amount, 0);

  return (
    <Container>
      <Title>経費申請書</Title>
      <Section>
        <div>期間: {startDate} - {endDate}</div>
        <div>仕訳: {workName}</div>
        <div>摘要: {workDetails}</div>
        <div>部署 / 担当者: {department}</div>
      </Section>
      <Section>
        <SectionTitle>費用内訳</SectionTitle>
        <Table>
          <thead>
            <tr>
              {expenses.expenseTypes.map((type, index) => (
                <th key={index}>{type}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {expenses.amounts.map((amount, index) => (
                <td key={index}>{amount.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              {expenses.taxOptions.map((option, index) => (
                <td key={index}>{option}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section>
        <div>合計: {totalExpenses.toLocaleString()}</div>
        <div>処理区分: {applyForTreatment}</div>
        <div>税込金額: {customerCharge.toLocaleString()}</div>
        <div>消費税率: {taxRate}%</div>
        <div>消費税額: {totalAmount.toLocaleString()}</div>
      </Section>
    </Container>
  );
};

// サンプルデータを使用したコンポーネントの使用例
const SampleData: Props = {
  startDate: '令和5年10月12日',
  endDate: '令和5年10月12日',
  workName: '備品代の費用長入',
  workDetails: '生産工場の備品購入',
  department: '総務 / 高橋 太郎',
  expenses: {
    expenseTypes: ['借方科目', '借方細目', '借方明細'],
    amounts: [0, 25000, 0],
    taxOptions: ['課税', '課税', ''],
  },
  applyForTreatment: '期中仕訳',
  customerCharge: 0,
  taxRate: 10,
  totalAmount: 2275,
};

const App: React.FC = () => {
  return (
    <div>
      <CompanyExpenseReportForm {...SampleData} />
    </div>
  );
};

export default App;