import React from 'react';
import styled from '@emotion/styled';

type CashFlowStatementProps = {
  data: {
    id: number;
    item: string;
    currentMonth: number;
    previousMonth: number;
    currentYear: number;
    previousYear: number;
  }[];
  companyName: string;
  period: string;
  unit: string;
  currentYearTotal: number;
  previousYearTotal: number;
};

const CashFlowStatement: React.FC<CashFlowStatementProps> = ({
  data,
  companyName,
  period,
  unit,
  currentYearTotal,
  previousYearTotal,
}) => {
  return (
    <Container>
      <Header>
        <CompanyName>{companyName || 'Company Name'}</CompanyName>
        <Title>キャッシュ・フロー計算書</Title>
        <Period>{period || 'Period'}</Period>
      </Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>集計番号</TableHeaderCell>
            <TableHeaderCell>項目名称</TableHeaderCell>
            <TableHeaderCell>当月金額</TableHeaderCell>
            <TableHeaderCell>前月金額</TableHeaderCell>
            <TableHeaderCell>当期金額</TableHeaderCell>
            <TableHeaderCell>前期金額</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.currentMonth.toLocaleString()} {unit}</TableCell>
              <TableCell>{row.previousMonth.toLocaleString()} {unit}</TableCell>
              <TableCell>{row.currentYear.toLocaleString()} {unit}</TableCell>
              <TableCell>{row.previousYear.toLocaleString()} {unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan={4}>合計</TableHeaderCell>
            <TableCell>{currentYearTotal.toLocaleString()} {unit}</TableCell>
            <TableCell>{previousYearTotal.toLocaleString()} {unit}</TableCell>
          </TableRow>  
        </TableFooter>
      </Table>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  margin: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 10px 0;
`;

const Period = styled.div`
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ccc;
`;

// Sample data for demonstration
const sampleData = [
  {
    id: 5,
    item: '業務活動による\nキャッシュ・フロー',
    currentMonth: 504550064,
    previousMonth: 504550064,
    currentYear: 0,
    previousYear: 504550064,
  },
  // ... more data
];

// Usage example
const CashFlowStatementExample: React.FC = () => {
  return (
    <CashFlowStatement
      data={sampleData}
      companyName="Company ABC"
      period="令和4年度 4月"
      unit="円"
      currentYearTotal={802213132}
      previousYearTotal={297883068}
    />
  );
};

export default CashFlowStatementExample;