import React from 'react';
import styled from 'styled-components';

// 型定義
type CompanyBillingProps = {
  companyName: string;
  year: string;
  billingMethod: string;
  prediction1: string;
  prediction2: string;
  date1: string;
  date2: string;
  finalDate: string;
  settlementDate: string;
};

// コンポーネントのスタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const Header = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 0.5rem;
`;

// メインコンポーネント
const CompanyBilling: React.FC<CompanyBillingProps> = ({
  companyName,
  year,
  billingMethod,
  prediction1,
  prediction2,
  date1,
  date2, 
  finalDate,
  settlementDate,
}) => {
  return (
    <Container>
      <Header>会計別予算明細性質</Header>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>会計年度</TableHeader>
            <TableData>{year}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>会計別予算性質区分</TableHeader>
            <TableData>{billingMethod}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算数</TableHeader>
            <TableData>{prediction1}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算項</TableHeader>
            <TableData>{prediction2}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算日</TableHeader>
            <TableData>{date1}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算節</TableHeader>
            <TableData>{date2}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算明細</TableHeader>
            <TableData>{finalDate}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>予算明細節</TableHeader>
            <TableData>{settlementDate}</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <CompanyBilling
      companyName="株式会社テスト"
      year="平成29年度"
      billingMethod="過年度修正損益"
      prediction1="002 水道事業費用"
      prediction2="01 営業費用"
      date1="01 原水及び浄水費"
      date2="0001 給料"
      finalDate="0001 給料"
      settlementDate="0001 給料"
    />
  );
};

export default CompanyBilling;