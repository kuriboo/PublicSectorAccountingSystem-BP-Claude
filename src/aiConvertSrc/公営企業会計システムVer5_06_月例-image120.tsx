import React from 'react';
import styled from '@emotion/styled';

type LoanStatusTableProps = {
  date: string;
  administrativeOffice: string;
  administrativePosition: string;
  companyName: string;
};

const LoanStatusTableWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const TableHeader = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const TableContent = styled.div`
  background-color: white;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const DateText = styled.p`
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const LoanStatusTable: React.FC<LoanStatusTableProps> = ({
  date,
  administrativeOffice,
  administrativePosition,
  companyName,
}) => {
  return (
    <LoanStatusTableWrapper>
      <TableHeader>月次貸借対照表</TableHeader>
      <TableContent>
        <DateText>作成日付 令和05年07月24日</DateText>
        {/* Display other loan status details */}
      </TableContent>
    </LoanStatusTableWrapper>
  );
};

// Example usage
const ExampleLoanStatus = () => {
  return (
    <LoanStatusTable
      date="令和05年07月24日"
      administrativeOffice="行政市事業会計"
      administrativePosition="最高権限 管理者 行政 太郎"
      companyName="令和05年07月24日"
    />
  );
};

export default LoanStatusTable;