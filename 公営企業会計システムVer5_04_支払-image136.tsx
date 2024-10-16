import React from 'react';
import styled from '@emotion/styled';

interface SupportDecisionData {
  date: string;
  name: string;
  amount: number;
  tax: number;
  totalAmount: number;
  status: string;
}

interface SupportDecisionProps {
  decisionNumber: string;
  date: string;
  name: string;
  paymentDate: string;
  taxAmount: number;
  totalAmount: number;
  tableData: SupportDecisionData[];
}

const SupportDecision: React.FC<SupportDecisionProps> = ({
  decisionNumber,
  date,
  name,
  paymentDate,
  taxAmount,
  totalAmount,
  tableData,
}) => {
  return (
    <Container>
      <Title>生活保護決定通知書</Title>
      <InfoContainer>
        <InfoItem>
          <InfoLabel>決定決定</InfoLabel>
          <InfoValue>{decisionNumber}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>支払日</InfoLabel>
          <InfoValue>{paymentDate}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>支払方法</InfoLabel>
          <InfoValue>銀行振込</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>支払先</InfoLabel>
          <InfoValue>{name}</InfoValue>
        </InfoItem>
      </InfoContainer>
      <SummaryContainer>
        <SummaryItem>
          <SummaryLabel>決定額</SummaryLabel>
          <SummaryValue>{totalAmount.toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>本体額</SummaryLabel>
          <SummaryValue>{(totalAmount - taxAmount).toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>消費税額</SummaryLabel>
          <SummaryValue>{taxAmount.toLocaleString()}</SummaryValue>
        </SummaryItem>
      </SummaryContainer>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>支出節</TableHeaderCell>
            <TableHeaderCell>支出細節</TableHeaderCell>
            <TableHeaderCell>支出明細</TableHeaderCell>
            <TableHeaderCell>税</TableHeaderCell>
            <TableHeaderCell>決定額</TableHeaderCell>
            <TableHeaderCell>消費税額</TableHeaderCell>
            <TableHeaderCell>税抜金額</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.totalAmount.toLocaleString()}</TableCell>
              <TableCell>{row.tax.toLocaleString()}</TableCell>
              <TableCell>{(row.totalAmount - row.tax).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

const SampleData: SupportDecisionProps = {
  decisionNumber: '平成29 年度',
  date: '平成29年07月20日',
  name: '納付書払',
  paymentDate: '00000000001 000000',
  taxAmount: 148,
  totalAmount: 10000,
  tableData: [
    {
      date: '原/通・給料', 
      name: '給料',
      amount: 1000,
      tax: 0,
      totalAmount: 1000,
      status: '振分なし',
    },
    {
      date: '原/通・給料', 
      name: '流用／給料',
      amount: 2000,
      tax: 148,
      totalAmount: 1852,
      status: '課税',
    },
    {
      date: '原/通・手当等', 
      name: '勤労手当',
      amount: 7000,
      tax: 0,
      totalAmount: 7000,
      status: 'x課税',
    },
  ],
};

const SampleUsage: React.FC = () => {
  return (
    <SupportDecision {...SampleData} />
  );
};

export default SampleUsage;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const InfoValue = styled.div`
  
`;

const SummaryContainer = styled.div`
  display: flex;  
  gap: 20px;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  flex: 1;
  text-align: right;
`;

const SummaryLabel = styled.div`
  font-size: 0.8em;
`;

const SummaryValue = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  
`;  

const TableBody = styled.tbody`
  
`;

const TableRow = styled.tr`
  
`;

const TableHeaderCell = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #eee;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;  
  text-align: right;
`;