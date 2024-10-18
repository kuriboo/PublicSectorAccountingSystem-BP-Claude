import React from 'react';
import styled from 'styled-components';

// 借方情報の型定義
interface DebitInfo {
  accrualDate: string;
  debit: number;
  credit: number;
  creditBalance: number;
  debitBalance: number;
}

// 信用障壁照会コンポーネントのプロパティ型定義
interface CreditInquiryProps {
  investorNumber: string;
  investorName: string;
  receivableDate: string;
  creditLimit: number;
  debitInfo: DebitInfo[];
}

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: right;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

// 信用障壁照会コンポーネント
const CreditInquiry: React.FC<CreditInquiryProps> = ({
  investorNumber,
  investorName,
  receivableDate,
  creditLimit,
  debitInfo,
}) => {
  // 合計値の計算
  const totalCredit = debitInfo.reduce((sum, item) => sum + item.credit, 0);
  const totalDebit = debitInfo.reduce((sum, item) => sum + item.debit, 0);
  const totalCreditBalance = debitInfo.reduce((sum, item) => sum + item.creditBalance, 0);
  const totalDebitBalance = debitInfo.reduce((sum, item) => sum + item.debitBalance, 0);

  return (
    <Container>
      <h2>信用障壁照会</h2>
      <p>資産番号: {investorNumber}</p>
      <p>資産名称: {investorName}</p>
      <p>取得年月日: {receivableDate}</p>
      <p>信用方法: 定額法</p>
      <p>取得価額: {creditLimit.toLocaleString()}</p>

      <Table>
        <thead>
          <tr>
            <Th>前期末残</Th>
            <Th>当年度増加</Th>
            <Th>当年度減少</Th>
            <Th>差引額</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>0</Td>
            <Td>{creditLimit.toLocaleString()}</Td>
            <Td>0</Td>
            <Td>{creditLimit.toLocaleString()}</Td>
          </tr>
        </tbody>
      </Table>

      <Table>
        <thead>
          <tr>
            <Th>異動年月日</Th>
            <Th>異動区分</Th>
            <Th>異動内容</Th>
            <Th>異正額</Th>
            <Th>増減額</Th>
            <Th>累計額</Th>
            <Th>減価償却額</Th>
          </tr>
        </thead>
        <tbody>
          {debitInfo.map((item, index) => (
            <tr key={index}>
              <Td>{item.accrualDate}</Td>
              <Td>取得</Td>
              <Td>取得</Td>
              <Td>{item.debit.toLocaleString()}</Td>
              <Td>{item.credit.toLocaleString()}</Td>
              <Td>{item.creditBalance.toLocaleString()}</Td>
              <Td>0</Td>
            </tr>
          ))}
          <TotalRow>
            <Td colSpan={3}>合計</Td>
            <Td>{totalDebit.toLocaleString()}</Td>
            <Td>{totalCredit.toLocaleString()}</Td>
            <Td>{totalCreditBalance.toLocaleString()}</Td>
            <Td>{totalDebitBalance.toLocaleString()}</Td>
          </TotalRow>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: CreditInquiryProps = {
  investorNumber: '8002500',
  investorName: '訳水管改良工事',
  receivableDate: '平成29年09月12日',
  creditLimit: 7000000,
  debitInfo: [
    {
      accrualDate: '2017-08-12',
      debit: 7000000,
      credit: 0,
      creditBalance: 7000000,
      debitBalance: 0,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>信用障壁照会</h1>
      <CreditInquiry {...sampleData} />
    </div>
  );
};

export default App;