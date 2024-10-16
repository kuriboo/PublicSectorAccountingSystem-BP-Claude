import React from 'react';
import styled from '@emotion/styled';

type TransactionData = {
  date: string;
  no: string;
  branchCode: string;
  branchName: string;
  debitAmount: number;
  creditAmount: number;
  balance: number;
  remarks: string;
};

type Props = {
  data: TransactionData[];
};

const TransactionTable: React.FC<Props> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>日付</TableHeaderCell>
            <TableHeaderCell>番号</TableHeaderCell>
            <TableHeaderCell>明細番号</TableHeaderCell>
            <TableHeaderCell>借方金額</TableHeaderCell>
            <TableHeaderCell>貸方金額</TableHeaderCell>
            <TableHeaderCell>残高</TableHeaderCell>
            <TableHeaderCell>摘要</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.no}</TableCell>
              <TableCell>{row.branchCode}</TableCell>
              <TableCell>{row.debitAmount.toLocaleString()}</TableCell>
              <TableCell>{row.creditAmount.toLocaleString()}</TableCell>
              <TableCell>{row.balance.toLocaleString()}</TableCell>
              <TableCell>{row.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Styled components
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

// Sample data for demonstration
const sampleData: TransactionData[] = [
  {
    date: '平成29年08月04日',
    no: '0001',
    branchCode: '0621',
    branchName: '預り保税',
    debitAmount: 0,
    creditAmount: 0,
    balance: 3031693,
    remarks: '期末残高',
  },
  // Add more sample data as needed
];

const TransactionTableDemo: React.FC = () => {
  return (
    <div>
      <h2>Transaction Table Demo</h2>
      <TransactionTable data={sampleData} />
    </div>
  );
};

export default TransactionTableDemo;